import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputField from "../input/InputField";
import { Button } from "../ui/button";
import ButtonComp from "../general/ButtonComp";
const EditWorkHours = () => {
  return (
    <div>
      <main>
        <h3 className="text-xs font-semibold text-grey mb-2">Lateness Fees</h3>
        <div className="flex justify-between w-full items-center">
          <div className="w-[15%] ">
            <Select>
              <SelectTrigger className="text-grey rounded-[8px] w-full placeholder:text-placeholderColor  bg-transparent border border-borderColor h-[50px]">
                <SelectValue placeholder="$" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="$">$</SelectItem>
                <SelectItem value="₦">₦</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-[83%]">
            <InputField name="fee" placeholder="1000" inputClassname="mt-[14px]" />
          </div>
        </div>
        <div className="flex gap-3 items-center justify-self-end mt-4">
          <Button className="bg-fadedWhite border border-borderColor rounded-[8px] hover:text-white text-black">
            Cancel
          </Button>
          <ButtonComp className="w-fit" text="Save Changes" />
        </div>
      </main>
    </div>
  );
};

export default EditWorkHours;
