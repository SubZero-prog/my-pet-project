
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'The Future of DeFi: Opportunities and Challenges',
    description: 'Decentralized Finance (DeFi) is reshaping the financial landscape. Explore the key trends and potential obstacles.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop',
    date: 'June 15, 2023'
  },
  {
    id: 2,
    title: 'Institutional Investors Entering the Crypto Space',
    description: 'Major financial institutions are increasingly allocating resources to digital assets. What does this mean for the market?',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop',
    date: 'July 8, 2023'
  },
  {
    id: 3,
    title: 'Regulatory Developments in Digital Asset Markets',
    description: 'A comprehensive analysis of recent regulatory changes affecting cryptocurrency markets globally.',
    image: 'https://images.unsplash.com/photo-1607944024060-0450380ddd33?q=80&w=1000&auto=format&fit=crop',
    date: 'August 22, 2023'
  }
];

export const ArticlesInsight = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 reveal">
        <h2 className="heading-lg mb-4">Articles & Insight</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Stay informed with the latest trends and insights in the digital asset space.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Card 
            key={article.id} 
            className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 reveal flex flex-col h-full"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
              />
            </div>
            <CardContent className="p-6 flex flex-col flex-grow">
              <div className="mb-4">
                <p className="text-sm text-foreground/60 mb-2">{article.date}</p>
                <h3 className="font-roboto text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-foreground/80">{article.description}</p>
              </div>
              <div className="mt-auto pt-4">
                <Button 
                  variant="link" 
                  className="text-blue p-0 h-auto flex items-center"
                  onClick={() => navigate('/research')}
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
