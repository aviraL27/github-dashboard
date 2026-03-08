import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  repos: any[];
};

const StarsChart = ({ repos }: Props) => {
  // Sort repos by stars (descending)
  const sorted = [...repos].sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  );

  // Take top 5 repos
  const topRepos = sorted.slice(0, 5);

  const data = topRepos.map((repo) => ({
    name: repo.name,
    stars: repo.stargazers_count,
  }));

  if (data.length === 0) {
    return (
      <p className="text-gray-400">
        No repository data available.
      </p>
    );
  }

  return (
    <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-xl p-6 transition hover:border-gray-700 h-80">
      <h2 className="text-lg font-semibold mb-4">
        Top Repositories by Stars
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12 }} 
            interval={0} 
            angle={-20} 
            textAnchor="end" 
            height={70}
            />
          <YAxis 
            stroke="#9ca3af" 
            width={70}
            tick={{ fontSize: 12 }}
            />
          <Tooltip />

          <Bar
            dataKey="stars"
            fill="#6366f1"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StarsChart;