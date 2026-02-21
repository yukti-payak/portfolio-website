
"use client";
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Home,
  BookOpen,
  Briefcase,
  User,
  Code2,
  ExternalLink,
  Send,
  CheckCircle,
  XOctagon,
  ArrowRight,
} from "lucide-react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

// Components
import StarBorder from "@/components/StarBorder";
import BlurText from "@/components/BlurText";
import DecryptedText from "@/components/DecryptedText";
import TextType from "@/components/TextType";
import LogoLoop from "@/components/LogoLoop";
import SpotlightCard from "@/components/SpotlightCard";
import ShinyText from "@/components/ShinyText";

function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState({
    visible: false,
    message: "",
    type: "success",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ visible: true, message, type });
    setTimeout(() => {
      setNotification({ visible: false, message: "", type: "success" });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAnimationComplete = () => {
    console.log("Animation finished!");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      showNotification("Message sent successfully!", "success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      showNotification("Failed to send message.", "error");
    }
  };

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Skills", href: "#skills", icon: BookOpen },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: User },
  ];

  const projectsData = [
    {
      title: "ZenTrade",
      subtitle: "Stock Trading Analytics",
      description: "Designed and developed a full-stack stock trading platform using the MERN stack, allowing users to place buy orders and track portfolio holdings through a fully responsive, feature-complete dashboard.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      githubLink: "https://github.com/yukti-payak/ZenTrade-Project",
      liveLink: "https://frontend-zeta-eight-43.vercel.app/",
    },
    {
      title: "TravelNest",
      subtitle: "Geo Enabled Property Listing",
      description: "Engineered a scalable property rental platform leveraging the MVC architectural pattern, providing users with intuitive property browsing, listing, and management capabilities.",
      tech: ["EJS", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/yukti-payak/TravelNest",
      liveLink: "https://travelnest-3rfk.onrender.com",
    },
  ];

  const skillsData = [
    { name: "React.js", icon: SiReact, color: "text-[#8D6E63]" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#3E2723]" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#5D4037]" },
    { name: "Express.js", icon: SiExpress, color: "text-[#4E342E]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#795548]" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-[#8D6E63]" },
    { name: "Git", icon: FaGitAlt, color: "text-[#3E2723]" },
  ];

  const techLogos = skillsData.map((skill) => ({
    node: <skill.icon className={`w-12 h-12 ${skill.color}`} />,
    title: skill.name,
    href: "#",
  }));

  const NotificationIcon = notification.type === "success" ? CheckCircle : XOctagon;

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#3E2723] font-sans selection:bg-[#8D6E63]/30 overflow-x-hidden">
      
      <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] p-4 rounded-xl text-white shadow-2xl transition-all duration-500 ${notification.visible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"} ${notification.type === "success" ? "bg-[#8D6E63]" : "bg-red-800"}`}>
        <div className="flex items-center gap-3">
          <NotificationIcon className="w-5 h-5" />
          <p className="text-sm font-medium">{notification.message}</p>
        </div>
      </div>

    
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 md:bottom-auto md:left-8 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-50">
        <div className="flex md:flex-col gap-4 p-3 rounded-3xl border border-[#3E2723]/10 bg-white/80 backdrop-blur-xl shadow-xl">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="p-3 rounded-2xl hover:bg-[#3E2723]/5 hover:text-[#8D6E63] transition-all group relative">
              <item.icon className="w-6 h-6 opacity-60 group-hover:opacity-100 text-[#3E2723]" />
              <span className="absolute left-16 bg-[#3E2723] text-[#FDFCF0] px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 hidden md:block transition-all whitespace-nowrap">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </nav>

      <main className="md:pl-28 lg:pl-36">
        
        <section id="home" className="min-h-[85vh] flex flex-col justify-center relative py-12 px-6 overflow-hidden">
          <div className="max-w-[1100px] mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className={`lg:col-span-7 order-2 lg:order-1 space-y-8 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[9px] font-bold tracking-[0.4em] uppercase text-[#8D6E63]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8D6E63] opacity-30"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#3E2723]"></span>
                  </span>
                  Mumbai, IN • Open for Opportunities
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#3E2723]/30 mb-2">
                    <TextType text={["Software Engineer"]} typingSpeed={75} loop={false} />
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] text-[#3E2723]">
                    <DecryptedText text="MERN Stack" speed={80} />
                    <span className="block text-[#8D6E63] font-light italic">Developer</span>
                  </h1>
                </div>
              </div>
              <div className="max-w-md border-l border-[#3E2723]/20 pl-6 py-1">
                <div className="text-[13px] md:text-sm text-[#3E2723]/60 font-medium leading-relaxed">
                  <BlurText text="Computer Engineering Graduate crafting end-to-end web solutions with refined precision and modern architectural standards." delay={100} />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-8 pt-2">
                <a href="https://drive.google.com/file/d/1MRfJoYls6vV_TwqpHkQkzdVk52OK3W4z/view?usp=drive_link" target="_blank">
                  <button className="relative px-8 py-3 bg-[#3E2723] text-[#FDFCF0] font-bold uppercase text-[10px] tracking-[0.25em] transition-all hover:bg-[#5D4037] hover:-translate-y-1 active:translate-y-0 shadow-md">
                    Get Resume
                  </button>
                </a>
                <div className="flex gap-5 items-center border-l border-[#3E2723]/10 pl-8">
                  {[
                    { icon: Github, href: "https://github.com/yukti-payak" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/yukti-payak18/" }
                  ].map((social, i) => (
                    <a key={i} href={social.href} target="_blank" className="text-[#3E2723]/30 hover:text-[#3E2723] transition-all hover:scale-110">
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
         
            <div className={`lg:col-span-5 order-1 lg:order-2 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
  <div className="relative aspect-square w-full max-w-[380px] mx-auto group">
    
    
    <div className="absolute -top-4 -right-4 w-full h-full border border-[#3E2723]/5 rounded-full transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
    
    
    <div className="relative w-full h-full overflow-hidden bg-white p-2 border border-[#3E2723]/10 rounded-full shadow-[0_20px_50px_rgba(62,39,35,0.1)]">
      <img 
        src="/me.png" 
        alt="Yukti Payak" 
        className="w-full h-full object-cover rounded-full grayscale-[0.2] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
      />
      
      
      <div className="absolute inset-4 border border-white/20 rounded-full pointer-events-none"></div> 
    </div>

    
    <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#8D6E63] rounded-tl-full"></div>
    <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#8D6E63] rounded-br-full"></div>
  </div>
</div>
          </div>
        </section>
        
        <section id="skills" className="py-20 px-6 border-t border-[#3E2723]/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/3 text-center md:text-left">
              <h2 className="text-[10px] font-bold tracking-[0.4em] text-[#8D6E63] uppercase mb-2">Capabilities</h2>
              <h3 className="text-2xl font-bold tracking-tight">Technical Stack</h3>
            </div>
            <div className="md:w-2/3 relative h-20 w-full opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <LogoLoop logos={techLogos} speed={100} fadeOut={true} fadeOutColor="#FDFCF0" />
            </div>
          </div>
        </section>

 <section id="projects" className="py-24 px-6 border-t border-[#3E2723]/10 bg-[#FDFCF0]">
  <div className="max-w-[1100px] mx-auto">
    
  
    <div className="mb-20 text-left lg:flex items-end justify-between">
      <div className="space-y-3">
        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#8D6E63]">
          <ShinyText text="Selected Works" speed={3} />
        </h2>
        <h3 className="text-3xl md:text-4xl font-black tracking-tight text-[#1A0F0E]">
          Featured Projects
        </h3>
      </div>
      <div className="hidden lg:block text-[10px] font-medium text-[#1A0F0E]/40 tracking-widest uppercase pb-1">
        © {new Date().getFullYear()} Portfolio
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      {projectsData.map((project) => (
        <div key={project.title} className="group h-full">
          <SpotlightCard 
            className="h-full rounded-3xl border border-[#3E2723]/20 bg-white overflow-hidden p-8 lg:p-12 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            spotlightColor="rgba(141, 110, 99, 0.1)"
          >
            <div className="flex flex-col h-full">
            
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#8D6E63] uppercase">
                  {project.subtitle}
                </span>
                <Code2 className="w-5 h-5 text-[#1A0F0E]/20" />
              </div>

              <div className="space-y-5 mb-8 flex-grow">
          
                <h3 className="text-3xl font-black text-[#8D6E63] group-hover:text-[#8D6E63] transition-colors leading-tight">
                  {project.title}
                </h3>
                
               
                <div className="text-[15px] text-[#8D6E63] leading-relaxed max-w-sm font-bold opacity-100">
                  {project.description}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-[9px] uppercase tracking-widest font-black px-3 py-1.5 bg-[#1A0F0E] text-[#FDFCF0] rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-[#3E2723]/10">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#FDFCF0]/60 hover:text-[#1A0F0E] transition-colors flex items-center gap-2 uppercase tracking-widest"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
                
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/btn flex items-center gap-2 px-6 py-3 bg-[#1A0F0E] text-[#FDFCF0] text-[11px] font-bold tracking-widest uppercase transition-all hover:bg-[#3E2723] shadow-md rounded-xl"
                >
                  Live Demo <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </SpotlightCard>
        </div>
      ))}
    </div>
  </div>
</section>
       
        <section id="contact" className="py-24 px-6 bg-white/30 border-t border-[#3E2723]/5">
          <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-[10px] font-bold tracking-[0.4em] text-[#8D6E63] uppercase">
                  <ShinyText text="Connect" speed={3} />
                </h2>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-[#3E2723] leading-none">
                  Let’s build <br/> something new.
                </h3>
              </div>
              <p className="text-sm text-[#3E2723]/60 max-w-sm leading-relaxed">
                Currently looking for new opportunities and engineering challenges. My inbox is always open.
              </p>
            </div>
            
            <div className="relative p-8 lg:p-12 border border-[#3E2723]/10 bg-white shadow-2xl shadow-[#3E2723]/5">
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#8D6E63]/30"></div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#3E2723]/40 ml-1">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-5 py-4 bg-[#FDFCF0] border border-[#3E2723]/5 outline-none focus:border-[#3E2723]/20 transition-all text-xs text-[#3E2723]" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#3E2723]/40 ml-1">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-5 py-4 bg-[#FDFCF0] border border-[#3E2723]/5 outline-none focus:border-[#3E2723]/20 transition-all text-xs text-[#3E2723]" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#3E2723]/40 ml-1">Message</label>
                  <textarea name="message" rows={4} value={formData.message} onChange={handleChange} required className="w-full px-5 py-4 bg-[#FDFCF0] border border-[#3E2723]/5 outline-none focus:border-[#3E2723]/20 transition-all resize-none text-xs text-[#3E2723]" placeholder="Tell me about your project..."></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-[#3E2723] text-[#FDFCF0] font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#5D4037] transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                  Send Message <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </section>

<footer className="py-12 px-6 border-t border-[#3E2723]/10 bg-[#FDFCF0]">
  <div className="max-w-[1100px] mx-auto">
    
 
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
      <div className="space-y-1 text-center md:text-left">
        <p className="text-2xl font-black tracking-tighter text-[#0D0D0D] uppercase leading-none">
          Yukti Payak
        </p>
        <p className="text-[9px] text-[#8D6E63] uppercase tracking-[0.3em] font-extrabold">
          Full Stack Developer 
        </p>
      </div>


      <div className="flex flex-col md:items-end gap-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
          </span>
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#0D0D0D]">
            Available for Hire
          </p>
        </div>
        
        <div className="flex gap-5">
          <a 
            href="https://github.com/yukti-payak" 
            target="_blank" 
            className="text-[11px] font-bold uppercase tracking-widest text-[#3E2723]/40 hover:text-[#0D0D0D] transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/yukti-payak18/" 
            target="_blank" 
            className="text-[11px] font-bold uppercase tracking-widest text-[#3E2723]/40 hover:text-[#0D0D0D] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>

 
    <div className="pt-6 border-t border-[#8D6E63]/10 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-[8px] text-[#8D6E63]/60 uppercase tracking-[0.3em] font-bold">
        © {new Date().getFullYear()} — India
      </p>
      
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#8D6E63]/40 font-bold">
        Built with <span className="text-[#8D6E63]">Next.js</span> & <span className="text-[#8D6E63]">Tailwind</span>
      </p>
    </div>
  </div>
</footer>
      </main>
    </div>
  );
}

export default Page;