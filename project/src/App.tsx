import React, { useEffect, useState } from 'react';
import { Github, Twitter, Instagram, Linkedin, Download, Mail, Phone, MapPin, ExternalLink, GraduationCap, Briefcase } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolioProjects = [
    {
      title: "Shopping Centre Website",
      description: "A unified platform that conglomerates multiple brands for browsing and purchasing.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tech: "React, Node.js, MongoDB"
    },
    {
      title: "College Info ChatBox",
      description: "An intelligent chatbot providing real-time support on admissions, courses, and events.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tech: "Python, NLP, React"
    },
    {
      title: "mPower Gym Website",
      description: "A fitness-focused website showcasing programs and inspiring healthy lifestyles.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tech: "React, Tailwind CSS"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio.</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className={`flex-1 space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h2 className="text-2xl">Hello, It's Me</h2>
              <h1 className="text-5xl md:text-6xl font-bold">Ganesh Kumar</h1>
              <h3 className="text-2xl">
                And I'm a <span className="text-cyan-400">Full Stack Developer</span>
              </h3>
            </div>
            
            <p className="text-gray-400 max-w-xl">
              Passionate frontend developer with a keen eye for creating beautiful and functional web experiences.
              Specialized in React and modern web technologies.
            </p>

            <div className="flex space-x-4">
              <a href="#https://github.com/Ganeshkumar26" className="social-icon">
                <Github size={20} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={20} />
              </a>
              <a href="#https://www.linkedin.com/in/ganesh-kumar-407a1a271" className="social-icon">
                <Linkedin size={20} />
              </a>
            </div>

            <button className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-full font-semibold 
                           flex items-center gap-2 hover:bg-cyan-300 transition-colors duration-300
                           shadow-lg shadow-cyan-400/20">
              <Download size={20} />
              Download CV
            </button>
          </div>

          {/* Right Content - Profile Image */}
          <div className={`flex-1 flex justify-center ${isVisible ? 'animate-float' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-cyan-400 rounded-full absolute 
                            blur-3xl opacity-20 animate-pulse"></div>
              <div className="w-72 h-72 md:w-96 md:h-96 relative">
                <img
                  src="https://i.imgur.com/jZAj7N9.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-cyan-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
               I am a dedicated and self-motivated 3rd Year Computer Science Engineering student passionate about Full Stack Development, Java, 
Python and IBM Cloud . With a strong foundation in programming and innovative project experience. I am eager to apply my technical 
and analytical skills to contribute meaningfully to an organization's objectives.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm constantly learning and adapting to new technologies, ensuring that I stay 
                at the forefront of web development trends and best practices.
              </p>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div>
                  <p><strong>Name:</strong> Ganesh Kumar</p>
                  <p><strong>Experience:</strong> Fresher</p>
                </div>
                <div>
                  <p><strong>Location:</strong> Mohali, Punjab</p>
                  <p><strong>Freelance:</strong> Available</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-cyan-400 mb-2">Fresher</h3>
                <p className="text-gray-300">Experience</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-cyan-400 mb-2">10+</h3>
                <p className="text-gray-300">Projects</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-cyan-400 mb-2">100+</h3>
                <p className="text-gray-300">Leetcode</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-cyan-400 mb-2">10+</h3>
                <p className="text-gray-300">Courses & Certification </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Experience & Education</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience Column */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center">
                  <Briefcase className="text-gray-900" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-cyan-400 pb-8">
                  <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-[9px] top-0"></div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold">Edunet Foundation (AICTE Collaboration)</h4>
                    <p className="text-cyan-400 mb-2">AI Development Program</p>
                    <p className="text-gray-300">AICTE Collaboration with focus on AI-driven solutions</p>
                    <ul className="text-gray-400 mt-2 space-y-2 list-disc list-inside">
                      <li>Worked on IBM Cloud to deploy and manage AI models</li>
                      <li>Developed a live chatbot to handle queries and provide information</li>
                    </ul>
                  </div>
                </div>
                <div className="relative pl-8 border-l-2 border-cyan-400 pb-8">
                  <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-[9px] top-0"></div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold">Skillible (AICTE Collaboration)</h4>
                    <p className="text-cyan-400 mb-2">Innovation Program</p>
                    <p className="text-gray-300">AICTE Collaboration with emphasis on innovative projects</p>
                    <ul className="text-gray-400 mt-2 space-y-2 list-disc list-inside">
                      <li>Explored cutting-edge AI technologies</li>
                      <li>Conducted research on medical science, culminating in a project</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Column */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-gray-900" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-cyan-400 pb-8">
                  <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-[9px] top-0"></div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold">B.Tech in Computer Science Engineering</h4>
                    <p className="text-cyan-400 mb-2">2022 - 2026</p>
                    <p className="text-gray-300">Chandigarh Group of College</p>
      
                  </div>
                </div>
                <div className="relative pl-8 border-l-2 border-cyan-400 pb-8">
                  <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-[9px] top-0"></div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold">12th (Non - Medical), CBSE</h4>
                    <p className="text-cyan-400 mb-2">2021</p>
                    <p className="text-gray-300">GMSSS Sec-22A Chandigarh</p>
                    
                  </div>
                </div>
                <div className="relative pl-8 border-l-2 border-cyan-400 pb-8">
                  <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-[9px] top-0"></div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold">10th CBSE</h4>
                    <p className="text-cyan-400 mb-2">2019</p>
                    <p className="text-gray-300">GMHS Sec-22C Chandigarh</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">HTML/CSS</span>
                  <span className="text-cyan-400">95%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[95%] bg-cyan-400 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">JavaScript</span>
                  <span className="text-cyan-400">90%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[90%] bg-cyan-400 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">React</span>
                  <span className="text-cyan-400">85%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[85%] bg-cyan-400 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">TypeScript</span>
                  <span className="text-cyan-400">80%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[80%] bg-cyan-400 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Node.js</span>
                  <span className="text-cyan-400">75%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[75%] bg-cyan-400 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">UI/UX Design</span>
                  <span className="text-cyan-400">70%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="h-full w-[70%] bg-cyan-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">My Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 p-6 space-y-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                    <p className="text-cyan-400">{project.tech}</p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-cyan-400 hover:text-cyan-300">
                        <Github size={20} />
                      </a>
                      <a href="#" className="text-cyan-400 hover:text-cyan-300">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center">
                  <Phone className="text-gray-900" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-300">+91 78376-79584</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center">
                  <Mail className="text-gray-900" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-300">ganeshkumar262003@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center">
                  <MapPin className="text-gray-900" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-300">Mohali,Punjab 140604</p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full bg-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              ></textarea>
              <button className="bg-cyan-400 text-gray-900 px-8 py-3 rounded-lg font-semibold 
                             hover:bg-cyan-300 transition-colors duration-300
                             shadow-lg shadow-cyan-400/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;