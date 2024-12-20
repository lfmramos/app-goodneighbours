import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CardsSection from "../components/CardsSection";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Conteúdo Principal */}
      <main>
        {/* Seção Hero (Imagem e Título) */}
        <HeroSection />
        
        {/* Cards Section (3 Cards) */}
        <CardsSection />
      </main>
    </>
  );
}