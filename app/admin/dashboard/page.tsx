import Container from "@/components/ui/Container";

export default function AdminDashboard() {
  return (
    <Container>
      <div className="py-12">

        <h1 className="text-4xl font-bold mb-8">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="border rounded-2xl p-6 shadow">
            <h2 className="text-gray-500">
              Total Prescriptions
            </h2>

            <p className="text-4xl font-bold mt-3">
              0
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

      </div>
    </Container>
  );
}