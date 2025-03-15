
import { ArrowRight, PieChart, Coins, DollarSign, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card';

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
            {/* Card 1 */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 reveal flex flex-col h-full">
              <CardHeader>
                <PieChart className="h-12 w-12 text-blue mb-2" />
                <CardTitle className="font-roboto text-xl font-semibold">
                  Crypto Index Funds
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">
                  Diversified exposure to the largest digital assets by market capitalization. Our professionally managed portfolios provide broad market coverage.
                </p>
              </CardContent>
              <CardFooter className="pt-4 mt-auto">
                <Button variant="outline" className="w-full border-blue text-blue hover:bg-blue hover:text-background">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
            
            {/* Card 2 */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 reveal flex flex-col h-full">
              <CardHeader>
                <Coins className="h-12 w-12 text-blue mb-2" />
                <CardTitle className="font-roboto text-xl font-semibold">
                  Direct Cryptocurrency Investments
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">
                  Secure and regulated access to individual digital assets. Invest directly in Bitcoin, Ethereum, and other leading cryptocurrencies.
                </p>
              </CardContent>
              <CardFooter className="pt-4 mt-auto">
                <Button variant="outline" className="w-full border-blue text-blue hover:bg-blue hover:text-background">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
            
            {/* Card 3 */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 reveal flex flex-col h-full">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-blue mb-2" />
                <CardTitle className="font-roboto text-xl font-semibold">
                  Stablecoin Yield Strategies
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">
                  Generate yield on USD-pegged stablecoins through our carefully vetted, institutional-grade lending platforms and protocols.
                </p>
              </CardContent>
              <CardFooter className="pt-4 mt-auto">
                <Button variant="outline" className="w-full border-blue text-blue hover:bg-blue hover:text-background">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
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
