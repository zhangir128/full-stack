import { useState } from "react";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "./Image";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const menuItems = [
    {
      title: { name: "Industries", path: "/home" },
      items: [
        { name: "Aerospace & Defense", path: "/home" },
        { name: "Healthcare", path: "/home" },
        { name: "Public Sector", path: "/public-sector" },
        { name: "Agriculture", path: "/agriculture" },
        { name: "Industrials & Electronics", path: "/industrials" },
        { name: "Real Estate", path: "/real-estate" },
      ],
    },
    {
      title: { name: "Capabilities", path: "/capabilities" },
      items: [
        { name: "Strategy", path: "/strategy" },
        { name: "Operations", path: "/operations" },
        { name: "Digital", path: "/digital" },
        { name: "Analytics", path: "/analytics" },
      ],
    },
    {
      title: { name: "Capabilities", path: "/capabilities" },
      items: [
        { name: "Strategy", path: "/strategy" },
        { name: "Operations", path: "/operations" },
        { name: "Digital", path: "/digital" },
        { name: "Analytics", path: "/analytics" },
      ],
    },
    {
      title: { name: "Capabilities", path: "/capabilities" },
      items: [
        { name: "Strategy", path: "/strategy" },
        { name: "Operations", path: "/operations" },
        { name: "Digital", path: "/digital" },
        { name: "Analytics", path: "/analytics" },
      ],
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="px-16 h-16 flex justify-between bg-gradient-to-b from-blue-400 to-white">
      <div className="hidden md:flex items-center gap-4 xl:gap-12 font-medium text-sm">
        {/*Logo*/}
        <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
          <Image src="/ktj/Logo" alt="logo" w="32" h="32" />
          <span>Центр трансформации бизнеса</span>
        </Link>
        {/*Desktop Menu*/}
        <nav className="flex space-x-6">
          {menuItems.map((menu, index) => (
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown(index)}
            >
              <button
                className={`px-2 py-1 text-gray-700 hover:text-blue-600 transition-colors
                ${
                  activeDropdown === index ? "border-b-2 border-blue-600" : ""
                }`}
              >
                {" "}
                <Link to={menu.title.path}>{menu.title.name}</Link>
              </button>

              {activeDropdown === index && (
                <div
                  className="absolute left-0 top-full mt-1 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    {menu.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <Search />
        <Link to="/login">
          <UserCircleIcon className="h-10 w-10 text-gray-700" />
        </Link>
      </div>

      {/*Mobile Menu*/}
      <div className="md:hidden flex items-center">
        {/*Mobile Button*/}
        <div
          className="w-8 h-8 text-black cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>
        {/*Mobile List*/}
        <div
          className={`bg-opacity-100 bg-gradient-to-t  from-blue-400 to-white w-full h-50% py-16 flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-left-0" : "-left-[100%]"
          }`}
        >
          <Link to="/home">Главная страница</Link>
          <Link to="/">Популярные статьи</Link>
          <Link to="/">Статистика</Link>
          <Link to="/">О нас</Link>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-yellow-600 text-white">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
