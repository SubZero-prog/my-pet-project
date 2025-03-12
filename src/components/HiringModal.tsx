
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';

export const HiringModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('hasSeenHiringModal');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenHiringModal', 'true');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleViewPositions = () => {
    setIsOpen(false);
    navigate('/careers');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="glass-card">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl text-gradient">
            We're Hiring: Remote Assistant Position Available!
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-foreground/80 leading-relaxed">
            Join our growing team! We're looking for a highly motivated remote assistant. This is your chance to be part of an innovative digital asset management platform.
          </p>
          <div className="mt-6 flex justify-end space-x-4">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Maybe Later
            </Button>
            <Button 
              className="bg-gold hover:bg-gold/90 text-background"
              onClick={handleViewPositions}
            >
              View Open Positions
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
