
import { Sparkles, Users, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useNavigate } from 'react-router-dom';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'CEO & Founder',
    bio: 'Former Wall Street executive with 15+ years in traditional finance before transitioning to digital assets in 2016.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Chief Investment Officer',
    bio: 'Blockchain pioneer with experience in quantitative trading and digital asset portfolio management.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    title: 'Head of Research',
    bio: 'PhD in Economics with expertise in emerging financial technologies and market analysis.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'David Okafor',
    title: 'Chief Technology Officer',
    bio: 'Blockchain developer and security expert who previously led engineering teams at major tech companies.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop'
  }
];

const Company = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/70">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
            alt="Team" 
            className="w-full h-full object-cover mix-blend-overlay" 
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="heading-xl mb-6">
            About <span className="text-gradient">NexGen Assets</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-10 font-inter">
            Pioneering the future of digital asset management with security, transparency, and innovation.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
          <div>
            <h2 className="heading-lg mb-6">Our Mission & Vision</h2>
            <p className="text-foreground/80 mb-4">
              NexGen Assets was founded on the belief that digital assets represent the future of finance, and that everyone should have secure, transparent access to these innovative investment opportunities.
            </p>
            <p className="text-foreground/80 mb-4">
              Our mission is to bridge the gap between traditional finance and digital assets, providing institutional-grade investment solutions that are accessible to both individual and institutional investors.
            </p>
            <p className="text-foreground/80">
              We envision a future where digital assets are a core component of every well-diversified investment portfolio, and we're committed to making that vision a reality through education, innovation, and unwavering security standards.
            </p>
          </div>
          <div className="glass-card p-8 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 text-center">
                <Sparkles className="h-10 w-10 text-blue mx-auto mb-2" />
                <h3 className="font-roboto text-lg font-semibold mb-1">Innovation</h3>
                <p className="text-sm text-foreground/80">Pioneering new approaches to digital asset management</p>
              </div>
              <div className="p-4 text-center">
                <Users className="h-10 w-10 text-blue mx-auto mb-2" />
                <h3 className="font-roboto text-lg font-semibold mb-1">Accessibility</h3>
                <p className="text-sm text-foreground/80">Making digital assets available to all investors</p>
              </div>
              <div className="p-4 text-center">
                <BarChart className="h-10 w-10 text-blue mx-auto mb-2" />
                <h3 className="font-roboto text-lg font-semibold mb-1">Transparency</h3>
                <p className="text-sm text-foreground/80">Clear, honest reporting on all investments</p>
              </div>
              <div className="p-4 text-center">
                <Users className="h-10 w-10 text-blue mx-auto mb-2" />
                <h3 className="font-roboto text-lg font-semibold mb-1">Education</h3>
                <p className="text-sm text-foreground/80">Empowering investors with knowledge</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="leadership" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-center mb-12">Meet Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300 reveal">
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-roboto text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue font-medium mb-3">{member.title}</p>
                  <p className="text-foreground/80 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              className="bg-blue hover:bg-blue/90 text-white"
              onClick={() => navigate('/careers')}
            >
              Explore Job Openings
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company;
