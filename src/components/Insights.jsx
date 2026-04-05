function Insights({ transactions }) {

  const totalTransactions = transactions.length;

  const avgExpense = transactions.filter(t => t.type === "expense").length > 0
    ? (
        transactions
          .filter(t => t.type === "expense")
          .reduce((acc, t) => acc + t.amount, 0) /
        transactions.filter(t => t.type === "expense").length
      ).toFixed(2)
    : 0;

  // Highest Spending Category
  const categoryTotals = {};
  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  const highestCategory = Object.keys(categoryTotals).length > 0
    ? Object.keys(categoryTotals).reduce((a, b) =>
        categoryTotals[a] > categoryTotals[b] ? a : b
      )
    : "No Data";

  const savingsRate = (() => {
    const income = transactions
      .filter(t => t.type === "income")
      .reduce((acc, t) => acc + t.amount, 0);
    const expense = transactions
      .filter(t => t.type === "expense")
      .reduce((acc, t) => acc + t.amount, 0);
    return income > 0 ? (((income - expense) / income) * 100).toFixed(1) : 0;
  })();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-gray-500 text-sm">Total Transactions</h3>
        <p className="text-xl font-bold mt-2">{totalTransactions}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-gray-500 text-sm">Avg Expense</h3>
        <p className="text-xl font-bold text-red-500 mt-2">${avgExpense}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-gray-500 text-sm">Highest Spending</h3>
        <p className="text-xl font-bold mt-2">{highestCategory}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-gray-500 text-sm">Savings Rate</h3>
        <p className={`text-xl font-bold mt-2 ${savingsRate >= 0 ? "text-green-600" : "text-red-500"}`}>
          {savingsRate}%
        </p>
      </div>

    </div>
  );
}

export default Insights;