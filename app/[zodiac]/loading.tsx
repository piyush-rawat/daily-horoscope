import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  return (
    <div className="px-4 py-12 sm:p-20 flex flex-col gap-6">
      <Skeleton height={50} />
      <div>
        <Skeleton height={64} width={200} />
        <Skeleton height={24} width={100} />
      </div>

      <Skeleton height={28} />
      <Skeleton height={42} />
      <Skeleton count={10} />
    </div>
  );
};

export default loading;
