import Container from "@/components/ui/Container";

export default function HomeDeliveryBanner() {
  return (
    <section className="py-16 bg-green-600 text-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <p className="text-green-100 font-semibold mb-2">
              🚚 FAST HOME DELIVERY
            </p>

            <h2 className="text-4xl font-bold mb-4">
              Free Home Delivery
              <br />
              Within 5 KM
            </h2>

            <p className="text-green-100">
              Genuine medicines delivered quickly to your doorstep.
            </p>
          </div>

          <div className="bg-white text-gray-800 rounded-2xl p-8 shadow-xl">

            <h3 className="text-2xl font-bold mb-4">
              Swastik Medical
            </h3>

            <p className="mb-3">📞 9860800296</p>

            <p className="mb-3">
              📍 RH-55, Shop No.1, Ground Floor,
              Bajajnagar MIDC, Waluj,
              Chhatrapati Sambhajinagar
            </p>

            <p className="mb-6">
              🕘 9:00 AM – 11:00 PM
            </p>

            <div className="flex gap-4">

              <a
                href="tel:9860800296"
                className="bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919860800296"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-green-600 text-green-600 px-5 py-3 rounded-xl hover:bg-green-50"
              >
                WhatsApp
              </a>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}