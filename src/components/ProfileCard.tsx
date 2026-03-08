type Props = {
  user: any;
};

const ProfileCard = ({ user }: Props) => {
  return (
    <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-xl p-6 transition hover:border-gray-700 flex gap-6 items-center">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-20 h-20 rounded-full"
      />

      <div className="space-y-1">
        <h2 className="text-xl font-semibold">{user.login}</h2>

        {user.bio && (
          <p className="text-gray-400 text-sm">
            {user.bio}
          </p>
        )}

        <div className="flex gap-4 text-sm text-gray-400">
          <span>Followers: {user.followers}</span>
          <span>Following: {user.following}</span>
          <span>Repos: {user.public_repos}</span>
        </div>

        <a
          href={user.html_url}
          target="_blank"
          className="text-blue-400 text-sm hover:underline"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;