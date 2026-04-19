import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cibles from "@/components/Cibles";
import ProblemSection from "@/components/ProblemSection";
import Services from "@/components/Services";
// import Stats from "@/components/Stats"; // hidden — aucun résultat réel à afficher pour l'instant
import Benefices from "@/components/Benefices";
import Methodologie from "@/components/Methodologie";
import Confiance from "@/components/Confiance";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import AgentKlaivia from "@/components/AgentKlaivia";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Cibles />
        <ProblemSection />
        <Services />
        {/* <Stats /> */}
        <Benefices />
        <Methodologie />
        <Confiance />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <AgentKlaivia />
    </>
  );
}
