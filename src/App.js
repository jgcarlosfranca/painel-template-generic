import "./App.css";
import Topbar from "./Components/Topbar";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route element={<Home />} exact path="/" />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
