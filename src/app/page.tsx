"use client";
import { useState, useEffect } from "react";
import ProductGrid from "@/components/ProductGrid";
import SortDropdown from "@/components/SortDropdown";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      const error = err as Error;
      setError(error.message);
      setLoading(false);
    }
  };

  const filteredProducts = products
    .filter(product => 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "all" || product.category === selectedCategory)
    )
    .sort((a, b) => 
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  return (
    <div className="min-h-screen p-4 sm:p-8 dark:bg-gray-900 dark:text-white">
      <header className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <h1 className="text-2xl font-bold">Mini E-Commerce Dashboard</h1>
      </header>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <SearchBar onSearch={setSearchQuery} />
        <SortDropdown onSort={setSortOrder} />
        <CategoryFilter onSelect={setSelectedCategory} />
      </div>

      {error && (
        <div className="text-red-500 text-center mb-4">
          Error: {error}
          <button 
            onClick={fetchProducts}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      )}

      <ProductGrid products={filteredProducts} loading={loading} />
    </div>
  );
}
