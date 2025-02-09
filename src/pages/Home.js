import PatternList from "../components/Pattern/PatternList";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">📌 Programming Patterns</h1>
        <ThemeToggle />
      </div>
      <PatternList />
    </div>
  );
};

export default Home;
