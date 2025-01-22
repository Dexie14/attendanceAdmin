import { DateIcon } from "@/assets/svgComp/General";
import AttendanceTable from "@/components/attendance/AttendanceTable";
import StatCard, { StatCardProps } from "@/components/dashboard/StatCard";
import ExportComp from "@/components/general/ExportComp";
import FilterSelect from "@/components/general/FilterSelect";
import Pagination from "@/components/general/Pagination";
import SearchInputComp from "@/components/input/SearchInputComp";
import { useState } from "react";
import DatePicker from "react-datepicker";

const Attendance = () => {
  const [startDate, setStartDate] = useState(new Date());

  const StatData: StatCardProps[] = [
    {
      label: "No of Present",
      value: 30,
      change: 3,
    },
    {
      label: "No of Absent",
      value: 2,
      change: 3,
    },
    {
      label: "Early Check In",
      value: 24,
      change: -3,
    },
    {
      label: "Late Check In",
      value: 6,
      change: 3,
    },
  ];
  return (
    <div>
      <h3 className="text-grey font-extrabold sm:text-2xl text-lg">Attendance</h3>
      <section className="sm:flex justify-between items-center my-5 space-y-4 sm:space-y-0">
        <div className="sm:w-[25%]">
          <SearchInputComp className="bg-transparent border border-borderColor h-[30px] w-full " />
        </div>
        <div className="sm:flex gap-3 sm:justify-between items-center space-y-4 sm:space-y-0">
          <DatePicker
            showIcon
            icon={<DateIcon />}
            className="border w-full bg-transparent focus:outline-none rounded-[8px] h-[36px] text-sm text-center font-medium "
            selected={startDate}
            onChange={(date) => {
              if (date) setStartDate(date);
            }}
          />
          <div className="flex gap-4 items-center">
            <FilterSelect title="Filter" />
            <ExportComp />
          </div>
        </div>
      </section>
      <section>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mb-4">
          {StatData?.map((item: StatCardProps) => {
            return <StatCard StatData={item} />;
          })}
        </div>
      </section>
      <main className="border border-borderColor rounded-xl ">
        <AttendanceTable />
        <Pagination />
      </main>
    </div>
  );
};

export default Attendance;
