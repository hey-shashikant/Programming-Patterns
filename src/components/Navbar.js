import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left - Logo */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          📝 Programming Patterns
        </h1>

        {/* Right - Theme Toggle */}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
