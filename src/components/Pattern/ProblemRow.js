import { useState } from "react";
import { StarIcon } from "lucide-react"; // Import StarIcon

const difficultyColors = {
  Easy: "bg-green-500",
  Medium: "bg-yellow-500",
  Hard: "bg-red-500"
};

const ProblemRow = ({ problem }) => {
  const [done, setDone] = useState(problem.done);

  return (
    <tr className="border-b border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
      {/* Checkbox and Problem Link */}
      <td className="p-3 flex items-center">
        <input 
          type="checkbox" 
          checked={done} 
          onChange={() => setDone(!done)}
          className="form-checkbox h-5 w-5 text-green-500 dark:text-green-300"
        />
        <a href={problem.link} target="_blank" rel="noopener noreferrer" className="ml-3 text-blue-600 dark:text-blue-400 hover:underline">
          {problem.name}
        </a>
      </td>

      {/* Difficulty */}
      <td className="p-3">
        <span className={`px-2 py-1 text-xs font-bold text-white rounded-full ${difficultyColors[problem.difficulty]}`}>
          {problem.difficulty}
        </span>
      </td>

      {/* Status - Keep existing Completed/Pending status logic */}
      <td className="p-3">
        {done ? (
          <span className="text-green-600 dark:text-green-400">Completed</span>
        ) : (
          <span className="text-gray-600 dark:text-gray-400">Pending</span>
        )}
      </td>

      {/* Revision Column - Show Star if revision=true */}
      <td className="p-3 text-yellow-500">
        {problem.revision && <StarIcon className="w-5 h-5 fill-yellow-500" />}
      </td>
    </tr>
  );
};

export default ProblemRow;
