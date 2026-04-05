function Header({ role, setRole, setSidebarOpen }) {

  return ( 
    <div className="flex justify-between items-center px-6 py-6 bg-white shadow-md sticky top-0 z-30">

      {/* Left Section */}
      <div className="flex items-center gap-4">

        {/* Hamburger */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setSidebarOpen(prev => !prev)}
        >
          ☰
        </button>

        <h1 className="text-xl font-bold text-gray-800">
          Finance Dashboard
        </h1>

      </div>

      {/* Right Section */}
      <select 
        value={role} 
        onChange={(e) => setRole(e.target.value)}
        className="border px-3 py-2 rounded-lg text-black shadow-md focus:outline-none"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>

    </div>
  );
}

export default Header;