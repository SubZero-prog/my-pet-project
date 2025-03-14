
import { Shield, Key, FileText, Lock, Server, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const securityFeatures = [
  {
    id: 1,
    title: 'Cold Storage Solutions',
    description: 'The majority of our digital assets are stored in air-gapped, offline environments, protected from unauthorized access and cyber threats.',
    icon: Server
  },
  {
    id: 2,
    title: 'Multi-Factor Authentication',
    description: 'All accounts require multiple forms of verification before any transaction or withdrawal can be processed.',
    icon: Key
  },
  {
    id: 3,
    title: 'Regulatory Compliance',
    description: 'We adhere to the highest standards of regulatory compliance across multiple jurisdictions to ensure legal protection for our clients.',
    icon: FileText
  },
  {
    id: 4,
    title: 'Advanced Encryption',
    description: 'All data transmitted through our platform is protected with military-grade encryption technology.',
    icon: Lock
  },
  {
    id: 5,
    title: 'Regular Security Audits',
    description: 'Our systems undergo rigorous security assessments by independent third-party experts to identify and address potential vulnerabilities.',
    icon: Shield
  },
  {
    id: 6,
    title: 'Insurance Coverage',
    description: 'Digital assets under our management are covered by comprehensive insurance policies against theft and other specified risks.',
    icon: ShieldCheck
  }
];

const Security = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center reveal">
          <Lock className="h-20 w-20 text-gold mx-auto mb-6" />
          <h1 className="heading-xl mb-6">
            <span className="text-gradient">Institutional-Grade</span> Security & Compliance
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-10 font-inter">
            Your assets deserve the highest level of protection. Learn how we safeguard your investments with state-of-the-art security measures.
          </p>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-center mb-12">Our Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <Card key={feature.id} className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300 reveal">
                  <CardContent className="p-8">
                    <IconComponent className="h-12 w-12 text-gold mb-6" />
                    <h3 className="font-playfair text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-foreground/80">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button
              className="bg-gold hover:bg-gold/90 text-background"
              onClick={() => navigate('/terms')}
            >
              View Our Policies
              <FileText className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Security Commitment Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-card p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
          <div>
            <h2 className="heading-lg mb-6">Our Commitment to Security</h2>
            <p className="text-foreground/80 mb-4">
              At NexGen Assets, security is not just a feature—it's the foundation of everything we do. We implement multiple layers of protection to ensure your digital assets remain safe at all times.
            </p>
            <p className="text-foreground/80 mb-4">
              Our security team consists of experts from cybersecurity, financial security, and blockchain technology fields who constantly monitor and enhance our security protocols.
            </p>
            <p className="text-foreground/80">
              We believe that institutional-grade security should be available to all investors, regardless of portfolio size. That's why we apply the same rigorous standards across all accounts.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/20 rounded-lg blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop" 
              alt="Security Commitment" 
              className="relative w-full h-auto rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;
