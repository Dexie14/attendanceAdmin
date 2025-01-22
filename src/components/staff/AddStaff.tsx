import { UploadImage } from "@/assets/svgComp/General";
import InputField from "../input/InputField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ButtonComp from "../general/ButtonComp";
import { Button } from "../ui/button";

const AddStaff = () => {
  return (
    <div>
      <UploadImage />
      <section className="my-3">
        <div className="sm:flex items-center  justify-between">
          <InputField
            label="First Name"
            name="firstName"
            placeholder="Enter first name"
          />
          <InputField
            name="lastName"
            label="Last Name"
            placeholder="Enter Last name"
          />
        </div>
        <InputField
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter email address"
        />
        <InputField
          label="Department"
          name="department"
          placeholder="Enter department"
        />
        <div>
          <p className="mb-2 text-sm font-semibold text-grey">Office Branch</p>
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
        <div className="flex gap-3 items-center justify-self-end mt-4">
          <Button className="bg-fadedWhite border border-borderColor rounded-[8px] hover:text-white text-black">Cancel</Button>
          <ButtonComp text="Add Staff" />
        </div>
      </section>
    </div>
  );
};

export default AddStaff;
