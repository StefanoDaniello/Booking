import HeaderComp from "./componets/header/HeaderComp";
import MainComp from "./componets/main/MainComp";
import FooterComp from "./componets/footer/FooterComp";
import { ContextProvider } from "./store/context";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <HeaderComp></HeaderComp>
      <MainComp></MainComp>
      <FooterComp></FooterComp>
    </ContextProvider>
  );
}

export default App;
