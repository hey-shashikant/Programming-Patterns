import React from "react";

const PatternList = ({ patterns = [] }) => {
  if (!patterns.length) {
    return <p className="text-center text-gray-500">No patterns available.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 flex items-center">
        📌 Programming Patterns
      </h1>

      {patterns.map((pattern) => (
        <div key={pattern.id} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">{pattern.name}</h2>
          
          <div className="overflow-hidden border rounded-lg shadow-md">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-3 border-b">Problem Name</th>
                  <th className="p-3 border-b text-center">Done</th>
                  <th className="p-3 border-b text-center">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {pattern.problems.map((problem, index) => (
                  <tr
                    key={problem.id}
                    className={`border-b ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-50`}
                  >
                    <td className="p-3">
                      <a
                        href={problem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {problem.name}
                      </a>
                    </td>
                    <td className="p-3 text-center">
                      <input type="checkbox" />
                    </td>
                    <td className="p-3 text-center">
                      <span
                        className={`px-3 py-1 text-sm font-bold rounded-lg ${
                          problem.difficulty === "Hard"
                            ? "bg-red-600 text-white"
                            : problem.difficulty === "Medium"
                            ? "bg-yellow-500 text-white"
                            : "bg-green-500 text-white"
                        }`}
                      >
                        {problem.difficulty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatternList;
