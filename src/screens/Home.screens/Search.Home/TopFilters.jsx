const TopFilters = () => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-2">
      <div className="flex flex-wrap items-center gap-2">
        <span className="px-3 py-1 border rounded-full text-sm">Bachelor of science co...</span>
        <span className="px-3 py-1 border rounded-full text-sm">UAE</span>
        <span className="px-3 py-1 border rounded-full text-sm">3 month</span>
      </div>
      <div className="flex items-center">
        <label className="mr-2 text-sm text-gray-600">Sort by:</label>
        <select className="border px-3 py-1 rounded text-sm">
          <option>Newly published</option>
        </select>
      </div>
    </div>
  );
};
export default TopFilters;