
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const contactMethods = [
  {
    id: 1,
    title: 'Email Support',
    description: 'Get assistance via email. We typically respond within 24 hours on business days.',
    action: 'Email Us',
    icon: Mail,
    link: 'mailto:support@nexgenassets.com'
  },
  {
    id: 2,
    title: 'Phone Support',
    description: 'Speak directly with our client service team during business hours (9am-5pm EST).',
    action: 'Call Us',
    icon: Phone,
    link: 'tel:+18005551234'
  },
  {
    id: 3,
    title: 'Live Chat',
    description: 'Connect with our support team in real-time for immediate assistance with your questions.',
    action: 'Start Chat',
    icon: MessageSquare,
    link: '#chat'
  }
];

const Contact = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center reveal">
          <div>
            <h1 className="heading-lg mb-6">
              <span className="text-gradient">We're Here to Help</span> – Get in Touch
            </h1>
            <p className="text-lg text-foreground/80 mb-8 font-inter">
              Have questions about investing in digital assets? Our team is ready to assist you every step of the way.
            </p>
          </div>
          <div className="glass-card p-8 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop" 
              alt="Customer Support Team" 
              className="w-full h-auto rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-center mb-12">Contact Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <Card key={method.id} className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300 reveal">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <IconComponent className="h-12 w-12 text-gold mb-6" />
                    <h3 className="font-playfair text-xl font-semibold mb-4">{method.title}</h3>
                    <p className="text-foreground/80 mb-6">{method.description}</p>
                    <Button
                      className="bg-gold hover:bg-gold/90 text-background mt-auto"
                      onClick={() => window.location.href = method.link}
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-card p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 reveal">
          <div>
            <h2 className="heading-lg mb-6">Send Us a Message</h2>
            <p className="text-foreground/80 mb-8">
              Fill out the form below, and our team will get back to you as soon as possible. We're committed to providing you with the information and support you need.
            </p>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-gold" 
                  placeholder="Enter your name" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-gold" 
                  placeholder="Enter your email" 
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-gold" 
                  placeholder="What is your message about?" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-gold" 
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <Button
                className="bg-gold hover:bg-gold/90 text-background w-full"
                type="submit"
              >
                Submit Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-xl font-semibold mb-4">Office Location</h3>
              <p className="text-foreground/80">
                123 Financial District<br />
                New York, NY 10004<br />
                United States
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-semibold mb-4">Business Hours</h3>
              <p className="text-foreground/80">
                Monday - Friday: 9:00 AM - 5:00 PM EST<br />
                Saturday & Sunday: Closed
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-semibold mb-4">Frequently Asked Questions</h3>
              <p className="text-foreground/80 mb-4">
                Have a quick question? Our FAQ section might have the answer you're looking for.
              </p>
              <Button
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-background"
                onClick={() => navigate('/resources')}
              >
                View FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
