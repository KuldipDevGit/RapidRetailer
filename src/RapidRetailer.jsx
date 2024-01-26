import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mens from "./Components/Category/Mens";
import Woman from "./Components/Category/Woman";
import Kids from "./Components/Category/Kids";
import Shop from "./Components/Category/Shop";

function RapidRetailer() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/men" element={<Mens />} />
          <Route path="/woman" element={<Woman />} />
          <Route path="/kids" element={<Kids />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default RapidRetailer;
