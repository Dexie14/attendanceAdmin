import { DropDownIcon, FilterIcon } from "@/assets/svgComp/General";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ButtonComp from "./ButtonComp";
import { Button } from "../ui/button";

const FilterSelect = ({ title }: { title: string }) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <div className="flex items-center gap-3 px-2 h-[36px] rounded-[8px] w-[100px] border text-darkGrey text-sm font-medium border-borderColor">
            <FilterIcon /> {title} <DropDownIcon />
          </div>
        </PopoverTrigger>
        <PopoverContent className="rounded-xl">
          <section className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-semibold text-grey">
                Office Branch
              </p>
              <Select>
                <SelectTrigger className="text-grey rounded-[8px] w-full placeholder:text-placeholderColor  bg-transparent border border-borderColor h-[50px]">
                  <SelectValue placeholder="Select company branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Lagos">Lagos</SelectItem>
                  <SelectItem value="Abuja">Abuja</SelectItem>
                  <SelectItem value="spain">Spain</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-grey">Status</p>
              <Select>
                <SelectTrigger className="text-grey rounded-[8px] w-full placeholder:text-placeholderColor  bg-transparent border border-borderColor h-[50px]">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="absent">Absent</SelectItem>
                  <SelectItem value="present">Present</SelectItem>
                  <SelectItem value="late">Late</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <ButtonComp text="Apply Filter"  className="w-full"/>
            <Button className="rounded-[8px] w-full h-[36px] bg-transparent border text-grey border-borderColor text-sm font-medium hover:text-white">
              Clear Filter
            </Button>
          </section>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FilterSelect;
