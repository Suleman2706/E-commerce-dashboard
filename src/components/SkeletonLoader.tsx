export default function SkeletonLoader() {
  return (
    <div className="border rounded-lg p-4 animate-pulse">
      <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded mb-4" />
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
    </div>
  );
}