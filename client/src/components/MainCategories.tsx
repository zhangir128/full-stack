import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const MainCategories: React.FC = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4  shadow-lg items-center justify-center gap-8">
      {/*links*/}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          Все статьи
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Архитектура
        </Link>
        <Link
          to="/posts?cat=city"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Поезда
        </Link>
        <Link
          to="/posts?cat=trains"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Бизнес
        </Link>
        <Link
          to="/posts?cat=industry"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Расписание
        </Link>
        <Link
          to="/posts?cat=database"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          База данных
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/*search*/}
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-700" />
        <input
          type="text"
          placeholder="search a post..."
          className="bg-transparent"
        />
      </div>
    </div>
  );
};

export default MainCategories;
