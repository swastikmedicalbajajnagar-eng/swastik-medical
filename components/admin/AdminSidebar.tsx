"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
    {
      name: "📊 Dashboard",
      href: "/admin/dashboard",
    },
  
    {
      name: "📦 Medicines",
      href: "/admin/medicines",
    },
  
    {
      name: "📂 Categories",
      href: "/admin/categories",
    },
  
    {
      name: "🏷️ Batches",
      href: "/admin/batches",
    },
  
    {
      name: "🚚 Suppliers",
      href: "/admin/suppliers",
    },
  
    {
      name: "📄 Prescriptions",
      href: "/admin/prescriptions",
    },
  
    {
      name: "🛒 Orders",
      href: "/admin/orders",
    },
  
    {
      name: "💰 Sales",
      href: "/admin/sales",
    },
  
    {
      name: "👥 Customers",
      href: "/admin/customers",
    },
  
    {
      name: "📈 Reports",
      href: "/admin/reports",
    },
  
    {
      name: "⚙️ Settings",
      href: "/admin/settings",
    },
  ];
export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-green-700 text-white min-h-screen p-6">

      <h2 className="text-2xl font-bold mb-10">
        Swastik Medical
      </h2>

      <nav className="space-y-2">

        {menus.map((menu) => (

          <Link
            key={menu.href}
            href={menu.href}
            className={`block px-4 py-3 rounded-xl transition ${
              pathname === menu.href
                ? "bg-white text-green-700 font-semibold"
                : "hover:bg-green-600"
            }`}
          >
            {menu.name}
          </Link>

        ))}

      </nav>

    </aside>
  );
}