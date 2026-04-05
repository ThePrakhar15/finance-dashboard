// // import { useState } from "react";

// // function Transactions({ role, transactions, setTransactions }) {

// //   const [search , setSearch] = useState("");
// //   const [typeFilter, setTypeFilter] = useState("all");

// //   const [newTransaction, setNewTransaction] = useState({
// //     category: "",
// //     amount: "",
// //     type: "expense",
// //     date: ""
// //   });

// //   const handleAdd = () => {
// //     const newEntry = {
// //       id: Date.now(),
// //       ...newTransaction,
// //       amount: Number(newTransaction.amount)
// //     };

// //     setTransactions([...transactions, newEntry]);

// //     setNewTransaction({
// //       category: "",
// //       amount: "",
// //       type: "expense",
// //       date: ""
// //     });
// //   };

// //   const filteredTransactions = transactions
// //     .filter((t) =>
// //       t.category.toLowerCase().includes(search.toLowerCase())
// //     )
// //     .filter((t) =>
// //       typeFilter === "all" ? true : t.type === typeFilter
// //     );

// //   return (
// //     <div className="bg-white p-6 rounded-xl shadow-md mt-6">

      
      
// //       <h2 className="text-xl font-semibold mb-4">Transactions</h2>

// //       {/* Admin Add Form — stack on mobile, row on desktop */}
// //       {role === "admin" && (
// //         <div className="flex flex-col sm:flex-row flex-wrap gap-2 mb-4"> {/* ← flex-col on mobile */}
// //           <input
// //             placeholder="Category"
// //             className="border p-2 rounded flex-1 min-w-0"
// //             value={newTransaction.category}
// //             onChange={(e) => setNewTransaction({ ...newTransaction, category: e.target.value })}
// //           />
// //           <input
// //             placeholder="Amount"
// //             type="number"
// //             className="border p-2 rounded flex-1 min-w-0"
// //             value={newTransaction.amount}
// //             onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
// //           />
// //           <select
// //             className="border p-2 rounded"
// //             value={newTransaction.type}
// //             onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
// //           >
// //             <option value="income">Income</option>
// //             <option value="expense">Expense</option>
// //           </select>
// //           <input
// //             type="date"
// //             className="border p-2 rounded flex-1 min-w-0"
// //             value={newTransaction.date}
// //             onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
// //           />
// //           <button
// //             className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
// //             onClick={handleAdd}
// //           >
// //             Add
// //           </button>
// //         </div>
// //       )}

// //       {/* Search + Filter */}
// //       <div className="flex gap-4 mb-4">
// //         <input
// //           type="text"
// //           placeholder="Search category.."
// //           className="border p-2 rounded w-full"
// //           value={search}
// //           onChange={(e) => setSearch(e.target.value)}
// //         />
// //         <select
// //           className="border p-2 rounded"
// //           value={typeFilter}
// //           onChange={(e) => setTypeFilter(e.target.value)}
// //         >
// //           <option value="all">All</option>
// //           <option value="income">Income</option>
// //           <option value="expense">Expense</option>
// //         </select>
// //       </div>

// //       {/* Table — wrap in scrollable div for mobile */}
// //       <div className="overflow-x-auto">
// //   <table className="w-full text-left min-w-[400px]">
// //     <thead>
// //       <tr className="border-b">
// //         <th className="py-2">Date</th>
// //         <th className="py-2">Category</th>
// //         <th className="py-2">Type</th>
// //         <th className="py-2">Amount</th>
// //       </tr>
// //     </thead>
// //     <tbody>
// //       {filteredTransactions.map((t) => (
// //         <tr key={t.id} className="border-b">
// //           <td className="py-2 pr-4 whitespace-nowrap">{t.date}</td>
// //           <td className="py-2 pr-4">{t.category}</td>
// //           <td className="py-2 pr-4">
// //             <span className={`px-2 py-1 rounded text-white text-sm ${
// //               t.type === "income" ? "bg-green-500" : "bg-red-500"
// //             }`}>
// //               {t.type}
// //             </span>
// //           </td>
// //           <td className="py-2">${t.amount}</td>
// //         </tr>
// //       ))}
// //     </tbody>
// //   </table>
// // </div>

