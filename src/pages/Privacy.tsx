
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center reveal">
          <h1 className="heading-xl mb-6">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-10 font-inter">
            Our commitment to protecting your privacy and personal information.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="glass-card p-8 reveal">
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-foreground/80">
                At NexGen Assets, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </div>
            
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="text-foreground/80 mb-4">
                We may collect personal information that you provide to us, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                <li>Personal identification information (Name, email address, phone number, etc.)</li>
                <li>Financial information for investment accounts</li>
                <li>Profile information when you create an account</li>
                <li>Information you provide when you contact our support team</li>
                <li>Technical data such as your IP address, browser type, and operating system</li>
              </ul>
            </div>
            
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-foreground/80 mb-4">
                We may use the information we collect from you for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing transactions and managing your account</li>
                <li>Sending you technical notices, updates, and support messages</li>
                <li>Responding to your comments, questions, and requests</li>
                <li>Monitoring usage patterns and analyzing trends</li>
                <li>Protecting the security and integrity of our platform</li>
                <li>Complying with legal obligations and regulatory requirements</li>
              </ul>
            </div>
            
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4">4. Security of Your Information</h2>
              <p className="text-foreground/80">
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </div>
            
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-foreground/80">
                We may use cookies, web beacons, tracking pixels, and other tracking technologies on our website to help customize the website and improve your experience. By using the Site, you agree to be bound by our Cookie Policy.
              </p>
            </div>
            
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4">6. Third-Party Websites</h2>
              <p className="text-foreground/80">
                Our website may contain links to third-party websites and applications. We are not responsible for the privacy practices or the content of these third-party sites. We encourage you to read the privacy policies of every website you visit.
              </p>
            </div>
            
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4">7. Your Rights Regarding Your Data</h2>
              <p className="text-foreground/80 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to object to or restrict processing of your information</li>
                <li>The right to data portability</li>
              </ul>
            </div>
            
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
              <p className="text-foreground/80">
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date. You are advised to review this privacy policy periodically for any changes.
              </p>
            </div>
            
            <div>
              <h2 className="font-playfair text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-foreground/80">
                If you have questions or concerns about this privacy policy or our privacy practices, please contact us at privacy@nexgenassets.com.
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

export default Privacy;
