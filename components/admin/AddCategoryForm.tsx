"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/button";

export default function AddCategoryForm() {
  const [categoryName, setCategoryName] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [image, setImage] =
    useState<File | null>(null);

  const [loading, setLoading] =
    useState(false);

  const handleSave = async () => {
    if (!categoryName) {
      alert("Category Name Required");
      return;
    }

    setLoading(true);

    let imageUrl = "";

    if (image) {
      const fileName =
        Date.now() + "-" + image.name;

      const { error: uploadError } =
        await supabase.storage
          .from("categories")
          .upload(fileName, image);
          console.log("UPLOAD ERROR =", uploadError);
      if (uploadError) {
        setLoading(false);
        alert(uploadError.message);
        return;
      }

      const { data } = supabase.storage
        .from("categories")
        .getPublicUrl(fileName);

      imageUrl = data.publicUrl;
    }

    const slug = categoryName
      .toLowerCase()
      .replaceAll(" ", "-");

    const { error } = await supabase
      .from("categories")
      .insert([
        {
          category_name: categoryName,
          slug,
          description,
          image: imageUrl,
          is_active: true,
        },
      ]);
      console.log("INSERT ERROR =", error);
    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Category Added!");

    setCategoryName("");
    setDescription("");
    setImage(null);
  };

  return (
    <div className="bg-white rounded-2xl border shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Add Category
      </h2>

      <div className="grid gap-4">

        <Input
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) =>
            setCategoryName(e.target.value)
          }
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="border rounded-xl p-3 min-h-28"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setImage(
              e.target.files?.[0] || null
            )
          }
        />

        <Button
          onClick={handleSave}
          disabled={loading}
        >
          {loading
            ? "Saving..."
            : "Save Category"}
        </Button>

      </div>

    </div>
  );
}