import { Container } from "./components/Container";
import { Hero } from "./components/Hero";
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
      </main>
    </div>
  );
}

export default App;
