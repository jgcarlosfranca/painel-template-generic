import "./App.css";
import Topbar from "./Components/Topbar";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Charts from "./Pages/Charts";
import PokeDex from "./Pages/PokeDex"
import Forms from "./Pages/Formulario"
import AnimatedWaves from "./Pages/AnimatedWaves";
import GridFlex from "./Pages/Grid";
function App() {
  return (
    <div className="App">
      <Router>
      <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route element={<Home />} exact path="/" />
            <Route element={<Charts />} exact path="/charts" />
            <Route element={<PokeDex/>} exact path="/pokedex" />
            <Route element={<Forms/>} exact path="/forms" />
            <Route element={<AnimatedWaves/>} exact path="/waves" />
            <Route element={<GridFlex/>} exact path="/grid" />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
