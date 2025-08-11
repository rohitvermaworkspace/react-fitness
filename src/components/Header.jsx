import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import routeTitleMap from "../util/routeTitleMap";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const pageTitle = routeTitleMap[currentPath] || "Dashboard";

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // Apply theme when it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="w-full border-b bg-[var(--sidebar-bg)] shadow-sm border-[var(--sidebar-text)]">
      <div className="flex items-center justify-between px-4 py-2">

        {/* Page title */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-semibold text-[var(--sidebar-text)] hidden sm:block">
            {pageTitle}
          </span>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-4">

          {/* Search icon */}
          <button className="p-2 rounded hover:bg-[var(--sidebar-hover-bg)]">
            <svg className="w-5 h-5 text-[var(--sidebar-text)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </button>

          {/* Notification icon */}
          <button className="p-2 rounded hover:bg-[var(--sidebar-hover-bg)]">
            <svg className="w-5 h-5 text-[var(--sidebar-text)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          {/* Theme switch icon */}
          <button onClick={toggleTheme} className="p-2 rounded hover:bg-[var(--sidebar-hover-bg)]">
            {theme === "dark" ? (
              // Sun icon for light mode
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          {/* Profile */}
          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
            <img
              src="https://i.pravatar.cc/300"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
