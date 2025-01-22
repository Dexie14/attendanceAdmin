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

const CompanyProfile = () => {
  return (
    <div>
      <section className="my-5">
        <h3 className="text-sm font-semibold text-grey mb-2">
          Company Profile
        </h3>
        <p className="text-xs text-darkGrey">
          Manage your company's details and profile information.
        </p>
      </section>
      <main className="sm:w-9/12">
        <UploadImage />
        <section className="my-3">
          <InputField
            label="Company Name"
            name="companyName"
            placeholder="Enter company name"
          />
          <InputField
            label="Address"
            name="address"
            placeholder="Office address"
          />
          <div>
            <p className="mb-2 text-sm font-semibold text-grey">
              Head Office Branch
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
          <div className="flex gap-3 items-center justify-self-end mt-4">
            <ButtonComp text="Add Profile" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default CompanyProfile;
