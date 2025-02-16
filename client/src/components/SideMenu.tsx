import { Link } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";

const SideMenu: React.FC = () => {
  return (
    <div className="px-4 h-max top-8 sticky">
      {/*filter*/}
      <h1 className="mt-8 mb-4 text-sm font-medium">Фильтры</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800 checked:border-transparent"
          />
          <span>Популярные</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800 checked:border-transparent"
          />
          <span>Старые</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800 checked:border-transparent"
          />
          <span>Новые</span>
        </label>
      </div>
      {/*categories*/}
      <h1 className="mt-4 mb-4 text-sm font-medium">Разделы</h1>
      <div className="flex flex-col gap-3 text-sm">
        <Link to="/posts" className=" hover:bg-blue-50 rounded-full">
          Все статьи
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 rounded-full"
        >
          Архитектура
        </Link>
        <Link to="/posts?cat=city" className="hover:bg-blue-50 rounded-full">
          Поезда
        </Link>
        <Link to="/posts?cat=trains" className="hover:bg-blue-50 rounded-full">
          Бизнес
        </Link>
        <Link
          to="/posts?cat=industry"
          className="hover:bg-blue-50 rounded-full"
        >
          Расписание
        </Link>
        <Link
          to="/posts?cat=database"
          className="hover:bg-blue-50 rounded-full"
        >
          База данных
        </Link>
      </div>
      {/*search*/}
      <h1 className="mt-4 mb-4 text-sm font-medium">Поиск</h1>
      <Search />
    </div>
  );
};

export default SideMenu;
