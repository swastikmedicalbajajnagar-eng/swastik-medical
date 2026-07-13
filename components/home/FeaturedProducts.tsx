import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type Product = {
  id: number;
  product_name: string;
  price: number;
  mrp: number;
  image: string;
};

export default function FeaturedProducts({
  products,
}: {
  products: Product[];
}) {
  return (
    <section className="py-16 bg-white">
      <Container>
        <SectionHeading
          title="Featured Products"
          subtitle="Best selling medicines and healthcare products."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id}>
              <div className="p-4">

                <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-5xl">
                  💊
                </div>

                <h3 className="font-semibold mt-4">
                  {product.product_name}
                </h3>

                <div className="mt-2">
                  <span className="text-green-600 font-bold">
                    ₹{product.price}
                  </span>

                  <span className="text-gray-400 line-through ml-2">
                    ₹{product.mrp}
                  </span>
                </div>

                <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
                  Add to Cart
                </button>

              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}