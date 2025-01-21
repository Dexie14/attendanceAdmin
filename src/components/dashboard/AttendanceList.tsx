import { Avatar, AvatarFallback } from "../ui/avatar";
import avatar2 from "@/assets/avatar2.png";

const AttendanceList = () => {
  return (
    <div className="border border-borderColor p-3 rounded-xl">
      <div className="flex justify-between items-center w-full">
        <div className="w-1/2">
          <h3 className="text-grey text-sm font-bold">Presents History</h3>
        </div>
      </div>
      <aside className="flex justify-between items-center mt-4 mb-2">
        <div className="text-sm text-textGrey flex gap-1 items-center">
          Staff Name
        </div>
        <div className="text-sm text-textGrey flex gap-1 items-center">
          No of Days
        </div>
      </aside>
      {Array.from({ length: 5 }).map((_, index) => (
        <section key={index} className="flex justify-between items-center mb-3">
          <div className="flex gap-2 items-center">
            <Avatar className="cursor-pointer">
              <AvatarFallback>
                <img src={avatar2} alt="avatar" />
              </AvatarFallback>
            </Avatar>
            <p className="text-sm text-grey">Olivia Rhye</p>
          </div>
          <p className="px-10 text-sm text-textGrey">1</p>
        </section>)
      )}
    </div>
  );
};

export default AttendanceList;
