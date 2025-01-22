import ButtonComp from "@/components/general/ButtonComp";
import FilterSelect from "@/components/general/FilterSelect";
import Pagination from "@/components/general/Pagination";
import ReusableDialog from "@/components/general/ReuseableDialog";
import SearchInputComp from "@/components/input/SearchInputComp";
import AddStaff from "@/components/staff/AddStaff";
import StaffTable from "@/components/staff/StaffTable";
import { useState } from "react";

const Staff = () => {
  const [addStaff, setAddStaff] = useState(false);
  return (
    <div>
      <section className="flex justify-between items-center mb-5">
        <h3 className="text-grey font-extrabold sm:text-2xl text-lg">Staff</h3>
        <ButtonComp
          text="Add Staff"
          showIcon
          onClick={() => setAddStaff(true)}
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
          title="Add Staff"
          open={addStaff}
          onOpenChange={setAddStaff}
          className="max-w-xl"
        >
          <AddStaff />
        </ReusableDialog>
      }
    </div>
  );
};

export default Staff;
