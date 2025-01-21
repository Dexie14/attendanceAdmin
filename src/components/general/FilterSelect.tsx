import { DropDownIcon, FilterIcon } from "@/assets/svgComp/General";

const FilterSelect = ({ title }: { title: string }) => {
  return (
    <div>
      <div className="flex items-center gap-3 px-2 h-[36px] rounded-[8px] w-[100px] border text-darkGrey text-sm font-medium border-borderColor">
        <FilterIcon /> {title} <DropDownIcon />
      </div>
    </div>
  );
};

export default FilterSelect;
