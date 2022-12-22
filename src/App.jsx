import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { HealthcareProviders } from "./components/HealthcareProviders";
import { Hero } from "./components/Hero";
import { LatestArticles } from "./components/LatestArticles";
import { MobileApps } from "./components/MobileApps";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />

        <Hero />
      </header>

      <main>
        <Services />
        <HealthcareProviders />
        <MobileApps />
        <Testimonials />
        <LatestArticles />
      </main>

      <Footer />
    </div>
  );
}

export default App;
