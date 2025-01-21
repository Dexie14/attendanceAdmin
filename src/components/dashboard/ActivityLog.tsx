import { Avatar, AvatarFallback } from "../ui/avatar";
import avatar3 from "@/assets/avatar3.png";

const ActivityLog = () => {
  return (
    <div className="border border-borderColor p-3 rounded-xl">
      <div className=" border-b pb-2 mb-2 border-borderColor w-full">
        <div className="w-1/2">
          <h3 className="text-grey text-sm font-bold">Activity Logs</h3>
        </div>
      </div>

      {Array.from({ length: 6 }).map((_, index) => (
        <section key={index} className="flex justify-between items-center mb-3">
          <div className="flex gap-2 ">
            <Avatar className="cursor-pointer">
              <AvatarFallback>
                <img src={avatar3} alt="avatar" />
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm text-grey font-bold">David Brown</p>
              <p className="text-xs font-medium text-darkGrey my-1">
                UI/UX Designer
              </p>
              <p className="text-[10px] text-textGrey">Checked In - 8:50am</p>
            </div>
          </div>
          <p className="px-10 text-xs font-medium text-yellow">Late</p>
        </section>
      ))}
    </div>
  );
};

export default ActivityLog;
