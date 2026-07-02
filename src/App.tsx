import NavBar from "./components/layout/navBar/NavBar.tsx";
import Benefits from "./sections/benefits/Benefits.tsx";
import Features from "./sections/features/Features.tsx";
import FinalCTA from "./sections/finalCTA/FinalCTA.tsx";
import Flexability from "./sections/flexability/Flexability.tsx";
import Hero from "./sections/hero/Hero.tsx";
import HowItWorks from "./sections/howItWorks/HowItWorks.tsx";
import Problem from "./sections/problem/Problem";
import Solution from "./sections/solution/Solution.tsx";

function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <Hero></Hero>
      <Problem></Problem>
      <Solution></Solution>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <Benefits></Benefits>
      <Flexability></Flexability>
      <FinalCTA></FinalCTA>
    </div>
  );
}

export default App;
