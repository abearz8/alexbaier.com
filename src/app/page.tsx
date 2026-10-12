"use client"
import Particles from "../blocks/Backgrounds/Particles/Particles";
import RotatingText from "../blocks/TextAnimations/RotatingText/RotatingText";
import Navigation from "../blocks/Navigation/Navigation/Navigation";
import SectionHeader from "../blocks/Headers/SectionHeader/SectionHeader";
import ScrollToTop from "../blocks/Components/ScrollToTop/ScrollToTop";
import ExperienceList, { ExperienceItem } from "../blocks/Components/ExperienceStack/ExperienceList";
import AboutSkillsCerts from "@/blocks/Components/AboutSkillsCerts/AboutSkillsCerts";
import ContactMe from "@/blocks/Components/ContactMe/ContactMe";
import ProjectShowcase from "@/blocks/Components/ProjectShowcase/ProjectShowcase";
import EASection from "@/blocks/Components/EASection/EASection";

const experiences: ExperienceItem[] = [
  {
    title: "M&A Intern — Andromeda Group",
    company: "Constellation Software",
    start: "May 2026",
    end: "August 2026",
    description:
      "Analyzed 10K+ companies to identify M&A targets and built Python screening tools. Led AI enablement initiatives including an internal knowledge base and staff training. Selected for return offers on both the M&A and AI Enablement teams.",
    skills: ["M&A Analysis", "Python", "AI Enablement", "Business Development"],
    companyUrl: "https://www.csiandromeda.com/",
  },
  {
    title: "Assurance Summer Analyst",
    company: "BDO Canada",
    start: "May 2025",
    end: "August 2025",
    description:
      "Prepared financial compilations, reviews, and audits across 8 companies with varying market caps and industries. Built Power BI dashboards for Partners to evaluate client value, driving higher retention and fairer pricing.",
    skills: ["Audit Procedures", "Excel", "Power BI", "Client Communication"],
    companyUrl: "https://www.bdo.ca/services/audit-assurance",
  },
  {
    title: "Software and Business Analyst Intern",
    company: "Lakeside Psychological and Educational Services",
    start: "May 2024",
    end: "August 2024",
    description:
      "Developed and launched a customized business website, improving brand visibility. Directed deployment of enterprise networks on AWS using Route 53, S3, and WorkMail to meet business needs.",
    skills: ["AWS", "Web Development", "Route 53 / S3", "WorkMail"],
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
          speed={0.5}
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
        <div className="mt-2 sm:mt-10 flex justify-center">
        </div>
        <div className="h-screen flex items-center justify-center">
          <div className="w-[90vw] text-center">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <div className="text-white font-bold leading-tight font-inter tracking-tight" style={{ fontSize: 'min(8vw, 6rem)' }}>
                 Hi, my name&apos;s Alex!<br />
               </div>
               <div className="w-full h-4 sm:h-6 md:h-8"></div>
               <div className="text-white font-bold leading-tight font-inter tracking-tight" style={{ fontSize: 'min(8vw, 6rem)' }}>
                 I&apos;m a 
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
            <div className="mt-0 sm:mt-20 flex justify-center">
            </div>

            
            {/* Scroll Down Arrow */}
            <div className="mt-12 sm:mt-16 flex justify-center">
              <button 
                onClick={() => {
                  const nextSection = document.getElementById('about');
                  if (nextSection) {
                    const elementPosition = nextSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - 80; 
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="text-white font-bold font-inter transition-transform hover:scale-110 hover:text-purple-300 focus:outline-none p-3"
                style={{ fontSize: 'min(4vw, 3rem) sm:min(6vw, 3rem)' }}
                aria-label="Scroll to next section"
              >
                <svg 
                  width="50" 
                  height="50" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="animate-bounce sm:w-[70px] sm:h-[70px]"
                  style={{ animationDuration: '2s' }}
                >
                  <path d="M7 13l5 5 5-5"/>
                  <path d="M7 6l5 5 5-5"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden sm:block mb-18"></div>
        
        {/* Navigation */}
        <Navigation />
        
        {/* About Me Section */}
        <div id="about" className="mb-20 sm:mb-36">
          <div className="container mx-auto px-4 py-6">
          <SectionHeader className="text-7xl">About Me</SectionHeader>
          <div className="mt-16">
            <AboutSkillsCerts
              blurb="I'm a Data Science and Ivey Business student at Western University with experience building and deploying AI-powered products and automation tools. I enjoy working at the intersection of business and technology, using Python, TypeScript, SQL, and AWS to turn real problems into practical, scalable solutions."
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
                  logoSrc: "/logos/aws-ai.png",
                  borderedLogoSrc: "/logos/aws-ai-bordered.png",
                },
                {
                  title: "AWS Certified Cloud Practitioner",
                  href: "https://www.credly.com/badges/eb74cee7-e130-47df-bba9-e018b839dc74/public_url",        
                  logoSrc: "/logos/aws-cloud.png",
                  borderedLogoSrc: "/logos/aws-cloud-bordered.png",
                },
              ]}
            />
            </div>
          </div>
        </div>

        {/* Experiences Section */}
        <div id="experiences" className="mb-20 sm:mb-36">
          <div className="container mx-auto px-4 py-6">
            <SectionHeader className="text-7xl">Experiences</SectionHeader>
            
            {/* Experience Cards */}
            <div className="mt-16">
              <ExperienceList 
                items={experiences} 
              />
            </div>
          </div>
        </div>
        
        {/* School Involvement Section */}
        <div id="school" className="mb-20 sm:mb-36">
          <div className="container mx-auto px-4 py-6">
            <SectionHeader className="text-7xl">School Involvement</SectionHeader>
            <div className="mt-16">
              <EASection
                extracurriculars={[
                  {
                    org: "Associate Vice President",
                    position: "Western University Students' Council",
                    description:
                      "3 years on the USC executive team. Currently overseeing the Student Services portfolio as AVP. Previously as Grants & Recognition Coordinator, allocated $100K in club grants and $15K in student awards supporting 200+ organizations.",
                    logoSrc: "/USC_logo.png",
                  },
                  {
                    org: "Programming Assistant",
                    position: "Western University Orientation",
                    description:
                      "Plans Orientation Week for 5,500 students across 12 buildings and leads a team of 45 Sophs through training and O-Week. Returning for a 3rd year as an Orientation Leader (Soph), mentoring first-year students through their transition to university.",
                    logoSrc: "/logos/Western.png",
                  },
                  {
                    org: "Arbitrage Analyst",
                    position: "Mustang Capital",
                    description:
                      "Completed technical financial training and contributed to the Arbitrage portfolio. Researched and evaluated market opportunities, helping deploy ~$40K across diverse markets while developing core skills in quantitative analysis and portfolio management.",
                    logoSrc: "/logos/Ivey.png",
                  },
                ]}
                awards={[
                  {
                    title: "National Presidents Scholarship",
                    description: "Recognized for outstanding academic achievement and leadership at Western University ($50,000).",
                    iconSrc: "/logos/Western.png",
                  },
                  {
                    title: "Dean's Honour List",
                    description: "Achieved a 3.93 / 4.0 (91%) BSc average and 3.8 / 4.0 (85%) HBA average across both programs.",
                    iconSrc: "/logos/Western.png",
                  },
                  {
                    title: "John R. Currie Award in Entrepreneurship",
                    description: "Entrepreneurial spirit, leadership, and community involvement at Ivey Business School ($8,000).",
                    iconSrc: "/logos/Ivey.png",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        
        {/* Projects Section */}
        <div id="projects" className="mb-20 sm:mb-36">
          <div className="container mx-auto px-4 py-6">
            <SectionHeader className="text-7xl">Projects</SectionHeader>
            <div className="mt-16">
              <ProjectShowcase
                title="Kyber"
                description="iOS app for students that brings courses, deadlines, and study time into one clear plan. Cofounding and building Kyber to make first year less guesswork and more growth."
                imageSrc="/projects/kyber.png"
                smallImageSrc="/projects/kyber.png"
                imageAlt="Kyber app screenshot"
                liveHref="https://learnkyber.com/"
                githubHref="https://learnkyber.com/"
                buttonText="Visit Site"
                align="right"
              />

              <ProjectShowcase
                title="Lakeside Website"
                description="Production site for Lakeside Psychological & Educational Services. Static HTML/CSS/JS (initially Webflow, finished by hand) hosted on AWS S3 with static-site config."
                imageSrc="/projects/lakeside.png"
                smallImageSrc="/projects/lakeside_small.png"
                imageAlt="LakesidePES Screenshot"
                liveHref="https://www.lakesidepes.ca/"
                githubHref="https://github.com/abearz8/lakesidepes.ca"
                align="left"
              />

              <ProjectShowcase
                title="Blackjack Game"
                description="Browser blackjack built with Next.js + TypeScript. Includes full blackjack rules with usable UI and a full set of requirements, design, and testing docs in the project Wiki."
                imageSrc="/projects/blackjack.png"
                smallImageSrc="/projects/blackjack_small.png"
                imageAlt="Blackjack app screenshot"
                liveHref="https://blackjack-cyan.vercel.app/"
                githubHref="https://github.com/abearz8/blackjack"
                align="right"
              />

              <ProjectShowcase
                title="Cookie Clicker Game"
                description="Browser idle clicker built with Next.js + TypeScript. Game state persists via localStorage and requirements, design, and testing docs can be found in the project Wiki."
                imageSrc="/projects/cookie_clicker.png"
                smallImageSrc="/projects/cookie_clicker_small.png"
                imageAlt="Cookie clicker app screenshot"
                liveHref="https://cookie-clicker-lovat.vercel.app/"
                githubHref="https://github.com/abearz8/cookie-clicker"
                align="left"
              />

              <ProjectShowcase
                title="Bonus: Guitar Covers"
                description="When I'm not coding, I'm learning guitar and making covers of songs that I like. Stay tuned for some piano too!"
                imageSrc="/projects/guitar.png"
                smallImageSrc="/projects/guitar_small.png"
                imageAlt="Guitar covers screenshot"
                liveHref="https://youtube.com/@alexbaier4963?si=--cGL31DNMLHaNhw"
                align="right"
                isLast={true}
              />
            </div>
          </div>
        </div>


        {/* Contact Me Section */}
        <div id="contact" className="mb-20 sm:mb-36">
          <div className="container mx-auto px-4 py-6">
            <SectionHeader className="text-7xl">Contact Me</SectionHeader>
            <div className="mt-16">
              <ContactMe 
                contacts={[
                  {
                    name: "LinkedIn",
                    href: "https://www.linkedin.com/in/alexanderbaier/",
                    icon: "/logos/linkedin.png"
                  },
                  {
                    name: "Email",
                    href: "mailto:alexbaier@gmail.com",
                    icon: "/logos/email.png"
                  },
                  {
                    name: "GitHub",
                    href: "https://github.com/abearz8",
                    icon: "/logos/github.png"
                  },
                  {
                    name: "Goodreads",
                    href: "https://goodreads.com/alexbaier",
                    icon: "/logos/goodreads.png"
                  }
                ]}
              />
            </div>
          </div>
        </div>

      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />

    </div>
  );
}
