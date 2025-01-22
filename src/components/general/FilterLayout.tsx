import SearchInputComp from "@/components/input/SearchInputComp";
// import { useState } from "react";
import DatePicker from "react-datepicker";
import { DateIcon } from "@/assets/svgComp/General";
import ExportComp from "@/components/general/ExportComp";
import FilterSelect from "@/components/general/FilterSelect";
import { useFilterState } from "@/store/FilterStore";

const FilterLayout = ({ pageKey }: { pageKey: string }) => {
  //   const [startDate, setStartDate] = useState(new Date());

  const { startDate, setSearch, setStartDate } = useFilterState(
    (state) => state[pageKey] || {}
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <section className="sm:flex justify-between items-center my-5 space-y-4 sm:space-y-0">
      <div className="sm:w-[25%]">
        <SearchInputComp
          onChange={handleSearchChange}
          className="bg-transparent border border-borderColor h-[30px] w-full "
        />
      </div>
      <div className="sm:flex gap-3 sm:justify-between items-center space-y-4 sm:space-y-0">
        <DatePicker
          showIcon
          dateFormat="MMMM d, yyyy"
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
  );
};

export default FilterLayout;
