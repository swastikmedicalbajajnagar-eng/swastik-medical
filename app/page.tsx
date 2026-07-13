import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SearchBar from "@/components/home/SearchBar";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .eq("is_active", true)
    .order("id");

  const { data: products, error } = await supabase
    .from("products")
    .select("*");

  console.log("Products:", products);
  console.log("Error:", error);

  return (
    <main>
      <Hero />
      <SearchBar />
      <Categories categories={categories || []} />
      <FeaturedProducts products={products || []} />
      <WhyChooseUs />
    </main>
  );
}