import { AttendanceDataItem } from "./AttendanceTable";

const AttendanceDetail = ({
  selectedRow,
}: {
  selectedRow: AttendanceDataItem;
}) => {
  return (
    <div>
      <section className="text-grey">
        <aside className="flex items-center my-5 font-medium">
          <div className="w-[50%]">
            <p className="text-placeholderColor sm:text-xs text-[10px]">
              Staff Id
            </p>
            <p className="sm:text-sm text-xs">{selectedRow?.staffId}</p>
          </div>
          <div className="">
            <p className="text-placeholderColor sm:text-xs text-[10px]">
              Staff Name
            </p>
            <p className="sm:text-sm text-xs">{selectedRow?.staffName}</p>
          </div>
        </aside>
        <aside className="flex items-center my-5 font-medium">
          <div className="w-[50%]">
            <p className="text-placeholderColor sm:text-xs text-[10px]">
              Staff Email
            </p>
            <p className="sm:text-sm text-xs">Oliver@gmail.com</p>
          </div>
          <div className="">
            <p className="text-placeholderColor sm:text-xs text-[10px]">
              Department
            </p>
            <p className="sm:text-sm text-xs">Human Resource Management</p>
          </div>
        </aside>
        <aside className="flex items-center my-5 font-medium">
          <div className="w-[50%]">
            <p className="text-placeholderColor sm:text-xs text-[10px]">
              Office Branch
            </p>
            <p className="sm:text-sm text-xs">Oliver@gmail.com</p>
          </div>
          <div className="">
            <p className="text-placeholderColor sm:text-xs text-[10px]">
              Status
            </p>
            <p
              className={`${
                selectedRow?.status === "Present"
                  ? " text-earlyText "
                  : selectedRow?.status === "Late"
                  ? " text-yellow "
                  : " text-lateText "
              } sm:text-sm text-xs `}
            >
              {selectedRow?.status}
            </p>
          </div>
        </aside>
        <aside className=" my-5 font-medium">
          <div className="">
            <p className="text-placeholderColor sm:text-xs text-[10px]">
              Reason
            </p>
            <p className="sm:text-sm text-xs">{selectedRow?.Details}</p>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default AttendanceDetail;
