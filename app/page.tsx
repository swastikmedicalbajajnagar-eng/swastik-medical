import Hero from "@/components/home/Hero";
import SearchBar from "@/components/home/SearchBar";
import Categories from "@/components/home/Categories";

export default function Home() {
  return (
    <main>
      <Hero />
      <SearchBar />
      <Categories />
    </main>
  );
}