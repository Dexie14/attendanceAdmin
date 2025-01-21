import { useState } from "react";
import DataBarChart from "./charts/DataBarChart";
import DatePicker from "react-datepicker";
import { DateIcon } from "@/assets/svgComp/General";

const AttendanceChart = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="border border-borderColor p-3 rounded-xl">
      <div className="flex justify-between items-center w-full">
        <div className="w-1/2">
          <h3 className="text-grey text-sm font-bold">Attendance Status</h3>
        </div>
        <div className="w-1/2">
          <DatePicker
            showIcon
            icon={<DateIcon />}
            className="border w-full bg-transparent focus:outline-none rounded-[4px] text-sm text-center font-medium "
            selected={startDate}
            onChange={(date) => {
              if (date) setStartDate(date);
            }}
          />
        </div>
      </div>
      <aside className="flex gap-3 items-center justify-self-end mt-4 mb-1">
        <div className="text-sm text-textGrey flex gap-1 items-center">
          <div className="bg-deepBlue h-2 w-2 rounded-full" /> Presence
        </div>
        <div className="text-sm text-textGrey flex gap-1 items-center">
          <div className="bg-[#ECEDFA] h-2 w-2 rounded-full" /> Absent
        </div>
      </aside>
      <div>
        <DataBarChart />
      </div>
    </div>
  );
};

export default AttendanceChart;