// //     </div>
// //   );
// // }

// // export default Transactions;

// import { useState } from "react";

// function Transactions({ role, transactions, setTransactions }) {

//   const [search, setSearch] = useState("");
//   const [typeFilter, setTypeFilter] = useState("all");

//   const [newTransaction, setNewTransaction] = useState({
//     category: "",
//     amount: "",
//     type: "expense",
//     date: ""
//   });

//   const handleAdd = () => {
//     const newEntry = {
//       id: Date.now(),
//       ...newTransaction,
//       amount: Number(newTransaction.amount)
//     };
//     setTransactions([...transactions, newEntry]);
//     setNewTransaction({ category: "", amount: "", type: "expense", date: "" });
//   };

//   const filteredTransactions = transactions
//     .filter((t) => t.category.toLowerCase().includes(search.toLowerCase()))
//     .filter((t) => typeFilter === "all" ? true : t.type === typeFilter);

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-md mt-6">

//       <h2 className="text-xl font-semibold mb-4">Transactions</h2>

//       {/* Admin Add Form */}
//       {role === "admin" && (
//         <div className="flex flex-col sm:flex-row flex-wrap gap-2 mb-4">
//           <input
//             placeholder="Category"
//             className="border p-2 rounded flex-1 min-w-0"
//             value={newTransaction.category}
//             onChange={(e) => setNewTransaction({ ...newTransaction, category: e.target.value })}
//           />
//           <input
//             placeholder="Amount"
//             type="number"
//             className="border p-2 rounded flex-1 min-w-0"
//             value={newTransaction.amount}
//             onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
//           />
//           <select
//             className="border p-2 rounded"
//             value={newTransaction.type}
//             onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
//           >
//             <option value="income">Income</option>
//             <option value="expense">Expense</option>
//           </select>
//           <input
//             type="date"
//             className="border p-2 rounded flex-1 min-w-0"
//             value={newTransaction.date}
//             onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
//           />
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
//             onClick={handleAdd}
//           >
//             Add
//           </button>
//         </div>
//       )}

//       {/* Search + Filter */}
//       <div className="flex gap-4 mb-4">
//         <input
//           type="text"
//           placeholder="Search category.."
//           className="border p-2 rounded w-full"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <select
//           className="border p-2 rounded"
//           value={typeFilter}
//           onChange={(e) => setTypeFilter(e.target.value)}
//         >
//           <option value="all">All</option>
//           <option value="income">Income</option>
//           <option value="expense">Expense</option>
//         </select>
//       </div>

//       {/* Table - desktop only */}
//       <div className="hidden sm:block overflow-x-auto">
//         <table className="w-full text-left">
//           <thead>
//             <tr className="border-b">
//               <th className="py-2 pr-4">Date</th>
//               <th className="py-2 pr-4">Category</th>
//               <th className="py-2 pr-4">Type</th>
//               <th className="py-2">Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredTransactions.map((t) => (
//               <tr key={t.id} className="border-b">
//                 <td className="py-2 pr-4 whitespace-nowrap">{t.date}</td>
//                 <td className="py-2 pr-4">{t.category}</td>
//                 <td className="py-2 pr-4">
//                   <span className={`px-2 py-1 rounded text-white text-sm ${
//                     t.type === "income" ? "bg-green-500" : "bg-red-500"
//                   }`}>
//                     {t.type}
//                   </span>
//                 </td>
//                 <td className="py-2">${t.amount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Cards - mobile only */}
//       <div className="sm:hidden flex flex-col gap-3">
//         {filteredTransactions.map((t) => (
//           <div key={t.id} className="border rounded-lg p-3 flex justify-between items-center">
//             <div>
//               <p className="font-medium text-gray-800">{t.category}</p>
//               <p className="text-xs text-gray-400">{t.date}</p>
//             </div>
//             <div className="flex flex-col items-end gap-1">
//               <span className={`px-2 py-1 rounded text-white text-xs ${
//                 t.type === "income" ? "bg-green-500" : "bg-red-500"
//               }`}>
//                 {t.type}
//               </span>
//               <p className="font-bold text-gray-800">${t.amount}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

