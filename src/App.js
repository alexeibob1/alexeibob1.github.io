import './App.css';
import Home from "./pages/Home";
import {BrowserRouter, RedirectFunction, Route, Routes} from "react-router-dom";
import NavigationBar from "./components/Navigation/NavigationBar";
import Architects from "./pages/Architects";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavigationBar />}>
              <Route path="/home" element={<Home />} />
              <Route path="/architects" element={<Architects />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>


  );
}

export default App;
