import CreatDept from "@/components/department/CreatDept";
import ButtonComp from "@/components/general/ButtonComp";
import FilterSelect from "@/components/general/FilterSelect";
import Pagination from "@/components/general/Pagination";
import ReusableDialog from "@/components/general/ReuseableDialog";
import SearchInputComp from "@/components/input/SearchInputComp";
import StaffTable from "@/components/staff/StaffTable";
import { useState } from "react";

const DepartmentMgt = () => {
  const [addDept, setAddDept] = useState(false);
  return (
    <div>
      <section className="flex justify-between items-center mb-5">
        <h3 className="text-grey font-extrabold text-2xl">
          Department Management
        </h3>
        <ButtonComp
          text="Create Department"
          showIcon
          className="w-fit"
          onClick={() => setAddDept(true)}
        />
      </section>
      <main className="border border-borderColor rounded-xl ">
        <div className="flex gap-4 items-center p-3">
          <SearchInputComp className="bg-transparent border border-borderColor h-[30px] w-[300px]" />
          <FilterSelect title="Filter" />
        </div>
        <StaffTable />
        <Pagination />
      </main>
      {
        <ReusableDialog
          title="Create Department"
          open={addDept}
          onOpenChange={setAddDept}
        >
          <CreatDept />
        </ReusableDialog>
      }
    </div>
  );
};

export default DepartmentMgt;
