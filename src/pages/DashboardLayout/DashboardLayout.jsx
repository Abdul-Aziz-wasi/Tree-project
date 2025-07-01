import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const DashboardLayout = () => {
  const [Sidebar, setSidebar] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      
      <div className="md:hidden bg-green-600 text-white p-4 flex justify-between items-center">
        <h2 className="text-lg font-bold">Dashboard</h2>
        <button onClick={() => setSidebar(!Sidebar)} className="text-2xl">
          <FaBars />
        </button>
      </div>

    
      <aside
        className={`${
          Sidebar ? 'block' : 'hidden'
        } md:block w-full md:w-64 bg-green-100 p-6 space-y-4`}
      >
        <h2 className="text-xl font-bold text-green-700 hidden md:block">Dashboard</h2>
        <ul className="space-y-2">
            <li>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? 'text-green-700 font-semibold' : 'text-gray-700'
      }
    >
      Home
    </NavLink>
  </li>
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                isActive ? 'text-green-700 font-semibold' : 'text-gray-700'
              }
            >
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/allitems"
              className={({ isActive }) =>
                isActive ? 'text-green-700 font-semibold' : 'text-gray-700'
              }
            >
              All Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myitems"
              className={({ isActive }) =>
                isActive ? 'text-green-700 font-semibold' : 'text-gray-700'
              }
            >
              My Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/additem"
              className={({ isActive }) =>
                isActive ? 'text-green-700 font-semibold' : 'text-gray-700'
              }
            >
              Add Item
            </NavLink>
          </li>
        </ul>
      </aside>

      
      <main className="flex-1 p-4 md:p-6 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
