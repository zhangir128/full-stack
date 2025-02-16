import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "./Image";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/*Logo*/}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="/ktj/Logo" alt="logo" w="32" h="32" />
        <span>Центр трансформации бизнеса</span>
      </Link>
      {/*Mobile Menu*/}
      <div className="md:hidden">
        {/*Mobile Button*/}
        <div
          className="w-8 h-8 text-black cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>
        {/*Mobile List*/}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 xl:gap-12 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Главная страница</Link>
          <Link to="/">Популярные статьи</Link>
          <Link to="/">Статистика</Link>
          <Link to="/">О нас</Link>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login
            </button>
          </Link>
        </div>
      </div>
      {/*Desktop Menu*/}
      <div className="hidden md:flex items-center gap-4 xl:gap-12 font-medium text-sm">
        <Link to="/">Главная страница</Link>
        <Link to="/">Популярные статьи</Link>
        <Link to="/">Статистика</Link>
        <Link to="/">О нас</Link>
        <Link to="/login">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
