interface SortDropdownProps {
  onSort: (order: string) => void;
}

export default function SortDropdown({ onSort }: SortDropdownProps) {
  return (
    <select
      onChange={(e) => onSort(e.target.value)}
      className="p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
    >
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
    </select>
  );
}