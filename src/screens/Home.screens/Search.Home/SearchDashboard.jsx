import FilterSidebar from "./FilterSidebar";
import TopFilters from "./TopFilters";
import ProgramList from "./ProgramList";

const SearchDashboard = () => {
  return (
    <div className="flex p-4 lg:p-6 md:p-6 mt-18">
      <FilterSidebar />
      <main className="flex-1 ps-8">
        <TopFilters />
        <div className="text-sm text-gray-600 mb-4">3,145,684 results</div>
        <ProgramList />
      </main>
    </div>
  );
};
export default SearchDashboard;