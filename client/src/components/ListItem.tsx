import { Link } from "react-router-dom";
import Image from "./Image";

const ListItem: React.FC = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="/ktj/stepe.jpg"
          alt="first post"
          className="rounded-2xl object-cover"
          w="735"
        />
      </div>
      {/*details*/}
      <div className="flex flex-col gap-4 w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        <div className="flex items-center gap-2 text-gray-800 text-sm">
          <span className="text-gray-500 text-sm">Опубликовано</span>
          <Link to="/test" className="text-blue-800 text-sm">
            Центр трансформации бизнеса
          </Link>
          <span className="text-blue-800">в</span>
          <Link to="/test" className="text-blue-800">
            Архитектура
          </Link>
          <span className="text-gray-500">2 дня назад</span>
        </div>
        <p className="text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptas, quos, quia, dolorum quod quibusdam doloremque dignissimos
          asperiores nemo eaque doloribus.
        </p>
        <Link to="/test" className="underline text-blue-800 text-sm">
          Читать далее
        </Link>
      </div>
    </div>
  );
};

export default ListItem;
