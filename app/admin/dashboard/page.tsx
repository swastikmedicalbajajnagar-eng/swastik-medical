"use client";
import RecentPrescriptions from "@/components/admin/RecentPrescriptions";
import AdminLayout from "@/components/admin/AdminLayout";
import DashboardCard from "@/components/admin/DashboardCard";
import Button from "@/components/ui/button";
import PrescriptionTable from "@/components/admin/PrescriptionTable";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function AdminDashboard() {
  const router = useRouter();
  const [prescriptionCount, setPrescriptionCount] =
  useState(0);
  const [medicineCount, setMedicineCount] =
  useState(0);
  const [checkingAuth, setCheckingAuth] =
  useState(true);
  useEffect(() => {
    checkAdmin();
  
    fetchPrescriptionCount();
    const fetchMedicineCount = async () => {
      const { count, error } = await supabase
        .from("medicines")
        .select("*", {
          count: "exact",
          head: true,
        });
    
      if (!error && count !== null) {
        setMedicineCount(count);
      }
    };
    fetchMedicineCount();
  }, []);
  const checkAdmin = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
  
    if (!session) {
      router.replace("/admin/login");
      return;
    }
  
    setCheckingAuth(false);
  };
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
  if (checkingAuth) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Checking authentication...
      </div>
    );
  }
  return (
    <AdminLayout>
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

<DashboardCard
  title="Total Prescriptions"
  value={prescriptionCount}
/>

<DashboardCard
  title="Total Medicines"
  value={medicineCount}
  color="text-blue-600"
/>

<DashboardCard
  title="Total Orders"
  value="0"
  color="text-orange-600"
/>

<DashboardCard
  title="Total Sales"
  value="₹0"
  color="text-purple-600"
/>

</div>
<RecentPrescriptions />
        <PrescriptionTable />
      </div>
      </AdminLayout>
  );
}