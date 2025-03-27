import "./App.css";
import { Navbar } from "./Components/Navbar.jsx";
import { Home } from "./Components/Home.jsx";
import { About } from "./Components/About.jsx";
function App() {
  return (
    <div className="mainSection">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}
export default App;
