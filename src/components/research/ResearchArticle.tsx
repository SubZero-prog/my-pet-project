
import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Clock, ArrowRightCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResearchArticleProps {
  category: string;
  title: string;
  image: string;
  date: string;
  readTime: string;
  icon?: ReactNode;
}

export const ResearchArticle = ({ category, title, image, date, readTime, icon }: ResearchArticleProps) => {
  return (
    <Card className="glass-card overflow-hidden hover-scale transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 bg-gold/90 text-background px-3 py-1 rounded-full text-xs font-semibold">
          {category}
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-foreground/60 text-sm">{date}</span>
          <span className="text-foreground/60 text-sm flex items-center">
            <Clock className="h-3 w-3 mr-1" /> {readTime}
          </span>
        </div>
        <h3 className="font-playfair text-xl font-semibold">{title}</h3>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="flex items-start space-x-4">
          {icon && <div>{icon}</div>}
          <p className="text-foreground/80 line-clamp-3">
            In-depth analysis on the latest trends and developments in the digital asset space, 
            providing key insights for institutional and retail investors.
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button variant="ghost" className="text-gold hover:text-gold/90 hover:bg-transparent p-0">
          Read Full Article
          <ArrowRightCircle className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
