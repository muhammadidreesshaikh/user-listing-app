import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />

      {/* all components */}
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
