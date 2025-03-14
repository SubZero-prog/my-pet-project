
import { useState } from 'react';
import { Download, Mail, ArrowRight, TrendingUp, Building, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'market-trends', name: 'Market Trends' },
  { id: 'institutional', name: 'Institutional Adoption' },
  { id: 'regulations', name: 'Regulations' }
];

const articles = [
  {
    id: 1,
    title: 'The Future of DeFi: Opportunities and Challenges',
    excerpt: 'Decentralized Finance (DeFi) is reshaping the financial landscape. Explore the key trends and potential obstacles.',
    category: 'market-trends',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop',
    date: 'June 15, 2023'
  },
  {
    id: 2,
    title: 'Institutional Investors Entering the Crypto Space',
    excerpt: 'Major financial institutions are increasingly allocating resources to digital assets. What does this mean for the market?',
    category: 'institutional',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop',
    date: 'July 8, 2023'
  },
  {
    id: 3,
    title: 'Regulatory Developments in Digital Asset Markets',
    excerpt: 'A comprehensive analysis of recent regulatory changes affecting cryptocurrency markets globally.',
    category: 'regulations',
    image: 'https://images.unsplash.com/photo-1607944024060-0450380ddd33?q=80&w=1000&auto=format&fit=crop',
    date: 'August 22, 2023'
  },
  {
    id: 4,
    title: 'NFT Market Analysis: Beyond the Hype',
    excerpt: 'An in-depth look at the Non-Fungible Token (NFT) market, its sustainability, and future potential.',
    category: 'market-trends',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1000&auto=format&fit=crop',
    date: 'September 5, 2023'
  },
  {
    id: 5,
    title: 'Central Bank Digital Currencies: Implications for Crypto',
    excerpt: 'How will the development of CBDCs impact existing cryptocurrency markets and investment strategies?',
    category: 'regulations',
    image: 'https://images.unsplash.com/photo-1518544866330-31a8baf6de90?q=80&w=1000&auto=format&fit=crop',
    date: 'October 17, 2023'
  },
  {
    id: 6,
    title: 'Enterprise Blockchain Solutions: The Upcoming Wave',
    excerpt: 'Exploring how major corporations are implementing blockchain technology to improve efficiency and transparency.',
    category: 'institutional',
    image: 'https://images.unsplash.com/photo-1635236066449-5b0ebf2c9c78?q=80&w=1000&auto=format&fit=crop',
    date: 'November 30, 2023'
  }
];

const Research = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-secondary reveal">
        <div className="text-center">
          <h1 className="heading-xl mb-6">
            <span className="text-gradient">Stay Ahead</span> with the Latest Market Research
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-10 font-inter">
            Gain valuable insights into digital asset markets with our expert analysis and research reports.
          </p>
        </div>
      </section>

      {/* Featured Report Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-card p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center reveal">
          <div>
            <h2 className="heading-lg mb-4">2023 Digital Asset Market Report</h2>
            <p className="text-foreground/80 mb-6">
              Our comprehensive analysis of digital asset markets in 2023. This report covers key trends, institutional adoption, regulatory developments, and market outlook for the coming year.
            </p>
            <Button
              className="bg-gold hover:bg-gold/90 text-background"
            >
              Download Full Report
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="bg-background/50 p-4 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?q=80&w=1000&auto=format&fit=crop" 
              alt="2023 Market Report" 
              className="w-full h-auto rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <h2 className="heading-lg">Latest Articles & Insights</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={activeCategory === category.id 
                  ? "bg-gold text-background" 
                  : "border-gold text-gold hover:bg-gold hover:text-background"}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 reveal">
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  {article.category === 'market-trends' && <TrendingUp className="h-4 w-4 text-gold mr-2" />}
                  {article.category === 'institutional' && <Building className="h-4 w-4 text-gold mr-2" />}
                  {article.category === 'regulations' && <Scale className="h-4 w-4 text-gold mr-2" />}
                  <span className="text-xs text-foreground/60">{article.date}</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-foreground/80 mb-4">{article.excerpt}</p>
                <Button variant="link" className="text-gold p-0 h-auto">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-background"
          >
            Subscribe to Research Updates
            <Mail className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;
