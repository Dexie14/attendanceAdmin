import GenericTable from "../general/GenericTable";
import { Avatar, AvatarFallback } from "../ui/avatar";

import avatar2 from "@/assets/avatar2.png";
// Sample data type
export type DashboardDataItem = {
  _id: string;
  name?: string;
  staffName?: string;
  location?: string;
  checkIn?: string;
  checkOut?: string;
  status: string;
};

const sampleData: DashboardDataItem[] = [
  {
    _id: "1",
    name: "9394hu94",
    staffName: "Olivia Rhye",
    location: "Branch 1",
    checkIn: "8:59am",
    checkOut: "5:00pm",
    status: "Early",
  },
  {
    _id: "1",
    name: "9394hu94",
    staffName: "Olivia Rhye",
    location: "Branch 1",
    checkIn: "8:59am",
    checkOut: "5:00pm",
    status: "Late",
  },
];

const DashboardTable = () => {
  const headers = [
    { content: <>Staff Id</> },
    { content: <>Staff Name</> },
    { content: <>Location</> },
    { content: <>Check In Time</> },
    { content: <>Check Out Time</> },
    { content: <>Status</> },
  ];

  const renderRow = (item: DashboardDataItem, index: number) => {
    return (
      <tr
        key={index}
        className=" w-full text-grey text-[13px] h-[60px] text-sm text-left font-medium cursor-pointer"
      >
        <td className="py-1 px-4">{item.name}</td>
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
              item?.status === "Early"
                ? "bg-earlyFade text-earlyText border border-earlyBorder"
                : "bg-lateFade text-lateText border border-lateBorder"
            }  flex items-center justify-center gap-2 rounded-[16px] w-fit px-2 py-1`}
          >
            {item?.status}
          </span>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <GenericTable headers={headers} data={sampleData} renderRow={renderRow} />
    </div>
  );
};

export default DashboardTable;
