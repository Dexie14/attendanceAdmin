import { Outlet } from "react-router-dom";
import Sidebar from "../menubars/Sidebar";
import AdminHeader from "../menubars/AdminHeader";

const AdminLayout = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[18%] bg-white border border-l border-borderColor">
        <Sidebar />
      </div>
      <div className="w-[82%] ">
        <AdminHeader />
        <div className="h-[calc(100vh-58px)] overflow-y-auto scrollbar-hidden p-6 bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
