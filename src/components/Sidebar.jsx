
function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* Desktop sidebar - always visible, in normal flow */}
      <div className="hidden md:block w-64 bg-white shadow-md sticky top-0 h-screen p-5 shrink-0">
        <h2 className="text-2xl font-bold mb-8">FinTrack</h2>
        <ul className="space-y-4">
          <li className="cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">Dashboard</li>
          <li className="cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">Transaction</li>
          <li className="cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">Insights</li>
          <li className="cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">Settings</li>
        </ul>
      </div>

      {/* Mobile sidebar - slides in as overlay */}
      <div className={`
        md:hidden fixed top-0 left-0 z-50 
        w-64 bg-white shadow-md h-full p-5
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <button className="mb-4 text-xl" onClick={() => setSidebarOpen(false)}>✕</button>
        <h2 className="text-2xl font-bold mb-8">FinTrack</h2>
        <ul className="space-y-4">
          <li className="cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">Dashboard</li>
          <li className="cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">Transaction</li>
          <li className="cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">Insights</li>
          <li className="cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">Settings</li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;