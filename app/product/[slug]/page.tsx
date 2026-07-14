import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/button";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!product) {
    notFound();
  }

  return (
    <Container>
      <section className="py-16">

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center text-8xl">
            💊
          </div>

          <div>

            <h1 className="text-4xl font-bold">
              {product.product_name}
            </h1>

            <div className="mt-4">

              <span className="text-3xl text-green-600 font-bold">
                ₹{product.price}
              </span>

              <span className="ml-3 text-gray-400 line-through">
                ₹{product.mrp}
              </span>

            </div>

            <p className="mt-6 text-gray-700">
              {product.description}
            </p>

            <div className="mt-6">
              {product.stock > 0 ? (
                <span className="text-green-600 font-semibold">
                  ✅ In Stock
                </span>
              ) : (
                <span className="text-red-600 font-semibold">
                  ❌ Out of Stock
                </span>
              )}
            </div>

            <div className="mt-8">
              <Button>Add to Cart</Button>
            </div>

          </div>

        </div>

      </section>
    </Container>
  );
}