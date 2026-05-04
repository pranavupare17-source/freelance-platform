import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import Gig from "./pages/Gig";
import Gigs from "./pages/Gigs";
import Orders from "./pages/Orders";
import AddGig from "./pages/AddGig";
import SellerDashboard from "./pages/SellerDashboard";
import BecomeSeller from "./pages/BecomeSeller";
import Pay from "./pages/Pay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gig/:id" element={<Gig />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/gigs" element={<Gigs />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/pay/:id" element={<Pay />} />
        <Route path="/add" element={<AddGig />} />
        <Route path="/become-a-seller" element={<BecomeSeller />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;