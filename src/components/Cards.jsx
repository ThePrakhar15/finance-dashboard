

function Cards({transactions}){
      const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

    const balance = income - expense;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/*Total Balance*/}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-gray-500 text-sm">
                 Total Balance
                </h3>
                <p className="text-2xl font-bold mt-2 text-green-600">
                    ${balance}
                </p>
            </div>

            {/*Income*/}

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-gray-500 text-sm">
                  Income
                </h3>
                <p className="text-2xl font-bold mt-2 text-green-600">
                ${income}
                </p>
            </div>

            {/*Total Balance*/}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-gray-500 text-sm">
                Expense
            </h3>
            <p className="text-2xl font-bold mt-2 text-red-500">
            ${expense}
            </p>
            </div>
            
        </div>
    );
}

export default Cards;