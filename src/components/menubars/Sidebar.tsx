import { Link, useLocation } from "react-router-dom";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ReactNode } from "react";
import {
  AttendanceIcon,
  DashboardIcon,
  LogoutIcon,
  ManagementIcon,
  SettingsIcon,
  StaffIcon,
} from "@/assets/svgComp/SidebarIcon";

type SidebarItem = {
  name: string;
  link: string;
  icon?: ReactNode;
};

const sidebarItems: SidebarItem[] = [
  {
    name: "Dashboard",
    link: "/admin",
    icon: <DashboardIcon />,
  },
  {
    name: "Attendance",
    link: "/admin/attendance",
    icon: <AttendanceIcon />,
  },
  {
    name: "Staff",
    link: "/admin/staff",
    icon: <StaffIcon />,
  },
  {
    name: "Leave Management",
    link: "/admin/leave",
    icon: <ManagementIcon />,
  },
  {
    name: "Department Management",
    link: "/admin/department",
    icon: <StaffIcon />,
  },
  {
    name: "Settings",
    link: "/admin/settings",
    icon: <SettingsIcon />,
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="relative h-[95vh] px-2">
      <Link to={"/"}>
        <div className="p-10 flex justify-center items-center"></div>
      </Link>

      <main className="">
        {sidebarItems.map((item, index) => {
          const isActive = location.pathname === item.link;
          return (
            <div key={index}>
              <Link
                to={item.link}
                className={`flex items-center justify-between h-[45px] rounded-[4px] ${
                  isActive
                    ? " text-deepBlue bg-fadedBlue"
                    : "hover:text-deepBlue text-grey "
                }`}
              >
                <div className="flex gap-3 ml-5 items-center">
                  {item.icon}
                  <p
                    className={`text-xs font-medium ${
                      isActive
                        ? "text-deepBlue font-semibold"
                        : "text-lightBlueGrey hover:text-deepBlue"
                    } `}
                  >
                    {item.name}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </main>

      <div className="absolute bottom-0">
        <div className="flex items-center gap-10">
          <aside className="flex items-center gap-2">
            <Avatar className="bg-disabledText h-[35px] w-[35px] rounded-[100px] bg-lightPink">
              <AvatarFallback className="font-bold text-base bg-disabledText">
                OM
              </AvatarFallback>
            </Avatar>
            <div className="text-xs">
              <h5 className="font-semibold text-Navyblue">Omawunmi</h5>
              <p className="text-lightBlueGrey">Oma@rayna.ui</p>
            </div>
          </aside>
          <div className="">
            <div className="cursor-pointer">
              <LogoutIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
