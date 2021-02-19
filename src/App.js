import react from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import BuildAnything from "./components/BuildAnything";
import Content from "./components/Content";
import "./App.css";

function App() {
  return (
    <div className="ui container">
      <NavBar />
      <BuildAnything />
      <Content />
    </div>
  );
}

export default App;
