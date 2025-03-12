
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, Filter, Mail, ArrowRight, TrendingUp, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ResearchArticle } from '@/components/research/ResearchArticle';
import { ResearchFilter } from '@/components/research/ResearchFilter';
import { ResearchReport } from '@/components/research/ResearchReport';
import { toast } from '@/components/ui/use-toast';

const Research = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  useEffect(() => {
    const revealSections = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, { threshold: 0.1 });

    revealSections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleDownloadReport = () => {
    toast({
      title: "Download Started",
      description: "Your report is being prepared for download.",
    });
  };

  const handleSubscribe = () => {
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our research updates soon.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-slate-900 text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center reveal">
          <h1 className="heading-xl mb-6 text-white">
            Stay Ahead with the Latest <span className="text-gradient">Market Research</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 font-inter">
            Gain valuable insights from our expert analysts to make informed investment decisions in the digital asset space.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-background"
              onClick={handleDownloadReport}
            >
              Download Full Report
              <Download className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-background"
              onClick={handleSubscribe}
            >
              Subscribe to Research Updates
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Report Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto reveal">
          <ResearchReport />
        </div>
      </section>

      {/* Research Articles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 reveal">
            <h2 className="heading-lg mb-6 md:mb-0">Latest <span className="text-gradient">Articles & Insights</span></h2>
            <ResearchFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
            <ResearchArticle 
              category="Market Trends"
              title="The Future of Institutional Blockchain Adoption"
              image="/placeholder.svg"
              date="May 28, 2023"
              readTime="8 min read"
              icon={<TrendingUp className="h-10 w-10 text-gold" />}
            />
            <ResearchArticle 
              category="Institutional Adoption"
              title="How Banks Are Embracing Digital Asset Custody"
              image="/placeholder.svg"
              date="May 22, 2023"
              readTime="6 min read"
              icon={<Globe className="h-10 w-10 text-gold" />}
            />
            <ResearchArticle 
              category="Regulations"
              title="Navigating the New Regulatory Landscape for Crypto"
              image="/placeholder.svg"
              date="May 15, 2023"
              readTime="10 min read"
              icon={<Shield className="h-10 w-10 text-gold" />}
            />
            <ResearchArticle 
              category="Market Trends"
              title="Digital Assets: Portfolio Diversification Strategies"
              image="/placeholder.svg"
              date="May 10, 2023"
              readTime="7 min read"
              icon={<TrendingUp className="h-10 w-10 text-gold" />}
            />
            <ResearchArticle 
              category="Institutional Adoption"
              title="Enterprise Blockchain Solutions: Beyond Cryptocurrencies"
              image="/placeholder.svg"
              date="May 5, 2023"
              readTime="9 min read"
              icon={<Globe className="h-10 w-10 text-gold" />}
            />
            <ResearchArticle 
              category="Regulations"
              title="Global Regulatory Frameworks for Digital Assets"
              image="/placeholder.svg"
              date="May 1, 2023"
              readTime="8 min read"
              icon={<Shield className="h-10 w-10 text-gold" />}
            />
          </div>
          
          <div className="text-center mt-12 reveal">
            <Button 
              className="bg-gold hover:bg-gold/90 text-background"
              onClick={() => navigate('/resources')}
            >
              View Educational Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;
