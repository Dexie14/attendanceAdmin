import InputField from "../input/InputField";

import ButtonComp from "../general/ButtonComp";
import { Button } from "../ui/button";

const CreatDept = () => {
  return (
    <div>
      <section className="my-3">
        <InputField
          label="Department"
          name="department"
          placeholder="Enter department"
        />

        <div className="flex gap-3 items-center justify-self-end mt-4">
          <Button className="bg-fadedWhite border border-borderColor rounded-[8px] hover:text-white text-black">
            Cancel
          </Button>
          <ButtonComp text="Create Department" className="w-fit"/>
        </div>
      </section>
    </div>
  );
};

export default CreatDept;
