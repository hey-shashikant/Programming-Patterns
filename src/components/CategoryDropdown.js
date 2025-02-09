import { useState } from "react";

const categories = [
  "All",
  "Two Pointers",
  "Fast & Slow Pointers",
  "Sliding Window",
];

const CategoryDropdown = ({ setSelectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md shadow-md flex items-center"
      >
        Categories ⬇️
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
