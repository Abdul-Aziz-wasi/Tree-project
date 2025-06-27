import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-green-100 p-6 space-y-4">
        <h2 className="text-xl font-bold text-green-700">Dashboard</h2>
        <ul className="space-y-2">
            
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

      
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
