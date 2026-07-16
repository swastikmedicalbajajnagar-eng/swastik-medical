"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Category = {
  id: number;
  category_name: string;
  image: string;
  is_active: boolean;
};

export default function CategoryTable() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("category_name");

    if (!error && data) {
      setCategories(data);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow border p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Categories List
      </h2>
      <div className="mb-6">

<input
  type="text"
  placeholder="Search Category..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="border rounded-xl px-4 py-2 w-80"
/>

</div>
      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left p-4">Image</th>

              <th className="text-left p-4">Category</th>

              <th className="text-left p-4">Status</th>

            </tr>

          </thead>

          <tbody>

          {categories
  .filter((item) =>
    item.category_name
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
                    alt={item.category_name}
                    className="w-14 h-14 rounded-lg object-cover"
                  />

                </td>

                <td className="p-4 font-medium">
                  {item.category_name}
                </td>

                <td className="p-4">
                  {item.is_active
                    ? "Active"
                    : "Inactive"}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}