import "./App.css";
import { Navbar } from "./Components/Navbar.jsx";
import { Home } from "./Components/Home.jsx";
import { About } from "./Components/About.jsx";
import { Skills } from "./Components/Skills.jsx";
import { Projects } from "./Components/Projects.jsx";
import { ContactDetails } from "./Components/ContactDetails.jsx";
function App() {
  return (
    <div className="mainSection">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactDetails />
    </div>
  );
}
export default App;
