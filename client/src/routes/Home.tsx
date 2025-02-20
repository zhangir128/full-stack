import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import RecentList from "../components/RecentList";

const Home: React.FC = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/*Introduction */}
      <div className="flex items-center justify-between">
        {/*titles */}
        <div className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font:bold">
          <h1>Казахстанские железные дороги</h1>
          <p className="mt-8 text-md md:text-xl">
            Транспортно-логистический холдинг, национальный железнодорожный
            перевозчик грузов и пассажиров, крупнейший оператор магистральной
            железнодорожной сети Казахстана.
          </p>
        </div>
      </div>
      {/*Category */}
      <MainCategories />
      {/*Featured posts */}
      <FeaturedPosts />
      {/*Post list */}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Последнии статьи</h1>
        <RecentList />
      </div>
    </div>
  );
};

export default Home;
