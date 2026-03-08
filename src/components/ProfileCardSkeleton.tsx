import Skeleton from "./Skeleton";

const ProfileCardSkeleton = () => {
  return (
    <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6 transition hover:border-gray-700 flex gap-6 items-center">
      <Skeleton className="w-20 h-20 rounded-full" />

      <div className="space-y-3 w-full">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-3 w-64" />
        <Skeleton className="h-3 w-48" />
      </div>
    </div>
  );
};

export default ProfileCardSkeleton;