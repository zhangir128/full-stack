import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
