"use client";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import ThemeToggle from "./ThemeToggle";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="p-4 border-b dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Store
        </Link>
        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer">
            <ShoppingBagIcon className="h-6 w-6" />
            {cartCount > 0 && (
              <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </div>
            )}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}