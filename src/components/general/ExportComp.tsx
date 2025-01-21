import { ExportIcon } from "@/assets/svgComp/General";
import { Button } from "../ui/button";

const ExportComp = () => {
  return (
    <div>
      <Button className=" rounded-[8px] w-[100px] h-[36px] bg-deepBlue text-sm font-medium text-white">
        <div className="mr-1">
          <ExportIcon />
        </div>
        Export
      </Button>
    </div>
  );
};

export default ExportComp;
