import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPosts: React.FC = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/*First post*/}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <Image
          src="/ktj/stepe.jpg"
          alt="first post"
          className="rounded-3xl object-cover w-full h-full"
          w="895"
        />
        {/*details*/}
        <div className="flex items-center gap-4">
          <h1 className="lg:text-lg font-semibold">01.</h1>
          <Link to="/test" className="text-blue-800 lg:text-lg">
            Web Design
          </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/*Title*/}
        <Link
          to="/test"
          className="text-xl font-semibold lg:text-3xl lg:font-bold"
        >
          Информация о системе образования в Казахстане
        </Link>
      </div>
      {/*Others*/}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/*Second post*/}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="/ktj/train.jpg"
              alt="first post"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          <div className="w-2/3">
            {/*details*/}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/test" className="text-blue-800 text-sm">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/*Title*/}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/*Third post*/}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="/ktj/train.jpg"
              alt="first post"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          <div className="w-2/3">
            {/*details*/}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/test" className="text-blue-800 text-sm">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/*Title*/}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/*Fourth post*/}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="/ktj/train.jpg"
              alt="first post"
              className="rounded-3xl object-cover w-full h-full"
              w="298"
            />
          </div>
          <div className="w-2/3">
            {/*details*/}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to="/test" className="text-blue-800 text-sm">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/*Title*/}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
