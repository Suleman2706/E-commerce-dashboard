import { useState, useEffect } from 'react';

interface CategoryFilterProps {
  onSelect: (category: string) => void;
}

export default function CategoryFilter({ onSelect }: CategoryFilterProps) {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
    >
      <option value="all">All Categories</option>
      {categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}