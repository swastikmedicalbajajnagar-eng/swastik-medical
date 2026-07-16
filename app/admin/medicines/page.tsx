"use client";

import Container from "@/components/ui/Container";
import MedicineTable from "@/components/admin/MedicineTable";
import AddMedicineForm from "@/components/admin/AddMedicineForm";
export default function MedicinesPage() {
  return (
    <Container>
      <div className="py-12">

        <h1 className="text-4xl font-bold mb-8">
          Medicines Management
        </h1>
        <AddMedicineForm />
        <MedicineTable />

      </div>
    </Container>
  );
}