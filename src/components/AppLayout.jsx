import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { 
  LayoutDashboard,
  Users,
  IdCardLanyard,
  Dumbbell,
  NotepadTextDashed,
  Settings,
  Wallet,
  Apple
} from "lucide-react";
import { SidebarItem } from "./Sidebar"; // ✅ Ensure this is exported

const AppLayout = () => {
  return (
    <>
      {/* <Navbar /> */}

      <div className="flex">
        <Sidebar>
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" to="/" alert />
          <SidebarItem icon={<IdCardLanyard size={20} />} text="Employee" to="/employee" active />
          <SidebarItem icon={<Dumbbell size={20} />} text="Exercise" to="/exercise" />
          <SidebarItem icon={<Users size={20} />} text="Members" to="/members" />
          <SidebarItem icon={<NotepadTextDashed size={20} />} text="Workout Templates" to="/workoutTemplate" alert />
          <SidebarItem icon={<Apple size={20} />} text="Diet Template" to="dietTemplate"/>
          <hr className="my-3" />
          <SidebarItem icon={<Wallet  size={20} />} text="Expense" to="expenses"/>
          <SidebarItem icon={<Settings size={20} />} text="Settings" to="settings" />
        </Sidebar>
         <div className="flex flex-col w-full">
          <Header />
          <div className="p-4 bg-[var(--sidebar-bg)] text-[var(--sidebar-text)] flex-1">
            <Outlet />
          </div>
        </div>
      </div>
      
      {/* <Footer /> */}
    </>
  );
};

export default AppLayout;
