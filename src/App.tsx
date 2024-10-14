import HeaderComp from "./componets/HeaderComp";
import MainComp from "./componets/MainComp";
import { ContextProvider } from "./store/context";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <HeaderComp></HeaderComp>
      <MainComp></MainComp>
    </ContextProvider>
  );
}

export default App;
