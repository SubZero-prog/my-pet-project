
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const jobOpenings = [
  {
    id: 1,
    title: 'Remote Assistant',
    department: 'Operations',
    location: 'Remote',
    type: 'Full-time',
    description: 'We\'re looking for a highly motivated remote assistant to support our growing team. This role will involve a range of administrative and operational tasks to help our business run smoothly.'
  },
  {
    id: 2,
    title: 'Blockchain Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our engineering team to build and maintain the infrastructure that powers our digital asset platform. Experience with blockchain technology and smart contracts required.'
  },
  {
    id: 3,
    title: 'Digital Asset Analyst',
    department: 'Research',
    location: 'Hybrid (New York)',
    type: 'Full-time',
    description: 'Help our research team analyze digital asset markets, identify trends, and produce high-quality reports for our clients. Strong analytical skills and cryptocurrency knowledge required.'
  },
  {
    id: 4,
    title: 'Marketing Specialist',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    description: 'Drive our marketing efforts across digital channels to reach new clients and educate the market about our products and services. Experience in fintech or crypto marketing preferred.'
  },
  {
    id: 5,
    title: 'Client Success Manager',
    department: 'Client Services',
    location: 'Remote',
    type: 'Full-time',
    description: 'Ensure our clients have an exceptional experience with our platform by providing support, education, and guidance on their investment journey.'
  }
];

const Careers = () => {
  const handleApply = (jobId: number) => {
    // Open Google Form application in a new tab
    window.open('https://forms.gle/W3ogyzztkRNvD8Em8', '_blank');
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center reveal">
          <h1 className="heading-xl mb-6">
            <span className="text-gradient">We're Hiring!</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-10 font-inter">
            Join our team of passionate professionals shaping the future of digital asset management. We're looking for talented individuals who share our vision.
          </p>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-card p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center reveal">
          <div>
            <h2 className="heading-lg mb-6">Our Culture</h2>
            <p className="text-foreground/80 mb-4">
              At NexGen Assets, we're building a team that values innovation, collaboration, and integrity. We believe in empowering our employees to make an impact and grow professionally.
            </p>
            <p className="text-foreground/80 mb-4">
              We offer competitive compensation, flexible work arrangements, continuous learning opportunities, and the chance to be part of a rapidly growing industry.
            </p>
            <p className="text-foreground/80">
              Our team comes from diverse backgrounds across finance, technology, and business, united by our mission to transform the digital asset landscape.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
              alt="Team Culture" 
              className="w-full h-auto rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-center mb-12">Open Positions</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-background rounded-lg overflow-hidden">
              <thead className="bg-gold text-background">
                <tr>
                  <th className="py-4 px-6 text-left">Position</th>
                  <th className="py-4 px-6 text-left">Department</th>
                  <th className="py-4 px-6 text-left">Location</th>
                  <th className="py-4 px-6 text-left">Type</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {jobOpenings.map((job) => (
                  <tr key={job.id} className="hover:bg-secondary/50 transition-colors duration-200">
                    <td className="py-4 px-6">
                      <div className="font-semibold">{job.title}</div>
                      <div className="text-sm text-foreground/70 mt-1">{job.description}</div>
                    </td>
                    <td className="py-4 px-6">{job.department}</td>
                    <td className="py-4 px-6">{job.location}</td>
                    <td className="py-4 px-6">{job.type}</td>
                    <td className="py-4 px-6 text-right">
                      <Button 
                        className="bg-gold hover:bg-gold/90 text-background"
                        onClick={() => handleApply(job.id)}
                      >
                        Apply Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="heading-lg text-center mb-12">Application Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 text-center reveal">
            <div className="bg-gold text-background w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Apply Online</h3>
            <p className="text-foreground/80">
              Submit your application through our online form. Include your resume and tell us why you're interested in joining NexGen Assets.
            </p>
          </div>
          <div className="glass-card p-8 text-center reveal">
            <div className="bg-gold text-background w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Interview Process</h3>
            <p className="text-foreground/80">
              Qualified candidates will be invited for interviews with our team. This typically includes 2-3 rounds of discussions.
            </p>
          </div>
          <div className="glass-card p-8 text-center reveal">
            <div className="bg-gold text-background w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Welcome Aboard</h3>
            <p className="text-foreground/80">
              Successful candidates will receive a job offer and join our team. We provide a comprehensive onboarding program to get you started.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
