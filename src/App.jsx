import { Container } from "./components/Container";
import { HealthcareProviders } from "./components/HealthcareProviders";
import { Hero } from "./components/Hero";
import { MobileApps } from "./components/MobileApps";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";

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
      </main>
    </div>
  );
}

export default App;
