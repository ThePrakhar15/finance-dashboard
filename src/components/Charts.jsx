
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     ArcElement,
//     Tooltip,
//     Legend
// } from "chart.js";

// import { Line, Pie } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Tooltip,
//   Legend
// );

// function Charts({ transactions }) {

//   // Time-based chart
//   const monthlyExpenses = {};

//   transactions.forEach((t) => {
//     if (t.type === "expense") {
//       const date = new Date(t.date);
//       const month = date.toLocaleString("default", { month: "short" });
//       monthlyExpenses[month] = (monthlyExpenses[month] || 0) + t.amount;
//     }
//   });

//   const sortedMonths = Object.keys(monthlyExpenses).sort(
//     (a, b) => new Date(`${a} 1, 2024`) - new Date(`${b} 1, 2024`)
//   );

//   const lineData = {
//     labels: sortedMonths,
//     datasets: [
//       {
//         label: "Expenses",
//         data: sortedMonths.map((month) => monthlyExpenses[month]),
//         borderColor: "#3b82f6",
//         backgroundColor: "rgba(59,130,246,0.2)",
//       },
//     ],
//   };

//   // Category based chart
//   const categoryTotals = {};

//   transactions.forEach((t) => {
//     if (t.type === "expense") {
//       categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
//     }
//   });

//   const pieData = {
//     labels: Object.keys(categoryTotals),
//     datasets: [
//       {
//         data: Object.values(categoryTotals),
//         backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"],
//       },
//     ],
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

//       <div className="bg-white p-6 rounded-xl shadow-md">
//         <h2 className="font-semibold mb-4">Expense Trend</h2>
//         <div className="relative h-64">
//           <Line
//             data={lineData}
//             options={{ responsive: true, maintainAspectRatio: false }}
//           />
//         </div>
//       </div>

//       <div className="bg-white p-6 rounded-xl shadow-md">
//         <h2 className="font-semibold mb-4">Spending by Category</h2>
//         <div className="relative h-64 max-w-xs mx-auto">
//           <Pie
//             data={pieData}
//             options={{ responsive: true, maintainAspectRatio: false }}
//           />
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Charts;

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

function Charts({ transactions }) {

  const monthlyExpenses = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      const date = new Date(t.date);
      const month = date.toLocaleString("default", { month: "short" });
      monthlyExpenses[month] = (monthlyExpenses[month] || 0) + t.amount;
    }
  });

  const sortedMonths = Object.keys(monthlyExpenses).sort(
    (a, b) => new Date(`${a} 1, 2024`) - new Date(`${b} 1, 2024`)
  );

  const lineData = {
    labels: sortedMonths,
    datasets: [
      {
        label: "Expenses",
        data: sortedMonths.map((month) => monthlyExpenses[month]),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
      },
    ],
  };

  // Category based chart — normalized to lowercase
  const categoryTotals = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      const category = t.category.toLowerCase(); // ← fix duplicate categories
      categoryTotals[category] = (categoryTotals[category] || 0) + t.amount;
    }
  });

  const pieData = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"],
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="font-semibold mb-4">Expense Trend</h2>
        <div className="relative h-64">
          <Line
            data={lineData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="font-semibold mb-4">Spending by Category</h2>
        <div className="relative h-64 max-w-xs mx-auto">
          <Pie
            data={pieData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </div>

    </div>
  );
}

export default Charts;