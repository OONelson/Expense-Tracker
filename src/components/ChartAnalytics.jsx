// eslint-disable-next-line no-unused-vars
import React from "react";
import { useGetTransactions } from "../hooks/useGetTransactions";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];
const ChartAnalytics = () => {
  const { transactions } = useGetTransactions();

  const processTransactionData = (transactions) => {
    const categoryMap = {};

    transactions.forEach((transaction) => {
      const { category, amount } = transaction;
      if (categoryMap[category]) {
        categoryMap[category] += amount;
      } else {
        categoryMap[category] = amount;
      }
    });
    return Object.entries(categoryMap).map(([category, amount]) => ({
      name: category,
      value: amount,
    }));
  };
  const data = processTransactionData(transactions);
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-black p-4">
      <h1 className="text-2xl font-bold mb-4">Monthly Transaction Analytics</h1>

      {transactions.length === 0 ? (
        <p className="text-slate-700 dark:text-slate-500">
          No transactions found for this month.
        </p>
      ) : (
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </div>
  );
};

export default ChartAnalytics;
