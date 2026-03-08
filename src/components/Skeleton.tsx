type Props = {
  className?: string;
};

const Skeleton = ({ className = "" }: Props) => {
  return (
    <div
      className={`animate-pulse bg-gray-800 rounded-md ${className}`}
    />
  );
};

export default Skeleton;