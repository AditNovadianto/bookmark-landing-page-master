import ContactUs from "./components/ContactUs";
import Extensions from "./components/Extensions";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";

const App = () => {
  return (
    <main>
      <Navbar />
      <Home />
      <Features />
      <Extensions />
      <Questions />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default App;
