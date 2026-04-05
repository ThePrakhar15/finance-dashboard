

import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Charts from "./components/Charts";
import Transactions from "./components/Transactions";
import { transactions as initialTransactions } from "./data/transactions";
import Insights from "./components/Insights";

function App() {

  const [role, setRole] = useState(() => {
    return localStorage.getItem("role") || "viewer"; // ← persist role
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : initialTransactions;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("role", role); // ← save role on change
  }, [role]);

  return (
    <div className="min-h-screen bg-slate-100">

     
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <div className={`
        fixed top-0 left-0 z-50 h-full w-64
        bg-white shadow-md p-5
        transform transition-transform duration-300 md:hidden
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

      {/* Desktop layout */}
      <div className="flex">

        {/* Desktop sidebar */}
        <div className="hidden md:block w-64 bg-white shadow-md sticky top-0 h-screen shrink-0 p-5">
          <h2 className="text-2xl font-bold mb-8">FinTrack</h2>
          <ul className="space-y-4">
            <li className="cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">Dashboard</li>
            <li className="cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">Transaction</li>
            <li className="cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">Insights</li>
            <li className="cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">Settings</li>
          </ul>
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <Header role={role} setRole={setRole} setSidebarOpen={setSidebarOpen} />
          <div className="p-4">
            <Cards transactions={transactions} />
            <Insights transactions={transactions} />
            <Charts transactions={transactions} />
            <Transactions
              role={role}
              transactions={transactions}
              setTransactions={setTransactions}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;