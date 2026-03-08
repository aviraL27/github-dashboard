import { useMemo, useState } from "react";
import SearchBar from "../components/searchBar";
import { debounce } from "../utils/debounce";
import { getUser, getRepos } from "../services/githubApi";
import ProfileCard from "../components/ProfileCard";
import StatsCards from "../components/StatsCards";
import LanguageChart from "../components/LanguageChart";
import StarsChart from "../components/StarsChart";
import RepoList from "../components/RepoList";
import ProfileCardSkeleton from "../components/ProfileCardSkeleton";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const debouncedSearch = useMemo(
    () =>
      debounce(async (value: string) => {
        if (!value) return;

        setLoading(true);
        setError("");
        setUser(null);
        setRepos([]);

        try {
          const userData = await getUser(value);
          const repoData = await getRepos(value);

          setUser(userData);
          setRepos(repoData);
        } catch (err) {
          setError("User not found or GitHub API error");
          console.error(err);
        } finally {
          setLoading(false);
        }
      }, 500),
    []
  );

  const handleSearch = (value: string) => {
    debouncedSearch(value);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-8">

  <h1 className="text-3xl font-semibold">
    GitHub Developer Dashboard
  </h1>

  <SearchBar onSearch={handleSearch} />

  {loading && (
  <div className="space-y-6">
    <ProfileCardSkeleton />
  </div>
  )}

  {error && (
    <p className="text-red-500">{error}</p>
  )}

  {user && (
    <div className="space-y-6">

      <ProfileCard user={user} />

      {repos.length > 0 && (
        <StatsCards
          repos={repos}
          followers={user.followers}
        />
      )}

      {repos.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6">
          <LanguageChart repos={repos} />
          <StarsChart repos={repos} />
        </div>
      )}

      {repos.length > 0 && (
        <RepoList repos={repos} />
      )}

    </div>
  )}
</div>
  );
};

export default Dashboard;