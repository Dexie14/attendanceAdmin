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
          <div className="w-[45%]">
            <p className="text-placeholderColor text-xs">Staff Id</p>
            <p className="text-sm">{selectedRow?.staffId}</p>
          </div>
          <div className="">
            <p className="text-placeholderColor text-xs">Staff Name</p>
            <p className="text-sm">{selectedRow?.staffName}</p>
          </div>
        </aside>
        <aside className="flex items-center my-5 font-medium">
          <div className="w-[45%]">
            <p className="text-placeholderColor text-xs">Staff Email</p>
            <p className="text-sm">Oliver@gmail.com</p>
          </div>
          <div className="">
            <p className="text-placeholderColor text-xs">Department</p>
            <p className="text-sm">Human Resource Management</p>
          </div>
        </aside>
        <aside className="flex items-center my-5 font-medium">
          <div className="w-[45%]">
            <p className="text-placeholderColor text-xs">Office Branch</p>
            <p className="text-sm">Oliver@gmail.com</p>
          </div>
          <div className="">
            <p className="text-placeholderColor text-xs">Status</p>
            <p
              className={`${
                selectedRow?.status === "Present"
                  ? " text-earlyText "
                  : selectedRow?.status === "Late"
                  ? " text-yellow "
                  : " text-lateText "
              } text-sm `}
            >
              {selectedRow?.status}
            </p>
          </div>
        </aside>
        <aside className=" my-5 font-medium">
          <div className="">
            <p className="text-placeholderColor text-xs">Reason</p>
            <p>{selectedRow?.Details}</p>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default AttendanceDetail;
