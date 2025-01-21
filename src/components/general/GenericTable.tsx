import { ReactNode } from "react";

type Header = {
  content: ReactNode; // Text, icon, or any JSX content
  align?: "left" | "center" | "right"; // Optional alignment
};

type TableProps<T> = {
  headers: Header[]; // Array of header names or JSX elements
  data: T[]; // Array of data items
  renderRow: (item: T, index: number) => ReactNode; // Custom render function for table rows
  className?: string; // Custom render function for table rows
};

const GenericTable = <T,>({
  headers,
  data,
  renderRow,
  className,
}: TableProps<T>) => {
  return (
    <div
      style={{ maxHeight: "220px" }}
      className={`overflow-x-auto overflow-y-scroll scrollbar-hidden ${className}`}
    >
      <table className="min-w-full  table-auto tablingTable bg-borderColor ">
        <thead className="text-left sticky top-0 bg-[#FAFAFA] ">
          <tr className=" h-[40px] text-red-800 text-sm  ">
            {headers.map((header, index) => (
              <th
                key={index}
                className="py-2 px-4 border-b text-xs font-semibold text-tableHead text-nowrap"
              >
                {header?.content}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white ">
          {data.map((item, index) => renderRow(item, index))}
        </tbody>
      </table>
    </div>
  );
};

export default GenericTable;
