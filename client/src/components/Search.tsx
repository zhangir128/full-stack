import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";

const Search: React.FC = () => {
  return (
    <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
      <MagnifyingGlassIcon className="h-6 w-6 text-gray-700" />
      <input
        type="text"
        placeholder="search a post..."
        className="bg-transparent"
      />
    </div>
  );
};

export default Search;
