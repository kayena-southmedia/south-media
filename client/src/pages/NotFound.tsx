import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div>
      <Helmet>
        <title>Página não encontrada | South Media</title>
        <meta name="description" content="A página que você procura não existe ou foi movida. Volte para a home da South Media." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Navbar />
      <section className="min-h-[80vh] flex items-center justify-center pt-20">
        <div className="text-center">
          <span className="font-['Inter'] font-bold text-[120px] md:text-[180px] leading-none bg-gradient-to-r from-[#7F31B8] via-[#7F31B8] to-[#F45504] bg-clip-text text-transparent">
            404
          </span>
          <h1 className="font-['Inter'] font-bold text-white text-2xl md:text-3xl mb-4 -mt-4">
            Página não encontrada
          </h1>
          <p className="text-white/80 text-base mb-8 max-w-md mx-auto">
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
