import Container from "@/components/ui/Container";
import PrescriptionForm from "@/components/prescription/PrescriptionForm";

export default function UploadPrescriptionPage() {
  return (
    <Container>
      <section className="py-16">
        <PrescriptionForm />
      </section>
    </Container>
  );
}