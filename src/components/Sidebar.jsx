import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState } from "react"
import logo from "../assets/logo.png"
import profile from "../assets/profile.png"
import { Link, useLocation } from "react-router-dom";

const SidebarContext = createContext()

export default function Sidebar({ children, user  }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col border-r shadow-sm" style={{ backgroundColor: "var(--sidebar-bg)", color: "var(--sidebar-text)" }}>
        <div className="p-4 pb-2 flex items-center justify-between">
          <img src={logo} className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-[var(--sidebar-hover-bg)] text-[var(--sidebar-hover-text)] hover:bg-[var(--sidebar-hover-bg)]"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex flex-col px-3 gap-1.5 flex-1">
            {children}
          </ul>
        </SidebarContext.Provider>

        {/* Footer */}
        <div className="border-t flex p-3">
          <img src={profile} className="w-10 h-10 rounded-md" alt="" />
          <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : " w-0"}`}>
            <div className="leading-4">
              <h4 className="font-semibold text-[var(--sidebar-text)]">{user?.user_metadata?.full_name || "No Name"}</h4>
              <span className="text-xs text-[var(--sidebar-text)]">{user?.email}</span>
            </div>
            <MoreVertical size={20} className="text-[var(--sidebar-text)] cursor-pointer" />
          </div>
        </div>
      </nav>
    </aside>
  );
}


export function SidebarItem({ icon, text, to, alert }) {
  const { expanded } = useContext(SidebarContext);
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <Link to={to}
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
        ${active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"}
      `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}
      >
        {text}
      </span>

      {alert && (
        <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${ expanded ? "" : "top-2"}`}
        />
      )}

      {!expanded && (
        <div
          className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
        >
          {text}
        </div>
      )}
    </Link>
  );
}

