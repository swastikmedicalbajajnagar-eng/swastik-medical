"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/button";
import PrescriptionTable from "@/components/admin/PrescriptionTable";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function AdminDashboard() {
  const router = useRouter();
  const [prescriptionCount, setPrescriptionCount] =
  useState(0);

useEffect(() => {
  fetchPrescriptionCount();
}, []);
const fetchPrescriptionCount = async () => {
  const { count, error } = await supabase
    .from("prescriptions")
    .select("*", {
      count: "exact",
      head: true,
    });

  if (!error && count !== null) {
    setPrescriptionCount(count);
  }
};
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  return (
    <Container>
      <div className="py-12">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold">
            Admin Dashboard
          </h1>

          <Button onClick={handleLogout}>
            Logout
          </Button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="border rounded-2xl p-6 shadow">
            <h2 className="text-gray-500">
              Total Prescriptions
            </h2>

            <p className="text-4xl font-bold mt-3">
  {prescriptionCount}
</p>
</div>
          <div className="border rounded-2xl p-6 shadow">
            <h2 className="text-gray-500">
              Total Orders
            </h2>

            <p className="text-4xl font-bold mt-3">
              0
            </p>
          </div>

        </div>
        <PrescriptionTable />
      </div>
    </Container>
  );
}