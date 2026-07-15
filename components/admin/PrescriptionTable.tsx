"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Prescription = {
  id: number;
  customer_name: string;
  mobile: string;
  prescription_url: string;
  status: string;
  created_at: string;
};

export default function PrescriptionTable() {
  const [prescriptions, setPrescriptions] = useState<
    Prescription[]
  >([]);

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = async () => {
    const { data, error } = await supabase
      .from("prescriptions")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (!error && data) {
      setPrescriptions(data);
    }
  };

  return (
    <div className="mt-10 bg-white border rounded-2xl shadow">

      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold">
          Uploaded Prescriptions
        </h2>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left p-4">
                Customer
              </th>

              <th className="text-left p-4">
                Mobile
              </th>

              <th className="text-left p-4">
                Status
              </th>

              <th className="text-left p-4">
                Date
              </th>

              <th className="text-left p-4">
                View
              </th>

            </tr>

          </thead>

          <tbody>

            {prescriptions.map((item) => (
              <tr
                key={item.id}
                className="border-t"
              >
                <td className="p-4">
                  {item.customer_name}
                </td>

                <td className="p-4">
                  {item.mobile}
                </td>

                <td className="p-4">
                  {item.status}
                </td>

                <td className="p-4">
                  {new Date(
                    item.created_at
                  ).toLocaleDateString()}
                </td>

                <td className="p-4">
                  <a
                    href={item.prescription_url}
                    target="_blank"
                    className="text-green-600 hover:underline"
                  >
                    View
                  </a>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}