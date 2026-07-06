import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import CategoryNav from "@/app/components/CategoryNav";
import CategorySection from "@/app/components/CategorySection";
import Footer from "@/app/components/Footer";
import { categories, brandsByCategory } from "@/lib/brands";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <CategoryNav />
        {categories.map((c) => (
          <CategorySection
            key={c.slug}
            category={c}
            items={brandsByCategory(c.slug)}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
