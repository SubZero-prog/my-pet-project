
import { PlayCircle, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

const videos = [
  {
    id: 1,
    title: 'Crypto Investing 101',
    duration: '12:34',
    thumbnail: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Understanding Blockchain Technology',
    duration: '15:21',
    thumbnail: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Digital Asset Portfolio Management',
    duration: '18:45',
    thumbnail: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Secure Storage Solutions for Crypto',
    duration: '09:56',
    thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop'
  }
];

const guides = [
  {
    id: 1,
    title: 'Beginner\'s Guide to Cryptocurrency',
    description: 'A comprehensive introduction to digital assets for new investors.',
    icon: '📚'
  },
  {
    id: 2,
    title: 'Security Best Practices',
    description: 'Essential security measures to protect your digital assets.',
    icon: '🔒'
  },
  {
    id: 3,
    title: 'Understanding Digital Asset Tax Implications',
    description: 'A guide to navigating tax considerations for cryptocurrency investments.',
    icon: '📝'
  },
  {
    id: 4,
    title: 'DeFi Investment Strategies',
    description: 'Exploring various approaches to decentralized finance investments.',
    icon: '📈'
  },
  {
    id: 5,
    title: 'NFTs Explained',
    description: 'Everything you need to know about non-fungible tokens.',
    icon: '🖼️'
  },
  {
    id: 6,
    title: 'Institutional Investment in Digital Assets',
    description: 'How traditional financial institutions are approaching cryptocurrency.',
    icon: '🏢'
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
          <div>
            <h1 className="heading-lg mb-6">
              <span className="text-gradient">Learn Everything</span> About Crypto & Digital Asset Investments
            </h1>
            <p className="text-lg text-foreground/80 mb-8 font-inter">
              Enhance your understanding of digital assets with our comprehensive educational resources, designed for investors at all experience levels.
            </p>
          </div>
          <div className="glass-card p-8 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1607798748738-b15199a9c3bd?q=80&w=1000&auto=format&fit=crop" 
              alt="Digital Asset Education" 
              className="w-full h-auto rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Video Learning Hub */}
            <div>
              <h2 className="heading-lg mb-8">Video Learning Hub</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {videos.map((video) => (
                  <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 reveal">
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-48 object-cover" 
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <PlayCircle className="h-16 w-16 text-gold" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-playfair text-base font-semibold">{video.title}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8">
                <Button
                  className="bg-gold hover:bg-gold/90 text-background"
                >
                  Watch Tutorials
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Beginner's Guide */}
            <div>
              <h2 className="heading-lg mb-8">Beginner's Guide</h2>
              <div className="space-y-4">
                {guides.map((guide) => (
                  <div key={guide.id} className="p-4 bg-background rounded-lg flex items-start gap-4 hover:shadow-md transition-shadow duration-300 reveal">
                    <div className="text-2xl">{guide.icon}</div>
                    <div>
                      <h3 className="font-playfair text-lg font-semibold mb-1">{guide.title}</h3>
                      <p className="text-foreground/80 text-sm">{guide.description}</p>
                      <Button variant="link" className="text-gold p-0 h-auto mt-2">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-background"
                >
                  Download Guides
                  <Download className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
