"use client";

import { ReactNode } from "react";
import AdminSidebar from "./AdminSidebar";

type Props = {
  children: ReactNode;
};

export default function AdminLayout({
  children,
}: Props) {
  return (
    <div className="flex min-h-screen">

      <AdminSidebar />

      <main className="flex-1 bg-gray-100 p-8">
        {children}
      </main>

    </div>
  );
}