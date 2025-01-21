import ExportComp from "@/components/general/ExportComp";
import FilterSelect from "@/components/general/FilterSelect";
import Pagination from "@/components/general/Pagination";
import SearchInputComp from "@/components/input/SearchInputComp";
import LeaveTable from "@/components/leave/LeaveTable";

const LeaveMgt = () => {
  return (
    <div>
      <section className="flex justify-between items-center mb-5">
        <h3 className="text-grey font-extrabold text-2xl">Leave Management</h3>
        <ExportComp />
      </section>
      <main className="border border-borderColor rounded-xl ">
        <div className="flex gap-4 items-center p-3">
          <SearchInputComp className="bg-transparent border border-borderColor h-[30px] w-[300px]" />
          <FilterSelect title="Filter" />
        </div>
        <LeaveTable />
        <Pagination />
      </main>
    </div>
  );
};

export default LeaveMgt;
