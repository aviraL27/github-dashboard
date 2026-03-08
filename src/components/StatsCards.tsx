type Props = {
  repos: any[];
  followers: number;
};

const StatsCards = ({ repos, followers }: Props) => {
  const totalStars = repos.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0
  );

  const repoCount = repos.length;

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-xl p-4 transition hover:border-gray-700">
        <p className="text-gray-400 text-sm">Total Stars</p>
        <p className="text-2xl font-semibold">{totalStars}</p>
      </div>

      <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-xl p-4 transition hover:border-gray-700">
        <p className="text-gray-400 text-sm">Repositories</p>
        <p className="text-2xl font-semibold">{repoCount}</p>
      </div>

      <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-xl p-4 transition hover:border-gray-700">
        <p className="text-gray-400 text-sm">Followers</p>
        <p className="text-2xl font-semibold">{followers}</p>
      </div>
    </div>
  );
};

export default StatsCards;