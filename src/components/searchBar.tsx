type Props = {
  onSearch: (value: string) => void;
};

const SearchBar = ({ onSearch }: Props) => {
  return (
    <div className="w-full max-w-xl">
      <input
        type="text"
        placeholder="Search GitHub username..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white outline-none focus:border-gray-500"
      />
    </div>
  );
};

export default SearchBar;