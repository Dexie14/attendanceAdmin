import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "../ui/switch";
import { EditIcon } from "@/assets/svgComp/General";
import { useState } from "react";
import ReusableDialog from "../general/ReuseableDialog";
import EditWorkHours from "./EditWorkHours";

const WorkHours = () => {
  const [fee, setFee] = useState(false);
  const [editFee, setEditFee] = useState(false);
  return (
    <div>
      <section className="my-5">
        <h3 className="text-sm font-semibold text-grey mb-2">Work Hours</h3>
        <p className="text-xs text-darkGrey">
          Set and update your company’s work schedule.
        </p>
      </section>
      <main className="space-y-4 sm:w-[80%]">
        <aside className="sm:flex justify-between w-full items-center space-y-4 sm:space-y-0">
          <div className="sm:w-[45%]">
            <p className="mb-2 text-sm font-semibold text-grey">Opening Time</p>
            <Select>
              <SelectTrigger className="text-grey rounded-[8px] w-full placeholder:text-placeholderColor  bg-transparent border border-borderColor h-[50px]">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7:00 am">7:00 am</SelectItem>
                <SelectItem value="9:00am">9:00am</SelectItem>
                <SelectItem value="10:00am">10:00am</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="sm:w-[45%]">
            <p className="mb-2 text-sm font-semibold text-grey">
              Lateness Time
            </p>
            <Select>
              <SelectTrigger className="text-grey rounded-[8px] w-full placeholder:text-placeholderColor  bg-transparent border border-borderColor h-[50px]">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7:00 am">7:00 am</SelectItem>
                <SelectItem value="9:00am">9:00am</SelectItem>
                <SelectItem value="10:00am">10:00am</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </aside>
        <aside className="sm:flex justify-between items-center space-y-4 sm:space-y-0">
          <div className="sm:w-[45%]">
            <p className="mb-2 text-sm font-semibold text-grey">Opening Time</p>
            <Select>
              <SelectTrigger className="text-grey rounded-[8px] w-full placeholder:text-placeholderColor  bg-transparent border border-borderColor h-[50px]">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7:00 am">7:00 am</SelectItem>
                <SelectItem value="9:00am">9:00am</SelectItem>
                <SelectItem value="10:00am">10:00am</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="sm:w-[45%]">
            <p className="mb-2 text-sm font-semibold text-grey">
              Lateness Time
            </p>
            <Select>
              <SelectTrigger className="text-grey rounded-[8px] w-full placeholder:text-placeholderColor  bg-transparent border border-borderColor h-[50px]">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7:00 am">7:00 am</SelectItem>
                <SelectItem value="9:00am">9:00am</SelectItem>
                <SelectItem value="10:00am">10:00am</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </aside>
        <section className="my-5 flex justify-between items-center">
          <div>
            <h3 className="text-sm font-semibold text-grey mb-2">
              Lateness Fee
            </h3>
            <p className="text-xs text-darkGrey">
              Set and update your company’s work schedule.
            </p>
          </div>
          <Switch checked={fee} onCheckedChange={setFee} />
        </section>
        {fee && (
          <section className="my-5">
            <h3 className="text-xs font-semibold text-grey mb-2">
              Lateness Fees
            </h3>
            <div className="flex items-center gap-2">
              <p className="text-grey text-sm font-semibold">₦1000</p>
              <EditIcon
                onClick={() => setEditFee(true)}
                className="cursor-pointer"
              />
            </div>
          </section>
        )}
      </main>
      {
        <ReusableDialog
          title="Lateness Fee"
          open={editFee}
          onOpenChange={setEditFee}
          className="max-w-xl"
        >
          <EditWorkHours />
        </ReusableDialog>
      }
    </div>
  );
};

export default WorkHours;
