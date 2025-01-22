import ActivityLog from "@/components/dashboard/ActivityLog";
import AttendanceChart from "@/components/dashboard/AttendanceChart";
import AttendanceList from "@/components/dashboard/AttendanceList";
import DashboardTable from "@/components/dashboard/DashboardTable";
import StatCard, { StatCardProps } from "@/components/dashboard/StatCard";

const StatData: StatCardProps[] = [
  {
    label: "No of Staff",
    value: 30,
    change: 3,
  },
  {
    label: "No of Staff Present",
    value: 2,
    change: 3,
  },
  {
    label: "No of Late Staff",
    value: 6,
    change: 3,
  },
  {
    label: "No of Absent Staff",
    value: 6,
    change: 3,
  },
];

const Dashboard = () => {
  return (
    <div>
      <h3 className="text-grey font-extrabold sm:text-2xl text-lg">Dashboard</h3>
      <main className="lg:flex justify-between my-4">
        <section className="lg:w-[70%] ">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mb-4">
            {StatData?.map((item: StatCardProps) => {
              return <StatCard StatData={item} />;
            })}
          </div>
          <aside className="grid sm:grid-cols-2 gap-4">
            <div>
              <AttendanceChart />
            </div>
            <div>
              <AttendanceList />
            </div>
          </aside>
        </section>
        <section className="lg:w-[28%] mt-4 lg:mt-0">
          <ActivityLog />
        </section>
      </main>
      <section className="border border-borderColor rounded-xl">
        <div className="p-4">
          <p className="text-sm text-grey font-bold">Today's Attendance</p>
        </div>
        <DashboardTable />
      </section>
    </div>
  );
};

export default Dashboard;
