import Home from "./components/Home";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import About from "./components/About";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Login from "./components/Login";
import Update from "./components/Update";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="admin" element={<Admin />} />
      <Route path="create" element={<Create />} />
      <Route path="login" element={<Login />} />
      <Route path="update" element={<Update />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
