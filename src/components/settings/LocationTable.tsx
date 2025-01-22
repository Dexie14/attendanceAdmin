import GenericTable from "../general/GenericTable";

export type DashboardDataItem = {
  _id: string;
  name?: string;
  location?: string;
};

const sampleData: DashboardDataItem[] = [
  {
    _id: "1",
    name: "9394hu94",
    location: "Branch 1",
  },
  {
    _id: "1",
    name: "9394hu94",
    location: "Branch 1",
  },
];

const LocationTable = () => {
  const headers = [{ content: <>Name of Branch</> }, { content: <>Address</> }];

  const renderRow = (item: DashboardDataItem, index: number) => {
    return (
      <tr
        key={index}
        className=" w-full text-grey text-[13px] h-[60px] text-sm text-left font-medium cursor-pointer"
      >
        <td className="py-1 px-4">{item.name}</td>

        <td className="py-1 px-4">{item?.location}</td>
      </tr>
    );
  };

  return (
    <div>
      <GenericTable headers={headers} data={sampleData} renderRow={renderRow} />
    </div>
  );
};

export default LocationTable;
