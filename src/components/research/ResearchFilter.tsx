
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResearchFilterProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export const ResearchFilter = ({ activeFilter, setActiveFilter }: ResearchFilterProps) => {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'market-trends', label: 'Market Trends' },
    { id: 'institutional-adoption', label: 'Institutional Adoption' },
    { id: 'regulations', label: 'Regulations' }
  ];

  return (
    <div className="flex items-center flex-wrap gap-2">
      <span className="flex items-center text-foreground/70 mr-2">
        <Filter className="h-4 w-4 mr-1" /> Filter by:
      </span>
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          size="sm"
          className={activeFilter === filter.id 
            ? "bg-gold hover:bg-gold/90 text-background" 
            : "border-gold/50 text-foreground/70 hover:bg-gold/10"}
          onClick={() => setActiveFilter(filter.id)}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};
