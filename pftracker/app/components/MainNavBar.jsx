import { Navbar, DarkThemeToggle } from "flowbite-react";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

export default function MainNavBar() {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Navbar fluid>
        <div className="flex items-center">
          <HiMenuAlt1
            className="mr-6 h-6 w-6 cursor-pointer text-gray-600 dark:text-gray-400"
            onClick={() => setCollapsed(!collapsed)}
          />
          <span className="text-xl font-semibold dark:text-white">
            Flowbite React Components
          </span>
        </div>
        <div className="flex items-center gap-2">         
          <DarkThemeToggle />
        </div>
      </Navbar>
    );
}