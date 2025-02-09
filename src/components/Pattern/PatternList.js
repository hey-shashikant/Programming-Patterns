import PatternData from "../../data/PatternData";
import ProblemRow from "./ProblemRow";

const PatternList = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">📌 Programming Patterns</h1>

      {PatternData.map((pattern) => (
        <div key={pattern.id} className="mb-8">
          <h2 className="text-xl font-semibold mb-3">{pattern.name}</h2>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="w-full border-collapse">
              <thead className="bg-gray-200 text-gray-700">
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
