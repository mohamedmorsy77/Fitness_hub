import "./App.css";
import Header from "./components/common/header/header";
import HeroSection from "./components/heroSection";
import Target from "./components/target/target";
import TargetList from "./components/target/targetList/targetList";



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
