import Container from "@/components/ui/Container";

export default function GoogleMap() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Find Our Store</h2>
          <p className="text-gray-600 mt-3">
            Visit Swastik Medical or get directions instantly.
          </p>
        </div>

        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">

          <iframe
            src="https://www.google.com/maps?q=Swastik+Medical+Bajajnagar+Waluj&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

        <div className="text-center mt-6">
          <a
            href="https://maps.app.goo.gl/XJjw6qqEDSR8y8jeA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Open in Google Maps
          </a>
        </div>
      </Container>
    </section>
  );
}