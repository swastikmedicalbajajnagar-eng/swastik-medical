"use client";
import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/button";

export default function AddMedicineForm() {
  const [productName, setProductName] =
    useState("");

  const [slug, setSlug] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [mrp, setMrp] =
    useState("");

  const [stock, setStock] =
    useState("");
    const [categories, setCategories] = useState<any[]>([]);
    const [categoryId, setCategoryId] = useState("");
    useEffect(() => {
        fetchCategories();
      }, []);
      
      const fetchCategories = async () => {
        const { data } = await supabase
          .from("categories")
          .select("*")
          .eq("is_active", true)
          .order("category_name");
      
        if (data) {
          setCategories(data);
        }
      };
  const [description, setDescription] =
    useState("");
    const [image, setImage] =
    useState<File | null>(null);
  const [loading, setLoading] =
    useState(false);
    const handleSave = async () => {
        const {
            data: { session },
          } = await supabase.auth.getSession();
          
          console.log("SESSION =", session);
          if (!session) {
            alert("Please login again.");
            return;
          }
        if (
          !productName ||
          !price ||
          !mrp ||
          !stock||
          !categoryId
        ) {
          alert("Please fill all required fields.");
          return;
        }
      
        setLoading(true);
        let imageUrl = "";

        if (image) {
          const fileName =
            Date.now() + "-" + image.name;
        
          const { error: uploadError } =
            await supabase.storage
              .from("medicines")
              .upload(fileName, image);
        
          if (uploadError) {
            setLoading(false);
            alert(uploadError.message);
            return;
          }
        
          const { data } = supabase.storage
            .from("medicines")
            .getPublicUrl(fileName);
        
          imageUrl = data.publicUrl;
        }
        const { error } = await supabase
          .from("medicines")
          .insert([
            {
                product_name: productName,
                slug: slug,
                category_id: Number(categoryId),
                price: Number(price),
                mrp: Number(mrp),
                stock: Number(stock),
                description: description,
                image: imageUrl,
                is_active: true,
                is_featured: false,
              },
          ]);
      
        setLoading(false);
      
        if (error) {
          alert(error.message);
          return;
        }
      
        alert("Medicine Added Successfully!");
      
        setProductName("");
        setSlug("");
        setPrice("");
        setMrp("");
        setStock("");
        setCategoryId("");
        setDescription("");
        setImage(null);
      };
  return (
    <div className="bg-white rounded-2xl border shadow p-6 mb-8">

      <h2 className="text-2xl font-bold mb-6">
        Add Medicine
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <Input
          placeholder="Product Name"
          value={productName}
          onChange={(e) =>
            setProductName(e.target.value)
          }
        />

        <Input
          placeholder="Slug"
          value={slug}
          onChange={(e) =>
            setSlug(e.target.value)
          }
        />

        <Input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
        />

        <Input
          type="number"
          placeholder="MRP"
          value={mrp}
          onChange={(e) =>
            setMrp(e.target.value)
          }
        />
                <Input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) =>
            setStock(e.target.value)
          }
        />
<select
  value={categoryId}
  onChange={(e) =>
    setCategoryId(e.target.value)
  }
  className="border rounded-xl p-3"
>
  <option value="">
    Select Category
  </option>

  {categories.map((cat) => (
    <option
      key={cat.id}
      value={cat.id}
    >
      {cat.category_name}
    </option>
  ))}
</select>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="border rounded-xl p-3 md:col-span-2 min-h-32"
        />
<div className="md:col-span-2">

<label className="block mb-2 font-medium">
  Medicine Image
</label>

<input
  type="file"
  accept="image/*"
  onChange={(e) =>
    setImage(e.target.files?.[0] || null)
  }
/>

</div>
      </div>

      <Button
  className="mt-6"
  disabled={loading}
  onClick={handleSave}
>
        {loading ? "Saving..." : "Save Medicine"}
      </Button>

    </div>
  );
}