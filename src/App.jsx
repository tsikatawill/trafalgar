import { Container } from "./components/Container";
import { HealthcareProviders } from "./components/HealthcareProviders";
import { Hero } from "./components/Hero";
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
      </main>
    </div>
  );
}

export default App;
