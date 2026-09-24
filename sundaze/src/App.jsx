import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import MessageSection from "./sections/MessageSection";

function App() {
  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <MessageSection />
        </div>
      </div>
    </main>
  );
}

export default App;
