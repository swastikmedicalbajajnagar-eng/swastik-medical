"use client";

import { useEffect, useState } from "react";

export type CustomerDetails = {
  name: string;
  phone: string;
  address: string;
  pincode: string;
};

type Props = {
  onChange: (data: CustomerDetails, valid: boolean) => void;
};

export default function CustomerForm({ onChange }: Props) {
  const [form, setForm] = useState<CustomerDetails>({
    name: "",
    phone: "",
    address: "",
    pincode: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("customer-details");

    if (saved) {
      setForm(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("customer-details", JSON.stringify(form));

    const phoneValid = /^[6-9]\d{9}$/.test(form.phone);
    const pinValid = /^\d{6}$/.test(form.pincode);

    const valid =
      form.name.trim() !== "" &&
      phoneValid &&
      form.address.trim() !== "" &&
      pinValid;

    onChange(form, valid);
  }, [form, onChange]);

  return (
    <div className="space-y-4 mb-8">

      <input
        className="w-full border rounded-lg p-3"
        placeholder="Full Name *"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        className="w-full border rounded-lg p-3"
        placeholder="Mobile Number *"
        maxLength={10}
        value={form.phone}
        onChange={(e) =>
          setForm({
            ...form,
            phone: e.target.value.replace(/\D/g, ""),
          })
        }
      />

      <input
        className="w-full border rounded-lg p-3"
        placeholder="Delivery Address *"
        value={form.address}
        onChange={(e) =>
          setForm({
            ...form,
            address: e.target.value,
          })
        }
      />

      <input
        className="w-full border rounded-lg p-3"
        placeholder="PIN Code *"
        maxLength={6}
        value={form.pincode}
        onChange={(e) =>
          setForm({
            ...form,
            pincode: e.target.value.replace(/\D/g, ""),
          })
        }
      />

    </div>
  );
}