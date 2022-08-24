import logo from "./logo.svg";
import ReactDOM from "react-dom/client";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Protected from "./Routers/Protected";

function App() {
  return (
    <div className="App full-height">
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route path="/Skills" element={<Projects />}></Route>
          <Route path="/Banner" element={<Banner />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Routes>
        <Route path="/skill" component={Skills} />
      </Routes> */}
      {/* <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