// export default Transactions;

import { useState } from "react";

function Transactions({ role, transactions, setTransactions }) {

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const [newTransaction, setNewTransaction] = useState({
    category: "",
    amount: "",
    type: "expense",
    date: ""
  });

const handleAdd = () => {
  // Validate — don't add if fields are empty
  if (!newTransaction.category || !newTransaction.amount || !newTransaction.date) {
    alert("Please fill in all fields before adding.");
    return;
  }

  const newEntry = {
    id: Date.now(),
    ...newTransaction,
    amount: Number(newTransaction.amount)
  };
  setTransactions([...transactions, newEntry]);
  setNewTransaction({ category: "", amount: "", type: "expense", date: "" });
};

  const filteredTransactions = transactions
    .filter((t) => t.category.toLowerCase().includes(search.toLowerCase()))
    .filter((t) => typeFilter === "all" ? true : t.type === typeFilter);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">

      <h2 className="text-xl font-semibold mb-4">Transactions</h2>

      {/* Admin Add Form */}
      {role === "admin" && (
        <div className="flex flex-col sm:flex-row flex-wrap gap-2 mb-4">
          <input
            placeholder="Category"
            className="border p-2 rounded flex-1 min-w-0"
            value={newTransaction.category}
            onChange={(e) => setNewTransaction({ ...newTransaction, category: e.target.value })}
          />
          <input
            placeholder="Amount"
            type="number"
            className="border p-2 rounded flex-1 min-w-0"
            value={newTransaction.amount}
            onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
          />
          <select
            className="border p-2 rounded"
            value={newTransaction.type}
            onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <input
            type="date"
            className="border p-2 rounded flex-1 min-w-0"
            value={newTransaction.date}
            onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      )}

      {/* Search + Filter */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search category.."
          className="border p-2 rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Empty State */}
      {filteredTransactions.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-4xl mb-3">💸</p>
          <p className="text-gray-500 font-medium text-lg">No transactions yet</p>
          <p className="text-gray-400 text-sm mt-1">Add your first transaction above</p>
        </div>
      )}

      {/* Table - desktop only */}
      {filteredTransactions.length > 0 && (
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2 pr-4">Date</th>
                <th className="py-2 pr-4">Category</th>
                <th className="py-2 pr-4">Type</th>
                <th className="py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((t) => (
                <tr key={t.id} className="border-b">
                  <td className="py-2 pr-4 whitespace-nowrap">{t.date}</td>
                  <td className="py-2 pr-4">{t.category}</td>
                  <td className="py-2 pr-4">
                    <span className={`px-2 py-1 rounded text-white text-sm ${
                      t.type === "income" ? "bg-green-500" : "bg-red-500"
                    }`}>
                      {t.type}
                    </span>
                  </td>
                  <td className="py-2">${t.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Cards - mobile only */}
      {filteredTransactions.length > 0 && (
        <div className="sm:hidden flex flex-col gap-3">
          {filteredTransactions.map((t) => (
            <div key={t.id} className="border rounded-lg p-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-800">{t.category}</p>
                <p className="text-xs text-gray-400">{t.date}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={`px-2 py-1 rounded text-white text-xs ${
                  t.type === "income" ? "bg-green-500" : "bg-red-500"
                }`}>
                  {t.type}
                </span>
                <p className="font-bold text-gray-800">${t.amount}</p>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Transactions;