/** @jsxImportSource candy-moon */
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import HowItWork from "../components/HowItWork";
import Pricing from "../components/Pricing";
import Blog from "../components/Blog";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <div cls="relative overflow-hidden bg-white">
        <div>
          <Header />
          <Hero />
          <Feature />
          <HowItWork />
          <Blog />
          <Pricing />
          <CTA />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
