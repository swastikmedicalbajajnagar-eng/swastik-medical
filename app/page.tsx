export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-r from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">

            <p className="text-green-600 font-semibold mb-3">
              Trusted Pharmacy in Bajajnagar
            </p>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Your Health,
              <br />
              Our Priority.
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              Genuine Medicines, Healthcare Products and Fast Home Delivery
              within 5 KM.
            </p>

            <div className="flex gap-4">

              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">
                Shop Now
              </button>

              <button className="border border-green-600 text-green-600 px-6 py-3 rounded-xl">
                Upload Prescription
              </button>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}