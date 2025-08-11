"use client"
import Particles from "../blocks/Backgrounds/Particles/Particles";
import RotatingText from "../blocks/TextAnimations/RotatingText/RotatingText";
import Navigation from "../blocks/Navigation/Navigation/Navigation";
import SectionHeader from "../blocks/Headers/SectionHeader/SectionHeader";
import ScrollToTop from "../blocks/Components/ScrollToTop/ScrollToTop";
import ExperienceList, { ExperienceItem } from "../blocks/Components/ExperienceStack/ExperienceList";
import AboutSkillsCerts from "@/blocks/Components/AboutSkillsCerts/AboutSkillsCerts";

const experiences: ExperienceItem[] = [
  {
    title: "Grants and Recognition Coordinator",
    company: "University Students' Council",
    start: "September 2025",
    end: "Present",
    description:
      "Part time work - Lead a six person committee to manage the $100,000+ budget for student events and initiatives and deliberate on student awards.",
    skills: ["Team Leadership", "Grant Evaluation", "Communication"],
    companyUrl: "https://westernusc.ca/services/grants-and-recognition/",
  },
  {
    title: "Assurance Intern",
    company: "BDO Canada",
    start: "May 2025",
    end: "August 2025",
    description:
      "Managed client relationships and performed audit procedures in team settings to support accurate financial statements and compliance.",
    skills: ["Audit Procedures", "Excel", "Power BI", "Client Communication"],
    companyUrl: "https://www.bdo.ca/services/audit-assurance",
  },
  {
    title: "Software and Business Analyst",
    company: "Lakeside Psychological and Educational",
    start: "May 2024",
    end: "April 2025",
    description:
      "Built practice's digital foundation by deploying on AWS (site, storage, access), configuring professional email and domains, and setting up core office IT.",
    skills: ["AWS", "Email and Domain Admin", "Device Set Up", "Security Policies"],
    companyUrl: "https://www.lakesidepes.ca",
  }
];

export default function Home() {
  return (
    <div>
      <div className="fixed inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
        <Particles
          particleColors={['#8B5CF6']}
          particleCount={4000}
          particleSpread={80}
          speed={0.3}
          particleBaseSize={3000}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={true}
          className="absolute inset-0 pointer-events-none"
        />
        
        {/* Filter overlay to reduce particle visibility */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px] pointer-events-none"></div>
      </div>

      {/* Contents above background */}
      <div className="relative z-10">

        {/* Hero Section */}
        <div className="mt-10 flex justify-center">
        </div>
        <div className="h-screen flex items-center justify-center">
          <div className="w-[90vw] text-center">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <div className="text-white font-bold leading-tight font-inter tracking-tight" style={{ fontSize: 'min(8vw, 6rem)' }}>
                 Hi, my name's Alex!<br />
               </div>
               <div className="w-full h-4 sm:h-6 md:h-8"></div>
               <div className="text-white font-bold leading-tight font-inter tracking-tight" style={{ fontSize: 'min(8vw, 6rem)' }}>
                 I'm a 
               </div>
              <span className="inline-block w-[1vw]"></span>
              
              <RotatingText
                texts={['Data Scientist', 'Strategist', 'Developer', 'Innovator']}
                mainClassName="px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-6 lg:py-3 xl:px-6 xl:py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white overflow-hidden rounded-xl shadow-lg border border-white/20 font-bold font-inter leading-tight"
                style={{ fontSize: 'min(8vw, 6rem)' }}
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
              
            </div>
            <div className="mt-20 flex justify-center">
            </div>

            
            {/* Scroll Down Arrow */}
            <div className="mt-16 flex justify-center">
              <button 
                onClick={() => {
                  const nextSection = document.getElementById('about');
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-white font-bold font-inter transition-transform hover:scale-110 hover:text-purple-300 focus:outline-none p-3"
                style={{ fontSize: 'min(6vw, 3rem)' }}
                aria-label="Scroll to next section"
              >
                <svg 
                  width="70" 
                  height="70" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="animate-bounce"
                  style={{ animationDuration: '2s' }}
                >
                  <path d="M7 13l5 5 5-5"/>
                  <path d="M7 6l5 5 5-5"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <Navigation />
        
        {/* About Me Section */}
        <div id="about" className="pt-20 mb-36">
          <div className="container mx-auto px-4 py-16">
          <SectionHeader className="text-7xl">About Me</SectionHeader>
          <div className="pt-6">
            <AboutSkillsCerts
              blurb="I’m a 3rd-year Ivey + Data Science student who loves building practical software that bridges business and tech."
              languages={[
                { name: "Python", logoSrc: "/logos/python.png" },
                { name: "Jupyter", logoSrc: "/logos/jupyter.png" },
                { name: "Next.js", logoSrc: "/logos/nextjs.png" },
                { name: "TypeScript", logoSrc: "/logos/typescript.png" },
                { name: "Java", logoSrc: "/logos/java.png" },
                { name: "PostgreSQL", logoSrc: "/logos/sql.png" },
              ]}
              certs={[
                {
                  title: "AWS Certified AI Practitioner",
                  href: "https://www.credly.com/badges/50d92a93-f7cb-4200-9757-e92482e5c6cf/public_url",        
                  logoSrc: "/logos/CAI_Badge.png",
                },
                {
                  title: "AWS Certified Cloud Practitioner",
                  href: "https://www.credly.com/badges/eb74cee7-e130-47df-bba9-e018b839dc74/public_url",        
                  logoSrc: "/logos/CPP_Badge.png",
                },
              ]}
              cvHref="/Alex_Baer_CV.pdf"
            />
            </div>
          </div>
        </div>

        {/* Experiences Section */}
        <div id="experiences" className="mb-36">
          <div className="container mx-auto px-4 py-4">
            <SectionHeader className="text-7xl">Experiences</SectionHeader>
            
            {/* Experience Cards */}
            <div className="mt-16">
              <ExperienceList items={experiences} className="max-w-6xl mx-auto" />
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="mb-36">
          <div className="container mx-auto px-4 py-4">
            <SectionHeader className="text-7xl">Projects</SectionHeader>
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter text-center max-w-4xl mx-auto leading-relaxed">
              Here you can showcase your key projects, highlighting the technologies used, challenges overcome, and outcomes achieved. Include links to live demos, GitHub repositories, and detailed case studies.
            </p>
          </div>
        </div>

        {/* School Involvement Section */}
        <div id="school" className="mb-36">
          <div className="container mx-auto px-4 py-4">
            <SectionHeader className="text-7xl">School Involvement</SectionHeader>
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter text-center max-w-4xl mx-auto leading-relaxed">
              Highlight your academic achievements, extracurricular activities, leadership roles, and any research or special projects you've been involved with during your educational journey.
            </p>
          </div>
        </div>

        {/* Contact Me Section */}
        <div id="contact" className="mb-36">
          <div className="container mx-auto px-4 py-4">
            <SectionHeader className="text-7xl">Contact Me</SectionHeader>
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter text-center max-w-4xl mx-auto leading-relaxed">
              Get in touch! I'm always interested in new opportunities, collaborations, or just connecting with fellow professionals. Feel free to reach out through any of the channels below.
            </p>
          </div>
        </div>

      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />

    </div>
  );
}
