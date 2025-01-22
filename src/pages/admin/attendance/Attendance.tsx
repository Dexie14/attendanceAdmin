import AttendanceTable from "@/components/attendance/AttendanceTable";
import StatCard, { StatCardProps } from "@/components/dashboard/StatCard";
import FilterLayout from "@/components/general/FilterLayout";
import Pagination from "@/components/general/Pagination";
import { createPageState, useFilterState } from "@/store/FilterStore";
import { useEffect } from "react";
import { format } from 'date-fns';

const Attendance = () => {
  const pageKey = "attendance";

  // Initialize the page state
  useEffect(() => {
    createPageState(pageKey);
  }, [pageKey]);

  const { search , startDate} = useFilterState((state) => state[pageKey] || {});

  const initialDate = startDate ? format(new Date(startDate), "yyyy-MM-dd") : "";

  console.log(search, initialDate, "filters");

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
      <h3 className="text-grey font-extrabold sm:text-2xl text-lg">
        Attendance
      </h3>
      <FilterLayout pageKey={pageKey} />
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
