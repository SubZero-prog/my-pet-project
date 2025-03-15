
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, LineChart, ShieldCheck, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HiringModal } from '@/components/HiringModal';

const Index = () => {
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen">
      <Navbar />
      <HiringModal />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center reveal">
          <h1 className="heading-xl mb-6">
            The Future of
            <span className="text-gradient block mt-2">Digital Asset Management</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-10 font-inter">
            Secure, transparent, and innovative solutions for the next generation of investors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-blue hover:bg-blue/90 text-background"
              onClick={() => navigate('/investment-solutions')}
            >
              Start Investing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue text-blue hover:bg-blue hover:text-background"
              onClick={() => navigate('/research')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 reveal">
              <LineChart className="h-12 w-12 text-blue mb-6" />
              <h3 className="font-roboto text-xl font-semibold mb-4">
                Data-Driven Insights
              </h3>
              <p className="text-foreground/80">
                Access real-time market data and expert analysis to make informed investment decisions.
              </p>
            </div>
            
            <div className="glass-card p-8 reveal">
              <ShieldCheck className="h-12 w-12 text-blue mb-6" />
              <h3 className="font-roboto text-xl font-semibold mb-4">
                Enterprise Security
              </h3>
              <p className="text-foreground/80">
                Your assets are protected by institutional-grade security measures.
              </p>
            </div>
            
            <div className="glass-card p-8 reveal">
              <Lightbulb className="h-12 w-12 text-blue mb-6" />
              <h3 className="font-roboto text-xl font-semibold mb-4">
                Educational Resources
              </h3>
              <p className="text-foreground/80">
                Comprehensive learning materials to help you understand digital assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
