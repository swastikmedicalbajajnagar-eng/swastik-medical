import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-white py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-green-600 font-semibold mb-3">
              Trusted Pharmacy in Bajajnagar
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Health,
              <br />
              Our Priority.
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              Genuine Medicines, Healthcare Products and Fast Home Delivery
              within 5 KM.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button>Shop Now</Button>

              <Button variant="secondary">
                Upload Prescription
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex justify-center">
            <div className="w-96 h-96 rounded-3xl bg-green-100 flex items-center justify-center text-8xl shadow-lg">
              💊
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}