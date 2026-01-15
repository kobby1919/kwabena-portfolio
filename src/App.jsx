import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/skill";

// App.jsx
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
      </main>
    </>
  );
}

export default App;
