
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center reveal">
          <h1 className="heading-xl mb-6">
            Terms and <span className="text-gradient">Conditions</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-10 font-inter">
            Please read these terms and conditions carefully before using our service.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="glass-card p-8 reveal">
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-foreground/80">
                Welcome to NexGen Assets. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use NexGen Assets' website if you do not accept all of the terms and conditions stated on this page.
              </p>
            </div>
            
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4">2. Investment Risks</h2>
              <p className="text-foreground/80">
                Digital assets involve significant risk and are not suitable for all investors. The value of digital assets can go up or down, and you could lose all of your investment. Past performance is not indicative of future results. Before investing, please consider your investment objectives, experience level, and risk tolerance.
              </p>
            </div>
            
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4">3. Intellectual Property Rights</h2>
              <p className="text-foreground/80">
                Unless otherwise stated, NexGen Assets and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
              </p>
            </div>
            
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4">4. Restrictions</h2>
              <p className="text-foreground/80">
                You are specifically restricted from:
              </p>
              <ul className="list-disc pl-6 mt-2 text-foreground/80 space-y-2">
                <li>Publishing any website material in any other media</li>
                <li>Selling, sublicensing, and/or otherwise commercializing any website material</li>
                <li>Publicly performing and/or showing any website material</li>
                <li>Using this website in any way that is or may be damaging to this website</li>
                <li>Using this website in any way that impacts user access to this website</li>
                <li>Using this website contrary to applicable laws and regulations, or in a way that causes, or may cause, harm to the website, or to any person or business entity</li>
              </ul>
            </div>
            
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4">5. Privacy Policy</h2>
              <p className="text-foreground/80">
                Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms, governs our collection, processing, and use of your information. By using our website and services, you consent to the terms of our Privacy Policy.
              </p>
            </div>
            
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-foreground/80">
                In no event shall NexGen Assets, nor any of its officers, directors, and employees, be liable for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort, or otherwise. NexGen Assets shall not be liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
              </p>
            </div>
            
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4">7. Governing Law</h2>
              <p className="text-foreground/80">
                These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>
            
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4">8. Changes to Terms</h2>
              <p className="text-foreground/80">
                NexGen Assets reserves the right to modify these terms and conditions at any time. When we do, we will revise the updated date at the bottom of this page. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
              </p>
            </div>
            
            <div className="border-t border-border pt-6">
              <p className="text-foreground/80 text-sm">
                Last updated: June 15, 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
