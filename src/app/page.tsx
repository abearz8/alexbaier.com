"use client"
import Particles from "../blocks/Backgrounds/Particles/Particles";
import Orb from "../blocks/Backgrounds/Orb/Orb";
import RotatingText from "../blocks/TextAnimations/RotatingText/RotatingText";
import Navigation from "../blocks/Navigation/Navigation/Navigation";
import SectionHeader from "../blocks/Headers/SectionHeader/SectionHeader";


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
        <div id="about" className="pt-20">
          <div className="container mx-auto px-4 py-16">
          <SectionHeader className="text-7xl">About Me</SectionHeader>
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter text-center max-w-4xl mx-auto leading-relaxed">
              Welcome to the next section of my portfolio! This is where you can add more content about yourself, your projects, or any other sections you'd like to include.
            </p>
          </div>
        </div>

        {/* Experiences Section */}
        <div id="experiences" className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <SectionHeader className="text-7xl">Experiences</SectionHeader>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Experience Card 1 */}
                <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-white text-2xl font-bold font-inter mb-2">
                    Software Engineer
                  </h3>
                  <p className="text-purple-300 font-inter mb-2">Tech Company • 2022 - Present</p>
                  <p className="text-white/80 font-inter leading-relaxed">
                    Developed scalable web applications using modern technologies. Led team projects and mentored junior developers.
                  </p>
                </div>

                {/* Experience Card 2 */}
                <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-white text-2xl font-bold font-inter mb-2">
                    Data Scientist
                  </h3>
                  <p className="text-purple-300 font-inter mb-2">Analytics Firm • 2020 - 2022</p>
                  <p className="text-white/80 font-inter leading-relaxed">
                    Built machine learning models and data pipelines. Analyzed large datasets to drive business decisions.
                  </p>
                </div>

                {/* Experience Card 3 */}
                <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-white text-2xl font-bold font-inter mb-2">
                    Frontend Developer
                  </h3>
                  <p className="text-purple-300 font-inter mb-2">Startup • 2019 - 2020</p>
                  <p className="text-white/80 font-inter leading-relaxed">
                    Created responsive user interfaces and improved user experience. Collaborated with design and backend teams.
                  </p>
                </div>

                {/* Experience Card 4 */}
                <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-white text-2xl font-bold font-inter mb-2">
                    Research Assistant
                  </h3>
                  <p className="text-purple-300 font-inter mb-2">University • 2018 - 2019</p>
                  <p className="text-white/80 font-inter leading-relaxed">
                    Conducted research in computer science. Published papers and presented findings at conferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <SectionHeader className="text-7xl">Projects</SectionHeader>
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter text-center max-w-4xl mx-auto leading-relaxed">
              Here you can showcase your key projects, highlighting the technologies used, challenges overcome, and outcomes achieved. Include links to live demos, GitHub repositories, and detailed case studies.
            </p>
          </div>
        </div>

        {/* School Involvement Section */}
        <div id="school" className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <SectionHeader className="text-7xl">School Involvement</SectionHeader>
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter text-center max-w-4xl mx-auto leading-relaxed">
              Highlight your academic achievements, extracurricular activities, leadership roles, and any research or special projects you've been involved with during your educational journey.
            </p>
          </div>
        </div>

        {/* Contact Me Section */}
        <div id="contact" className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <SectionHeader className="text-7xl">Contact Me</SectionHeader>
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter text-center max-w-4xl mx-auto leading-relaxed">
              Get in touch! I'm always interested in new opportunities, collaborations, or just connecting with fellow professionals. Feel free to reach out through any of the channels below.
            </p>
          </div>
        </div>

      </div>


    </div>
  );
}
