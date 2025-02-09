import PatternData from "../../data/PatternData";
import ProblemRow from "./ProblemRow";

const PatternList = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      {PatternData.map((pattern) => (
        <div key={pattern.id} className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{pattern.name}</h2>

          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <table className="w-full border-collapse">
              <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                <tr>
                  <th className="p-3 text-left">Problem Name</th>
                  <th className="p-3 text-left">Difficulty</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {pattern.problems.map((problem) => (
                  <ProblemRow key={problem.id} problem={problem} />
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
