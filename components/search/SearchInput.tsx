"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Input from "@/components/ui/Input";

type Product = {
  id: number;
  product_name: string;
  price: number;
  mrp: number;
  slug: string;
};

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (search.trim().length < 2) {
        setResults([]);
        return;
      }

      setLoading(true);

      try {
        const res = await fetch(
          `/api/search?q=${encodeURIComponent(search)}`
        );

        const data = await res.json();
        setResults(data);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="w-full relative">
      <Input
        type="text"
        placeholder="Search medicines..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && (
        <div className="absolute mt-2 bg-white shadow rounded-lg p-3 w-full">
          Searching...
        </div>
      )}

      {!loading && results.length > 0 && (
        <div className="absolute z-50 mt-2 w-full bg-white border rounded-xl shadow-lg overflow-hidden">

          {results.map((product) => (
            <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="block p-4 hover:bg-gray-100 border-b"
          >
            <div className="font-semibold">
              {product.product_name}
            </div>
          
            <div className="text-green-600 font-bold">
              ₹{product.price}
            </div>
          </Link>
          ))}

        </div>
      )}
    </div>
  );
}