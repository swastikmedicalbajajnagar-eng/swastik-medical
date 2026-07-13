import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: "💊",
    title: "100% Genuine Medicines",
    description: "All medicines are sourced from trusted pharmaceutical companies.",
  },
  {
    icon: "🚚",
    title: "Free Home Delivery",
    description: "Fast home delivery within 5 KM of our medical store.",
  },
  {
    icon: "👨‍⚕️",
    title: "M.Pharm Expert Guidance",
    description: "Professional medicine guidance from a qualified pharmacist.",
  },
  {
    icon: "📞",
    title: "Quick Support",
    description: "Call us anytime during store hours for assistance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionHeading
          title="Why Choose Swastik Medical?"
          subtitle="Your trusted healthcare partner in Bajajnagar."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title}>
              <div className="text-center p-4">
                <div className="text-5xl mb-4">{feature.icon}</div>

                <h3 className="font-bold text-lg mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}