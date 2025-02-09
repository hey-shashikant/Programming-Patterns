import PatternList from "../components/Pattern/PatternList";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <Navbar /> {/* Persistent Navigation Bar */}
        
        {/* Content Section */}
        <div className="pt-16">
          <PatternList />
        </div>
      </div>
    );
  };


export default Home;
