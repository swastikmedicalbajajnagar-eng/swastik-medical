import Button from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";

export default function SearchBar() {
  return (
    <section className="py-10 bg-white">
      <Container>
        <div className="bg-white shadow-lg rounded-2xl p-6 border">

          <h2 className="text-2xl font-bold mb-4">
            Search Medicines
          </h2>

          <div className="flex flex-col md:flex-row gap-4">

            <Input
              type="text"
              placeholder="Search medicines, healthcare products..."
            />

            <Button>
              Search
            </Button>

          </div>

        </div>
      </Container>
    </section>
  );
}