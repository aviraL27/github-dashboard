import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  repos: any[];
};

const COLORS = [
  "#6366f1",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#06b6d4",
  "#a855f7",
];

const LanguageChart = ({ repos }: Props) => {
  const languageMap: Record<string, number> = {};

  repos.forEach((repo) => {
    if (!repo.language) return;

    if (!languageMap[repo.language]) {
      languageMap[repo.language] = 0;
    }

    languageMap[repo.language] += 1;
  });

  const data = Object.entries(languageMap).map(
    ([language, count]) => ({
      name: language,
      value: count,
    })
  );

  if (data.length === 0) {
    return (
      <p className="text-gray-400">
        No language data available.
      </p>
    );
  }

  return (
    <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-xl p-6 transition hover:border-gray-700 h-80">
      <h2 className="text-lg font-semibold mb-4">
        Language Distribution
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
            <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            label
            >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LanguageChart;