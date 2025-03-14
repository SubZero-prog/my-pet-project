
import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Download, ArrowUp, ArrowDown, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const performanceData = [
  { month: 'Jan', value: 1000 },
  { month: 'Feb', value: 1200 },
  { month: 'Mar', value: 1100 },
  { month: 'Apr', value: 1400 },
  { month: 'May', value: 1800 },
  { month: 'Jun', value: 2000 },
  { month: 'Jul', value: 2200 },
  { month: 'Aug', value: 2100 },
  { month: 'Sep', value: 2400 },
  { month: 'Oct', value: 2800 },
  { month: 'Nov', value: 3000 },
  { month: 'Dec', value: 3200 },
];

const assetAllocation = [
  { name: 'Bitcoin', value: 45 },
  { name: 'Ethereum', value: 30 },
  { name: 'Solana', value: 10 },
  { name: 'USDC', value: 15 },
];

const transactionHistory = [
  { id: 1, type: 'Deposit', asset: 'USDC', amount: 5000, date: '2023-12-01', status: 'Completed' },
  { id: 2, type: 'Purchase', asset: 'Bitcoin', amount: 0.25, date: '2023-12-02', status: 'Completed' },
  { id: 3, type: 'Purchase', asset: 'Ethereum', amount: 2.5, date: '2023-12-05', status: 'Completed' },
  { id: 4, type: 'Withdrawal', asset: 'USDC', amount: 1000, date: '2023-12-10', status: 'Completed' },
  { id: 5, type: 'Purchase', asset: 'Solana', amount: 20, date: '2023-12-15', status: 'Completed' },
];

const Dashboard = () => {
  const [username] = useState('John Smith');
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="reveal">
          <h1 className="heading-lg mb-6">
            Welcome back, <span className="text-gradient">{username}</span>
          </h1>
          <p className="text-lg text-foreground/80 mb-8 font-inter">
            Your digital asset portfolio dashboard provides a comprehensive overview of your investments.
          </p>
        </div>
      </section>

      {/* Portfolio Summary Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card reveal">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-foreground/60">Total Portfolio Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gradient">$52,487.25</div>
              <div className="flex items-center mt-2 text-green-500">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span className="text-sm">+12.5% (30d)</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card reveal">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-foreground/60">Monthly Yield</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$847.34</div>
              <div className="flex items-center mt-2 text-green-500">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span className="text-sm">+2.1% (30d)</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card reveal">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-foreground/60">Current Holdings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">4 Assets</div>
              <div className="flex items-center mt-2 text-foreground/60">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm">Last updated: 5 min ago</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Performance Chart */}
          <div className="lg:col-span-2">
            <Card className="glass-card reveal">
              <CardHeader>
                <CardTitle>Portfolio Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#FFD700" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Asset Allocation */}
          <div>
            <Card className="glass-card h-full reveal">
              <CardHeader>
                <CardTitle>Asset Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={assetAllocation} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" />
                      <Tooltip />
                      <Bar dataKey="value" fill="#FFD700" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 space-y-2">
                  {assetAllocation.map((asset) => (
                    <div key={asset.name} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-gold mr-2"></div>
                        <span>{asset.name}</span>
                      </div>
                      <span>{asset.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Transaction History */}
        <Card className="glass-card reveal">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Transaction History</CardTitle>
            <Button variant="outline" size="sm" className="border-gold text-gold hover:bg-gold hover:text-background">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4">Type</th>
                    <th className="text-left py-3 px-4">Asset</th>
                    <th className="text-left py-3 px-4">Amount</th>
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionHistory.map((transaction) => (
                    <tr key={transaction.id} className="border-b border-border hover:bg-secondary/20">
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          {transaction.type === 'Deposit' && <ArrowDown className="h-4 w-4 text-green-500 mr-2" />}
                          {transaction.type === 'Withdrawal' && <ArrowUp className="h-4 w-4 text-red-500 mr-2" />}
                          {transaction.type === 'Purchase' && <DollarSign className="h-4 w-4 text-gold mr-2" />}
                          {transaction.type}
                        </div>
                      </td>
                      <td className="py-3 px-4">{transaction.asset}</td>
                      <td className="py-3 px-4">{transaction.amount} {transaction.asset}</td>
                      <td className="py-3 px-4">{new Date(transaction.date).toLocaleDateString()}</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-background"
          >
            Deposit Funds
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-background"
          >
            Withdraw Funds
            <ArrowUp className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
