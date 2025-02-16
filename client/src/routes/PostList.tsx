import { useState } from "react";
import RecentList from "../components/RecentList";
import SideMenu from "../components/SideMenu";

const Postlist: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="mb-8 text-2xl">Статьи</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white md:hidden px-4 py-2 rounded-2xl mb-4 "
      >
        {open ? "Закрыть" : "Фильтр"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div className="">
          <RecentList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default Postlist;
