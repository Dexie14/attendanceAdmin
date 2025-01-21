import GenericTable from "../general/GenericTable";
import { Avatar, AvatarFallback } from "../ui/avatar";

import avatar2 from "@/assets/avatar2.png";
export type StaffDataItem = {
  _id: string;
  staffId?: string;
  staffName?: string;
  location?: string;
  checkIn?: string;
  checkOut?: string;
  status?: string;
  Details?: string;
};

const sampleData: StaffDataItem[] = [
  {
    _id: "1",
    staffId: "9394hu94",
    staffName: "Olivia Rhye",
    location: "Branch 1",
    checkIn: "8:59am",
    checkOut: "5:00pm",
    status: "Present",
    Details: "Branch 1",
  },
  {
    _id: "1",
    staffId: "9394hu94",
    staffName: "Olivia Rhye",
    location: "Branch 1",
    checkIn: "8:59am",
    checkOut: "5:00pm",
    status: "Late",
    Details: "I couldnt make it",
  },
  {
    _id: "1",
    staffId: "9394hu94",
    staffName: "Olivia Rhye",
    location: "Branch 1",
    checkIn: "8:59am",
    checkOut: "5:00pm",
    status: "Absent",
    Details: "I couldnt make it",
  },
];

const StaffTable = () => {
  const headers = [
    {
      content: <input type="checkbox" />,
    },
    { content: <>Staff Id</> },
    { content: <>Staff Name</> },
    { content: <>Sign In Location</> },
    { content: <>Check In Time</> },
    { content: <>Check Out Time</> },
    { content: <>Status</> },
    { content: <>Details </> },
  ];

  const renderRow = (item: StaffDataItem, index: number) => {
    return (
      <tr
        key={index}
        className=" w-full text-grey text-[13px] text-sm h-[60px] text-left font-medium cursor-pointer"
      >
        <td className="py-1 px-4">
          <span>
            <input type="checkbox" />
          </span>
        </td>
        <td className="py-1 px-4">{item.staffId}</td>
        <td className="py-1 px-4">
          <div className="flex gap-2 items-center">
            <Avatar className="cursor-pointer">
              <AvatarFallback>
                <img src={avatar2} alt="avatar" />
              </AvatarFallback>
            </Avatar>
            <p className="text-sm text-grey">{item?.staffName}</p>
          </div>
        </td>
        <td className="py-1 px-4">{item?.location}</td>
        <td className="py-1 px-4">{item?.checkIn}</td>
        <td className="py-1 px-4">{item?.checkOut}</td>
        <td className="py-1 px-4">
          {" "}
          <span
            className={`${
              item?.status === "Present"
                ? "bg-earlyFade text-earlyText border border-earlyBorder"
                : item?.status === "Late"
                ? "bg-fadeYellow text-yellow border border-yellow"
                : "bg-lateFade text-lateText border border-lateBorder"
            }  flex items-center justify-center gap-2 rounded-[16px] w-fit px-2 py-1`}
          >
            {item?.status}
          </span>
        </td>

        <td className="py-1 px-4">{item?.Details}</td>
      </tr>
    );
  };

  return (
    <div>
      <GenericTable
        headers={headers}
        data={sampleData}
        renderRow={renderRow}
        className=""
      />
    </div>
  );
};

export default StaffTable;
