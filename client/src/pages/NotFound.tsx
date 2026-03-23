import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <section className="min-h-[80vh] flex items-center justify-center pt-20">
        <div className="text-center">
          <span className="font-['Syne'] font-extrabold text-[120px] md:text-[180px] leading-none bg-gradient-to-r from-[#FF4500] via-[#FF6B00] to-[#9B00FF] bg-clip-text text-transparent">
            404
          </span>
          <h1 className="font-['Syne'] font-bold text-white text-2xl md:text-3xl mb-4 -mt-4">
            Página não encontrada
          </h1>
          <p className="text-[#ccc] text-base mb-8 max-w-md mx-auto">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Link href="/" className="btn-cta">
            Voltar para a Home
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
