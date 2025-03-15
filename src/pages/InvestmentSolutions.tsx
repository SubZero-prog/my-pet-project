
import { ArrowRight, PieChart, Coins, DollarSign, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const InvestmentSolutions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
          <div>
            <h1 className="heading-lg mb-6">
              <span className="text-gradient">Diversified Digital Asset</span> Investment Solutions
            </h1>
            <p className="text-lg text-foreground/80 mb-8 font-inter">
              Explore our range of institutional-grade investment products designed to provide diversified exposure to the digital asset ecosystem.
            </p>
          </div>
          <div className="bg-secondary p-6 rounded-lg glass-card">
            <PieChart className="w-full h-64 text-blue" />
            <p className="text-center text-sm text-foreground/60 mt-4">
              Sample asset allocation visualization
            </p>
          </div>
        </div>
      </section>

      {/* Investment Options Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-center mb-12">Investment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 hover:shadow-xl transition-all duration-300 reveal">
              <PieChart className="h-12 w-12 text-blue mb-6" />
              <h3 className="font-roboto text-xl font-semibold mb-4">
                Crypto Index Funds
              </h3>
              <p className="text-foreground/80 mb-6">
                Diversified exposure to the largest digital assets by market capitalization. Our professionally managed portfolios provide broad market coverage.
              </p>
              <Button variant="outline" className="mt-auto w-full border-blue text-blue hover:bg-blue hover:text-background">
                Learn More
              </Button>
            </div>
            
            <div className="glass-card p-8 hover:shadow-xl transition-all duration-300 reveal">
              <Coins className="h-12 w-12 text-blue mb-6" />
              <h3 className="font-roboto text-xl font-semibold mb-4">
                Direct Cryptocurrency Investments
              </h3>
              <p className="text-foreground/80 mb-6">
                Secure and regulated access to individual digital assets. Invest directly in Bitcoin, Ethereum, and other leading cryptocurrencies.
              </p>
              <Button variant="outline" className="mt-auto w-full border-blue text-blue hover:bg-blue hover:text-background">
                Learn More
              </Button>
            </div>
            
            <div className="glass-card p-8 hover:shadow-xl transition-all duration-300 reveal">
              <DollarSign className="h-12 w-12 text-blue mb-6" />
              <h3 className="font-roboto text-xl font-semibold mb-4">
                Stablecoin Yield Strategies
              </h3>
              <p className="text-foreground/80 mb-6">
                Generate yield on USD-pegged stablecoins through our carefully vetted, institutional-grade lending platforms and protocols.
              </p>
              <Button variant="outline" className="mt-auto w-full border-blue text-blue hover:bg-blue hover:text-background">
                Learn More
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <Button
              size="lg"
              className="bg-blue hover:bg-blue/90 text-background"
            >
              Explore Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue text-blue hover:bg-blue hover:text-background"
            >
              Talk to an Expert
              <MessageSquare className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestmentSolutions;
