import "./App.css";
import Header from "./components/common/header/header";
import HeroSection from "./components/heroSection";
import Target from "./components/target/target";
import UseTargetList from "./hooks/useTargetList";
import TargetList from "./components/targetList/targetList";

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <TargetList />
      <Target />
    </>
  );
}

export default App;
