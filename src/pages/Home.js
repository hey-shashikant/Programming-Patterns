import { useState } from "react";
import PatternList from "../components/Pattern/PatternList";
import Navbar from "../components/Navbar";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
  
    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <Navbar setSelectedCategory={setSelectedCategory} />
  
        {/* Content Section */}
        <div className="pt-16">
          <PatternList selectedCategory={selectedCategory} />
        </div>
      </div>
    );
  };


export default Home;
