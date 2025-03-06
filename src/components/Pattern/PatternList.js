import { useState, useEffect } from "react";
import PatternData from "../../data/PatternData";
import { CheckCircleIcon, ExclamationCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { StarIcon as SolidStar } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";

const difficultyIcons = {
  Easy: <CheckCircleIcon className="w-5 h-5 text-green-500 inline-block" />,
  Medium: <ExclamationCircleIcon className="w-5 h-5 text-yellow-500 inline-block" />,
  Hard: <XCircleIcon className="w-5 h-5 text-red-500 inline-block" />,
};

const PatternList = ({ selectedCategory }) => {
  const [completedProblems, setCompletedProblems] = useState(
    JSON.parse(localStorage.getItem("completedProblems")) || {}
  );

  const [revisionProblems, setRevisionProblems] = useState(
    JSON.parse(localStorage.getItem("revisionProblems")) || {}
  );

  useEffect(() => {
    localStorage.setItem("completedProblems", JSON.stringify(completedProblems));
  }, [completedProblems]);

  useEffect(() => {
    localStorage.setItem("revisionProblems", JSON.stringify(revisionProblems));
  }, [revisionProblems]);

  const toggleCompletion = (problemId) => {
    setCompletedProblems((prev) => ({
      ...prev,
      [problemId]: !prev[problemId],
    }));
  };

  const toggleRevision = (problemId) => {
    setRevisionProblems((prev) => ({
      ...prev,
      [problemId]: !prev[problemId],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {PatternData.filter(pattern => selectedCategory === "All" || pattern.name === selectedCategory).map((pattern) => (
        <div key={pattern.id} className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-2">
            {pattern.name}
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="p-3 text-left text-gray-900 dark:text-gray-200">✔️</th>
                  <th className="p-3 text-left text-gray-900 dark:text-gray-200">Problem Name</th>
                  <th className="p-3 text-left text-gray-900 dark:text-gray-200">Difficulty</th>
                  <th className="p-3 text-left text-gray-900 dark:text-gray-200">Status</th>
                  <th className="p-3 text-left text-gray-900 dark:text-gray-200">Revision</th>
                </tr>
              </thead>
              <tbody>
                {pattern.problems.map((problem) => (
                  <tr key={problem.id} className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="p-3">
                      <input
                        type="checkbox"
                        checked={completedProblems[problem.id] || false}
                        onChange={() => toggleCompletion(problem.id)}
                        className="w-4 h-4 text-blue-500"
                      />
                    </td>

                    <td className="p-3">
                      <a href={problem.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        {problem.name || "Problem"}
                      </a>
                    </td>

                    <td className="p-3 flex items-center gap-2">
                      {difficultyIcons[problem.difficulty]}
                      <span className="text-gray-800 dark:text-gray-200">{problem.difficulty || "N/A"}</span>
                    </td>

                    <td className="p-3">
                      {completedProblems[problem.id] ? (
                        <span className="text-green-600 font-semibold">Completed</span>
                      ) : (
                        <span className="text-gray-500">Pending</span>
                      )}
                    </td>

                    <td className="p-3">
                      <button onClick={() => toggleRevision(problem.id)}>
                        {revisionProblems[problem.id] ? (
                          <SolidStar className="w-5 h-5 text-yellow-500" />
                        ) : (
                          <OutlineStar className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
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
