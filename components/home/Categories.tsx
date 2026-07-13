import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type Category = {
  id: number;
  category_name: string;
  image: string;
  is_active: boolean;
};

export default function Categories({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionHeading
          title="Shop by Category"
          subtitle="Browse our healthcare products by category."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Card key={category.id}>
              <div className="text-center cursor-pointer">
                <div className="text-5xl mb-4">💊</div>

                <h3 className="font-semibold">
                  {category.category_name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}