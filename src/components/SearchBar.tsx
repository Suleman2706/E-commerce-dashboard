interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => onSearch(e.target.value)}
      className="p-2 border rounded-lg w-full sm:w-64 dark:bg-gray-800 dark:border-gray-700"
    />
  );
}