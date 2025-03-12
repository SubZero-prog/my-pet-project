
import { ArrowRight, Download, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

export const ResearchReport = () => {
  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your Q2 2023 Digital Asset Market Report is being prepared for download.",
    });
  };

  return (
    <div className="bg-background/50 backdrop-blur-lg border border-border/50 rounded-lg overflow-hidden shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 lg:p-12">
          <div className="mb-2 text-gold font-semibold text-sm uppercase tracking-wide">
            Featured Report
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Q2 2023 Digital Asset Market Report
          </h2>
          <p className="text-foreground/80 mb-6">
            Our comprehensive analysis of digital asset markets, investment trends, 
            and regulatory developments for the second quarter of 2023. This report provides 
            strategic insights for institutional investors navigating the evolving 
            blockchain landscape.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="h-8 w-8 bg-gold/10 rounded-full flex items-center justify-center mt-1">
                <LineChart className="h-4 w-4 text-gold" />
              </div>
              <div>
                <h4 className="font-playfair font-semibold">Market Performance Analysis</h4>
                <p className="text-foreground/70 text-sm">
                  Detailed performance metrics of top digital assets with comparative analysis.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="h-8 w-8 bg-gold/10 rounded-full flex items-center justify-center mt-1">
                <LineChart className="h-4 w-4 text-gold" />
              </div>
              <div>
                <h4 className="font-playfair font-semibold">Institutional Investment Flows</h4>
                <p className="text-foreground/70 text-sm">
                  Tracking capital movements from traditional finance to digital assets.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="h-8 w-8 bg-gold/10 rounded-full flex items-center justify-center mt-1">
                <LineChart className="h-4 w-4 text-gold" />
              </div>
              <div>
                <h4 className="font-playfair font-semibold">Regulatory Landscape Updates</h4>
                <p className="text-foreground/70 text-sm">
                  Summary of global regulatory developments affecting digital asset investments.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-gold hover:bg-gold/90 text-background"
              onClick={handleDownload}
            >
              Download Report
              <Download className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-background"
            >
              View Executive Summary
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-black to-slate-900 hidden lg:flex items-center justify-center p-12">
          <img 
            src="/placeholder.svg" 
            alt="Q2 2023 Digital Asset Market Report" 
            className="max-w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};
