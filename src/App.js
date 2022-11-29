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
              <Route path="" element={<Home />} />
              <Route path="architects" element={<Architects />} />
                <Route path="architects:id"/>
            </Route>
          </Routes>
        </BrowserRouter>
      </>


  );
}

export default App;
