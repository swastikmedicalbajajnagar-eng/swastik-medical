"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Medicine = {
    id: number;
    product_name: string;
    price: number;
    mrp: number;
    stock: number;
    image: string;
    is_active: boolean;
    is_featured: boolean;
    categories: {
      category_name: string;
    } | null;
  };

export default function MedicineTable() {
  const [medicines, setMedicines] =
    useState<Medicine[]>([]);
    const [search, setSearch] =
    useState("");
  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    const { data, error } = await supabase
    .from("medicines")
    .select(`
      *,
      categories (
        category_name
      )
    `)
      .order("created_at", {
        ascending: false,
      });
      console.log(data, error);
    if (!error && data) {
      setMedicines(data);
    }
  };

  return (
    <div className="bg-white rounded-2xl border shadow">

<div className="p-6 border-b">

<div className="flex justify-between items-center">

  <h2 className="text-2xl font-bold">
    Medicines
  </h2>

  <input
    type="text"
    placeholder="Search Medicine..."
    value={search}
    onChange={(e) =>
      setSearch(e.target.value)
    }
    className="border rounded-xl px-4 py-2 w-72"
  />

</div>

</div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">
                Image
              </th>

              <th className="p-4 text-left">
                Product
              </th>

              <th className="p-4 text-left">
                Price
              </th>

              <th className="p-4 text-left">
                MRP
              </th>
              <th className="p-4 text-left">
  Category
</th>
              <th className="p-4 text-left">
                Stock
              </th>

              <th className="p-4 text-left">
                Active
              </th>

              <th className="p-4 text-left">
                Featured
              </th>
              <th className="p-4 text-center">
  Action
</th>
            </tr>

          </thead>

          <tbody>

          {medicines
  .filter((item) =>
    item.product_name
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  .map((item) => (

              <tr
                key={item.id}
                className="border-t"
              >

                <td className="p-4">

                  <img
                    src={item.image}
                    alt={item.product_name}
                    className="w-14 h-14 rounded-lg object-cover"
                  />

                </td>

                <td className="p-4 font-medium">
                  {item.product_name}
                </td>

                <td className="p-4">
                  ₹{item.price}
                </td>

                <td className="p-4">
                  ₹{item.mrp}
                </td>
                <td className="p-4">
  {item.categories?.category_name || "-"}
</td>
                <td className="p-4">
                  {item.stock}
                </td>

                <td className="p-4">
                  {item.is_active ? "✅" : "❌"}
                </td>

                <td className="p-4">
                  {item.is_featured ? "⭐" : "-"}
                </td>
                <td className="p-4">

<div className="flex justify-center gap-2">

  <button
    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
  >
    Edit
  </button>

  <button
    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
  >
    Delete
  </button>

</div>

</td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}