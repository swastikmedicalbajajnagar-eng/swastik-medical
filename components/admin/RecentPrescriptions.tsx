"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Prescription = {
  id: number;
  customer_name: string;
  mobile: string;
  status: string;
};

export default function RecentPrescriptions() {
  const [data, setData] = useState<Prescription[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await supabase
      .from("prescriptions")
      .select("id, customer_name, mobile, status")
      .order("created_at", {
        ascending: false,
      })
      .limit(5);

    if (data) {
      setData(data);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow border p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Recent Prescriptions
      </h2>

      <table className="w-full">

        <thead className="border-b">

          <tr>

            <th className="text-left py-3">
              Customer
            </th>

            <th className="text-left py-3">
              Mobile
            </th>

            <th className="text-left py-3">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {data.map((item) => (

            <tr
              key={item.id}
              className="border-b"
            >

              <td className="py-3">
                {item.customer_name}
              </td>

              <td className="py-3">
                {item.mobile}
              </td>

              <td className="py-3">
                {item.status}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}