import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/SignUp";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import "react-datepicker/dist/react-datepicker.css";
import Attendance from "./pages/admin/attendance/Attendance";
import Staff from "./pages/admin/staff/Staff";
import LeaveMgt from "./pages/admin/leave/LeaveMgt";
import DepartmentMgt from "./pages/admin/department/DepartmentMgt";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<SignUp />}></Route>

        <Route path="/admin">
          <Route path="" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="staff" element={<Staff />} />
            <Route path="leave" element={<LeaveMgt />} />
            <Route path="department" element={<DepartmentMgt />} />
            <Route
              path="settings"
              element={<div className="">hom settings</div>}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
