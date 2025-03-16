
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
        
        <div className="hidden md:block relative h-96 reveal">
          {/* Geometric pattern */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4 opacity-70">
            {Array.from({ length: 36 }).map((_, i) => (
              <div 
                key={i} 
                className={`rounded-lg transform ${i % 3 === 0 ? 'bg-blue/20' : i % 4 === 0 ? 'bg-blue/40' : 'bg-blue/10'} 
                ${i % 5 === 0 ? 'scale-90' : ''} ${i % 7 === 0 ? 'rotate-12' : ''}`}
              />
            ))}
          </div>
          
          {/* Futuristic grid */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue/10 to-transparent">
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={`line-h-${i}`} 
                  className="absolute w-full h-px bg-blue/20" 
                  style={{ top: `${(i + 1) * 10}%` }}
                />
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={`line-v-${i}`} 
                  className="absolute h-full w-px bg-blue/20" 
                  style={{ left: `${(i + 1) * 10}%` }}
                />
              ))}
            </div>
          </div>
          
          {/* Accent elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-blue/30 to-transparent blur-xl" />
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-gradient-to-l from-blue/20 to-transparent blur-xl" />
        </div>
      </div>
    </section>
  );
};
