import { Container } from "./components/Container";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />

        <Hero />
      </header>
      <Container>Homepage</Container>
    </div>
  );
}

export default App;
