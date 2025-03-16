
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

export const DigitizeAssets = () => {
  const navigate = useNavigate();
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <h2 className="heading-lg mb-6">
            <span>Digitize your </span>
            <span className="text-blue">assets today</span>
          </h2>
          <p className="text-lg text-foreground/80 font-inter mb-8 max-w-xl">
            Learn how you can launch new products, unlock new markets, and automate the asset lifecycle.
          </p>
          <Button 
            size="lg" 
            className={`${isDarkMode ? 'bg-[#A5D6A7] text-black hover:bg-[#A5D6A7]/90' : 'bg-blue text-background hover:bg-blue/90'}`}
            onClick={() => navigate('/contact')}
          >
            Speak with an expert
          </Button>
        </div>
        
        <div className="hidden md:block relative h-96 overflow-hidden rounded-xl reveal">
          {/* Customer support agent image */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue/30 to-transparent mix-blend-overlay"></div>
          <img 
            src="/lovable-uploads/03cd5d5c-814d-4820-9757-ef8fb2bb19f7.png" 
            alt="Customer support agent with headset" 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to placeholder if image doesn't load
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158";
              target.onerror = null; // Prevent infinite loop
            }}
          />
          
          {/* Overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue/10 to-transparent"></div>
          
          {/* Accent elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-blue/30 to-transparent blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-gradient-to-l from-blue/20 to-transparent blur-xl"></div>
        </div>
      </div>
    </section>
  );
};
