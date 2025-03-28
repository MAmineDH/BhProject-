import React from 'react';
import Sidebar from '../components/Navbar'; // Import your sidebar component

function DashboardUser() {
  // User data
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    membership: "Premium",
    joinDate: "15 Jan 2022",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    creditScore: 785,
    creditLimit: "$15,000",
    creditUsed: "$3,245",
    availableCredit: "$11,755",
    paymentDue: "May 25, 2023",
    minPayment: "$125",
    recentTransactions: [
      { id: 1, name: "Amazon Purchase", date: "May 10", amount: "$245.50", type: "debit" },
      { id: 2, name: "Salary Deposit", date: "May 1", amount: "$3,200.00", type: "credit" },
      { id: 3, name: "Netflix Subscription", date: "Apr 28", amount: "$14.99", type: "debit" },
      { id: 4, name: "Grocery Store", date: "Apr 25", amount: "$87.43", type: "debit" },
    ],
    cards: [
      { id: 1, last4: "4532", type: "Visa", expiry: "05/25" },
      { id: 2, last4: "8765", type: "Mastercard", expiry: "08/26" },
    ]
  };

  // Helper function to parse currency strings
  const parseCurrency = (currencyString) => {
    return parseFloat(currencyString.replace(/[^0-9.-]+/g, ""));
  };

  // Calculate credit utilization percentage
  const creditUtilization = Math.round(
    (parseCurrency(user.creditUsed) / parseCurrency(user.creditLimit) * 100
  ));

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <Sidebar /> */}
      
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 bg-gray-50 min-h-full">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Make a Payment
                </button>
                {/*notification button */}
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
              </div>
            </div>

            {/* User Profile Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* User Card */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <img src={user.avatar} alt="User" className="w-16 h-16 rounded-full" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                    <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {user.membership}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Member since</span>
                    <span className="font-medium">{user.joinDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Credit Score</span>
                    <span className="font-medium">{user.creditScore}</span>
                  </div>
                  <div className="pt-4 mt-4 border-t border-red-200">
                    <button className="w-full py-2 text-center text-black border border-black rounded-lg hover:bg-blue-50 transition">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>

              {/* Credit Summary */}
              <div className="bg-white rounded-xl shadow-md p-6 lg:col-span-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Credit Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Credit Limit</p>
                    <p className="text-2xl font-bold text-black">{user.creditLimit}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Credit Used</p>
                    <p className="text-2xl font-bold text-red-600">{user.creditUsed}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Available Credit</p>
                    <p className="text-2xl font-bold text-green-600">{user.availableCredit}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-600">Next Payment Due</p>
                      <p className="font-medium">{user.paymentDue}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">Minimum Payment</p>
                      <p className="font-medium">{user.minPayment}</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${creditUtilization}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Credit utilization: {creditUtilization}%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Recent Transactions</h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {user.recentTransactions.map(transaction => (
                  <div key={transaction.id} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'}`}>
                        {transaction.type === 'credit' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{transaction.name}</p>
                        <p className="text-sm text-gray-500">{transaction.date}</p>
                      </div>
                    </div>
                    <p className={`font-medium ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.type === 'credit' ? '+' : '-'}{transaction.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Payment Methods</h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Add New
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {user.cards.map(card => (
                  <div key={card.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-gray-600 text-sm">Card ending in {card.last4}</p>
                        <p className="font-medium">{card.type}</p>
                      </div>
                      {card.type === 'Visa' ? (
                        <img src="https://logo.clearbit.com/visa.com" alt="Visa" className="h-8" />
                      ) : (
                        <img src="https://logo.clearbit.com/mastercard.com" alt="Mastercard" className="h-8" />
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-600 text-sm">Expires {card.expiry}</p>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardUser;