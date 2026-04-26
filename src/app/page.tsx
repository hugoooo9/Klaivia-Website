import Navbar from "@/components/Navbar";
import BackgroundPlanet from "@/components/BackgroundPlanet";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import Services from "@/components/Services";
// import Stats from "@/components/Stats"; // hidden — aucun résultat réel à afficher pour l'instant
import Benefices from "@/components/Benefices";
import Methodologie from "@/components/Methodologie";
import Confiance from "@/components/Confiance";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AgentKlaivia from "@/components/AgentKlaivia";

export default function Home() {
  return (
    <>
      <Navbar />
      <BackgroundPlanet />
      <main>
        <Hero />
        <ProblemSection />
        <Methodologie />
        <Services />
        {/* <Stats /> */}
        <Benefices />
        <Confiance />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <AgentKlaivia />
    </>
  );
}
