import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const Write: React.FC = () => {
  return (
    <div className="h-[calc(100vh-64px)] flex flex-col gap-6">
      <h1 className="text-cl font-light">Создать статью</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          Добавить обложку
        </button>
        <input
          type="text"
          placeholder="Название статьи"
          className="text-4xl font-semibold bg-transparent outline-none"
        />
        <div className="flex items-center gap-4">
          <label className="text-sm" htmlFor="">
            Выбрать категорию
          </label>
          <select
            name="cat"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="web-design">Архитектура</option>
            <option value="city">Поезда</option>
            <option value="trains">Бизнес</option>
            <option value="industry">Расписание</option>
            <option value="database">База данных</option>
            <option value="other">Общии</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-white shadow-md"
          name="desk"
          placeholder="Короткое описание"
        />
        <ReactQuill
          theme="snow"
          className="flex-1 p-2 rounded-xl bg-white shadow-md"
        />
        <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36">
          Опубликовать
        </button>
      </form>
    </div>
  );
};

export default Write;
