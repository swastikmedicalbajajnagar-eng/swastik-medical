"use client";

import { useState, ChangeEvent } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/button";

export default function PrescriptionForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "application/pdf",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      alert("Only JPG, PNG and PDF files are allowed.");
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      alert("Maximum file size is 5MB.");
      return;
    }

    setFile(selectedFile);

    if (selectedFile.type === "application/pdf") {
      setPreview("");
    } else {
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async ( e: React.FormEvent ) => {
    e.preventDefault();
    
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }
  
    if (mobile.length !== 10) {
      alert("Please enter a valid mobile number.");
      return;
    }
  
    if (!file) {
      alert("Please upload your prescription.");
      return;
    }
  
    try {
      setLoading(true);
  
      const formData = new FormData();
  
      formData.append("name", name);
      formData.append("mobile", mobile);
      formData.append("file", file);
  
      const response = await fetch(
        "/api/upload-prescription",
        {
          method: "POST",
          body: formData,
        }
      );
  
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error(data.message);
      }
  
      alert("Prescription uploaded successfully.");
  
      setName("");
      setMobile("");
      setFile(null);
      setPreview("");
  
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border p-8">

      <h1 className="text-3xl font-bold mb-2">
        Upload Prescription
      </h1>

      <p className="text-gray-600 mb-8">
        Upload your doctor's prescription and our pharmacist will contact you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <Input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="tel"
          placeholder="Mobile Number"
          value={mobile}
          maxLength={10}
          onChange={(e) =>
            setMobile(
              e.target.value.replace(/\D/g, "")
            )
          }
        />

        <div>

          <label className="block font-medium mb-2">
            Prescription
          </label>

          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileChange}
          />

        </div>

        {preview && (
          <img
            src={preview}
            alt="Prescription Preview"
            className="rounded-xl border max-h-80"
          />
        )}

        {file?.type === "application/pdf" && (
          <div className="border rounded-xl p-4 bg-gray-50">
            📄 {file.name}
          </div>
        )}

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            required
          />

          <p className="text-sm text-gray-600">
            I confirm that this prescription is valid and belongs to me.
          </p>
        </div>

        <Button
  type="submit"
  className="w-full"
  disabled={loading}
>
  {loading
    ? "Uploading..."
    : "Upload Prescription"}
</Button>

      </form>
    </div>
  );
}