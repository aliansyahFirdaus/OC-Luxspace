import "./assets/css/app.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/checkout" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
