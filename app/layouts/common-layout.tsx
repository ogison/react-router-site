import { Outlet } from "react-router";
import Footer from "./footer";
import Navbar from "./navbar";

export default function CoomonLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
