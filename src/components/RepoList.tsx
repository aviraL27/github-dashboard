type Props = {
  repos: any[];
};

const RepoList = ({ repos }: Props) => {
  if (repos.length === 0) {
    return (
      <p className="text-gray-400">
        No repositories available.
      </p>
    );
  }

  return (
    <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-xl p-6 transition hover:border-gray-700">
      <h2 className="text-lg font-semibold mb-4">
        Repositories
      </h2>

      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="flex justify-between items-center bg-black/40 border border-gray-800 rounded-lg p-3 hover:bg-black/90 transition"
          >
            <div>
              <a
                href={repo.html_url}
                target="_blank"
                className="font-medium hover:underline"
              >
                {repo.name}
              </a>

              <p className="text-gray-400 text-sm">
                {repo.language || "Unknown"}
              </p>
            </div>

            <div className="flex gap-4 text-sm text-gray-400">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoList;