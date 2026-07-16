import AdminLayout from "@/components/admin/AdminLayout";
import AddCategoryForm from "@/components/admin/AddCategoryForm";
import CategoryTable from "@/components/admin/CategoryTable";
export default function CategoriesPage() {
  return (
    <AdminLayout>

      <h1 className="text-4xl font-bold mb-8">
        Categories Management
      </h1>

      <AddCategoryForm />
      <CategoryTable />

    </AdminLayout>
  );
}