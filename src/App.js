import './App.css';
import Home from "./pages/Home";
import {BrowserRouter, RedirectFunction, Route, Routes} from "react-router-dom";
import NavigationBar from "./components/Navigation/NavigationBar";
import Architects from "./pages/Architects";
import Architect from "./pages/Architect";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavigationBar />}>
              <Route path="" element={<Home />} />
              <Route path="architects" element={<Architects />} />
                <Route path="architects/:id" element={<Architect />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>

  );
}

export default App;
