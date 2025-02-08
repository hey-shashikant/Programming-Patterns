import React from "react";
import PatternList from "../components/Pattern/PatternList";
import PatternData from "../data/PatternData";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <PatternList patterns={PatternData} />
    </div>
  );
};

export default Home;
