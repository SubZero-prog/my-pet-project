
import { cn } from '@/lib/utils';

// Array of partner logos with their names and image paths
const partners = [
  { name: 'Bloomberg', logo: '/partners/bloomberg.svg' },
  { name: 'Chainlink', logo: '/partners/chainlink.svg' },
  { name: 'Eurex', logo: '/partners/eurex.svg' },
  { name: 'Pyth', logo: '/partners/pyth.svg' },
  { name: 'Wilshire', logo: '/partners/wilshire.svg' },
  { name: 'Messari', logo: '/partners/messari.svg' },
  { name: 'Coinbase', logo: '/partners/coinbase.svg' },
  { name: 'Binance', logo: '/partners/binance.svg' },
];

// Placeholder SVG for partner logos that aren't available yet
const PlaceholderLogo = ({ name, className }: { name: string; className?: string }) => (
  <div className={cn("flex items-center justify-center p-4", className)}>
    <svg 
      className="w-full h-8 text-white"
      viewBox="0 0 170 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="170" height="40" rx="4" fill="currentColor" fillOpacity="0.1" />
      <text 
        x="85" 
        y="25" 
        fontFamily="Roboto, sans-serif" 
        fontSize="14" 
        fill="currentColor" 
        textAnchor="middle"
      >
        {name}
      </text>
    </svg>
  </div>
);

export const TrustedByPartners = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue to-blue/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-roboto text-3xl font-bold text-white mb-12">
          Trusted By
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors duration-200"
            >
              <PlaceholderLogo name={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
