import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SearchInputComp from "../input/SearchInputComp";
import { NotificationIcon } from "@/assets/svgComp/SidebarIcon";
import avatar from "@/assets/avatar.png";
import { MenuIcon } from "lucide-react";

interface AdminHeaderProps {
  toggleSidebar: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ toggleSidebar }) => {
  return (
    <div className="bg-white py-2 px-5 flex items-center justify-between border-b">
      <button onClick={toggleSidebar} className="lg:hidden">
        <MenuIcon />
      </button>
      <div className="w-1/2">
        <SearchInputComp
          placeholder="Search here..."
          className="bg-[#F9FAFB] w-full"
        />
      </div>

      <div className="flex gap-2 items-center">
        <NotificationIcon />
        <Avatar className="cursor-pointer">
          <AvatarImage />
          <AvatarFallback>
            <img src={avatar} alt="avatar" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default AdminHeader;
