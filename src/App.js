import "./App.css";
import "./styling.css";
import "./scrollbar.css";
import { BrowserRouter } from "react-router-dom";

import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomeHero from "./components/WelcomeHero";
import ProblemSolution from "./components/ProblemSolution";
import HowItWorks from "./components/HowItWorks";
import Props from "./components/Props";
import Footer from "./components/Footer";
import Networks from "./components/Networks";
import WelcomeHero2 from "./components/WelcomeHero2";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container className="fullwidth pad-0">
          <Navigation />
          <WelcomeHero />
          <Networks />
          {/* <ProblemSolution /> */}
          <HowItWorks />
          <Props />
          <Footer />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
