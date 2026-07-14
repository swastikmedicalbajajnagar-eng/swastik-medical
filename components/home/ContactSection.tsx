import Container from "@/components/ui/Container";

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-gray-600 mt-3">
            We're always here to help you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="font-bold mb-2">Phone</h3>
            <p>9860800296</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="font-bold mb-2">Address</h3>
            <p>
              RH-55, Shop No.1,<br />
              Bajajnagar MIDC,<br />
              Waluj,<br />
              Chhatrapati Sambhajinagar
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <div className="text-4xl mb-4">🕘</div>
            <h3 className="font-bold mb-2">Opening Hours</h3>
            <p>9:00 AM – 11:00 PM</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="font-bold mb-2">Email</h3>
            <p>info@swastikmedical.in</p>
          </div>

        </div>
      </Container>
    </section>
  );
}