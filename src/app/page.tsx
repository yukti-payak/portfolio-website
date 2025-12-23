"use client";
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Server,
  Laptop,
  Zap,
  Star,
  BookOpen,
  Briefcase,
  User,
  Home,
  Code2,
  ExternalLink,
  Send,
  CheckCircle,
  XOctagon,
  MapPin,
} from "lucide-react";
import {
  SiMongodb,
  SiLeetcode,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import StarBorder from "@/components/StarBorder";
import ShinyText from "@/components/ShinyText";
import BlurText from "@/components/BlurText";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      showNotification(
        "Message sent successfully! Thank you for reaching out.",
        "success"
      );
      setFormData({ name: "", email: "", message: "" });
    } else {
      showNotification(
        "Failed to send message. Please try again later or email me directly.",
        "error"
      );
    }
  };

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Skills", href: "#skills", icon: BookOpen },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: User },
  ];

  const locationItem = { name: "Mumbai", icon: MapPin };

  const projectsData = [
    {
      title: "ZenTrade : Interactive Analytic Suite",
      description:
        "Designed and developed a full-stack stock trading platform using the MERN stack, allowing users to place buy orders and track portfolio holdings through a fully responsive, feature-complete dashboard.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      githubLink:
        "https://github.com/yukti-payak/ZenTrade-Project",
      liveLink: "https://frontend-zeta-eight-43.vercel.app/",
    },
    {
      title:  "TravelNest : Geo Enabled Property Listing Platform",
      description:
        "Engineered a scalable property rental platform leveraging the MVC architectural pattern, providing users with intuitive property browsing, listing, and management capabilities.",
      tech: ["EJS", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/yukti-payak/TravelNest",
      liveLink:  "https://wanderlust-q6td.onrender.com/",
    },
  ];
  const skillsData = [
    { name: "React.js", icon: SiReact, color: "text-cyan-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-lime-400" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
    { name: "JavaScript/ES6+", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-blue-400" },
    { name: "Data Structures & Algo", icon: Database, color: "text-pink-400" },
    { name: "Git & GitHub", icon: FaGitAlt, color: "text-purple-400" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yukti-payak",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href:  "https://www.linkedin.com/in/yukti-payak18/",
      label: "LinkedIn",
    },
   
  ];

  const NotificationIcon =
    notification.type === "success" ? CheckCircle : XOctagon;
  const notificationBg =
    notification.type === "success" ? "bg-green-600" : "bg-red-600";
  const notificationShadow =
    notification.type === "success"
      ? "shadow-green-500/50"
      : "shadow-red-500/50";


  return (
    <div
      id="home"
      className="min-dvh-screen  text-white font-sans flex flex-col items-center"
      style={{background:"#171717"}}
    >
      {/* -- NOTIFICATION BANNER -- */}
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] p-4 rounded-lg text-white shadow-xl max-w-sm w-full transition-all duration-500 transform 
          ${notificationBg} ${notificationShadow} ${
          notification.visible
            ? "translate-y-0 opacity-100"
            : "-translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-3">
          <NotificationIcon className="w-6 h-6" />
          <p className="text-sm font-medium">{notification.message}</p>
        </div>
      </div>

 
      <nav
  className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-500 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
  }`}
>
  <div className="container mx-auto px-4 max-w-6xl flex justify-between items-center">
    
    
    <div className="w-1/4 hidden sm:block"></div>

    
    <div 
      className="flex gap-1 sm:gap-2 p-1.5 rounded-full border shadow-2xl backdrop-blur-md"
      style={{ 
        background: "rgba(30, 30, 30, 0.8)", 
        borderColor: "rgba(237, 237, 237, 0.08)" 
      }}
    >
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="group flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-white/5"
          style={{ color: "#EDEDED" }}
        >
          <item.icon className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:text-indigo-400 transition-all" />
          <span className="hidden sm:inline opacity-60 group-hover:opacity-100 transition-opacity">
            {item.name}
          </span>
        </a>
      ))}
    </div>

    
    <div className="w-1/4 flex justify-end">
      <div 
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border transition-colors"
        style={{ 
          background: "rgba(237, 237, 237, 0.03)", 
          borderColor: "rgba(237, 237, 237, 0.05)" 
        }}
      >
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </div>
        <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#EDEDED" }}>
          {locationItem.name}
        </span>
      </div>
    </div>

  </div>
</nav>

      <div className="w-full max-w-6xl px-4 pt-24 sm:pt-32 pb-20">
        <header
          className={`w-full text-center mb-12 sm:mb-20 transition-opacity duration-1000 ease-in ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-xl sm:text-2xl font-bold tracking-widest uppercase" style={{color:"#EDEDED"}}>
            <ShinyText
              text="Hi I'm Yukti Payak"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </h1>
        </header>

        <div
          className={`w-full grid md:grid-cols-2 gap-12 items-center mb-24 
            transition-opacity duration-1000 ease-in ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="space-y-8 order-2 md:order-1">
            <h1 className="text-2xl sm:text-5xl lg:text-3xl font-extrabold leading-tight">
              <BlurText
                text="MERN Stack Developer "
                delay={150}
                animateBy="letters"
                direction="top"
                className="text-2xl mb-8"

              />
            </h1>
            <p className="text-lg  max-w-lg" style={{color:"#EDEDED"}}>
              Computer Engineer and MERN Stack Developer specializing in building secure, scalable, and high-performance full-stack applications. With a strong engineering foundation and hands-on industry experience, I focus on clean architecture, JWT-based authentication, and optimized RESTful APIs to deliver reliable, production-ready solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <a
                href="https://drive.google.com/file/d/1iWT30hX8k9EMjEnboQTsxB2qqmCcWzzx/view?usp=drive_link"
                className="group flex cursor-pointer items-center gap-2  text-white font-semibold rounded-lg"
              >
                <StarBorder
                  as="button"
                  className="custom-class border-none cursor-pointer"
                  color="white"
                  speed="3s"
                  thickness={1}
                >
                  Resume
                </StarBorder>
              </a>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="p-3  hover:text-indigo-400 hover:bg-gray-800 rounded-full transition-all duration-200" style={{color:"#EDEDED"}}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-indigo-500/20 rounded-full animate-pulse-slow"></div>

              <div className="relative w-full h-full p-2 bg-gray-800 rounded-full overflow-hidden border-4 border-white-600/50 shadow-2xl shadow-indigo-500/10 transform transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="/me.png"
                  alt="Profile Picture"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>


<section id="skills" className="w-full py-16 sm:py-24" style={{ background: "#171717" }}>
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="text-center mb-16">
      <h2 className="text-xl sm:text-2xl font-bold tracking-[0.3em] uppercase" style={{ color: "#EDEDED" }}>
        <ShinyText
          text="Technologies"
          disabled={false}
          speed={3}
          className="custom-class"
        />
      </h2>
    
      <div className="w-12 h-[2px] mx-auto mt-4 rounded-full opacity-20" style={{ background: "#EDEDED" }}></div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {skillsData.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <div
            key={skill.name}
            className="group relative p-8 flex flex-col items-center rounded-2xl transition-all duration-500 overflow-hidden"
            style={{ 
              background: "#1E1E1E", 
              border: "1px solid rgba(237, 237, 237, 0.05)" 
            }}
          >
            
            <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
          
            <div className="relative z-10 mb-4 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
              <Icon
                className={`w-12 h-12 ${skill.color} filter grayscale group-hover:grayscale-0 transition-all duration-500`}
              />
            </div>

       
            <h3 className="relative z-10 text-sm font-medium tracking-wide transition-colors duration-300" style={{ color: "#A3A3A3" }}>
              <span className="group-hover:text-white transition-colors">{skill.name}</span>
            </h3>

            <div className="absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-indigo-500" />
          </div>
        );
      })}
    </div>
  </div>
</section>


  <section id="projects" className="w-full py-16 sm:py-24" style={{ background: "#171717" }}>
  <div className="container mx-auto px-4 max-w-6xl">
    
    
    <div className="text-center mb-16">
      <h2 className="text-xl sm:text-2xl font-bold tracking-[0.3em] uppercase" style={{ color: "#EDEDED" }}>
        <ShinyText
          text="Projects"
          disabled={false}
          speed={3}
          className="custom-class"
        />
      </h2>
      <div className="w-12 h-[2px] mx-auto mt-4 rounded-full opacity-20" style={{ background: "#EDEDED" }}></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projectsData.map((project, index) => (
        <div
          key={project.title}
          className="group relative p-6 sm:p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2"
          style={{ 
            background: "#1E1E1E", 
            borderColor: "rgba(237, 237, 237, 0.05)" 
          }}
        >
          
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>
            <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 transition-all">
              <Code2 className="w-5 h-5" />
            </div>
          </div>

          
          <p className="mb-6 text-sm leading-relaxed" style={{ color: "#A3A3A3" }}>
            {project.description}
          </p>

        
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full border"
                style={{ 
                  backgroundColor: "rgba(237, 237, 237, 0.03)", 
                  borderColor: "rgba(237, 237, 237, 0.1)",
                  color: "#EDEDED" 
                }}
              >
                {tech}
              </span>
            ))}
          </div>

        
          <div className="flex items-center justify-between pt-6 border-t border-white/5">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
              style={{ color: "#737373" }}
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
            
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-2 px-5 py-2 overflow-hidden rounded-lg bg-white text-black transition-all hover:pr-8"
            >
              <span className="text-sm font-bold">View Live</span>
              <ExternalLink className="absolute right-2 w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover/btn:opacity-100 group-hover/btn:translate-x-0" />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section id="contact" className="w-full py-16 sm:py-24" style={{ background: "#171717" }}>
  <div className="container mx-auto px-4 max-w-6xl">
    
    
    <div className="text-center mb-16">
      <h2 className="text-xl sm:text-2xl font-bold tracking-[0.3em] uppercase" style={{ color: "#EDEDED" }}>
        <ShinyText
          text="Get In Touch"
          disabled={false}
          speed={3}
          className="custom-class"
        />
      </h2>
      <div className="w-12 h-[2px] mx-auto mt-4 rounded-full opacity-20" style={{ background: "#EDEDED" }}></div>
    </div>

    
    <div 
      className="max-w-xl mx-auto p-8 sm:p-10 rounded-2xl border transition-all duration-500 shadow-2xl shadow-black/20" 
      style={{ 
        background: "#1E1E1E", 
        borderColor: "rgba(237, 237, 237, 0.05)" 
      }}
    >
      <form onSubmit={handleSubmit} method="POST" className="space-y-6">
        
      
        <div className="group">
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-widest mb-2 transition-colors group-focus-within:text-indigo-400"
            style={{ color: "#A3A3A3" }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 text-white border rounded-xl outline-none transition-all duration-300 placeholder:opacity-20 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20"
            style={{ 
              background: "#171717", 
              borderColor: "rgba(237, 237, 237, 0.1)" 
            }}
          />
        </div>

        
        <div className="group">
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-widest mb-2 transition-colors group-focus-within:text-indigo-400"
            style={{ color: "#A3A3A3" }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 text-white border rounded-xl outline-none transition-all duration-300 placeholder:opacity-20 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20"
            style={{ 
              background: "#171717", 
              borderColor: "rgba(237, 237, 237, 0.1)" 
            }}
          />
        </div>

        
        <div className="group">
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-widest mb-2 transition-colors group-focus-within:text-indigo-400"
            style={{ color: "#A3A3A3" }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="How can I help you?"
            className="w-full px-4 py-3 text-white border rounded-xl outline-none transition-all duration-300 resize-none placeholder:opacity-20 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20"
            style={{ 
              background: "#171717", 
              borderColor: "rgba(237, 237, 237, 0.1)" 
            }}
          ></textarea>
        </div>

      
        <button
          type="submit"
          className="group/btn relative w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#EDEDED] text-[#171717] font-bold rounded-xl overflow-hidden transition-all duration-300 hover:bg-white active:scale-95"
        >
          <span className="relative z-10">Send Message</span>
          <Send className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          
          
          <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover/btn:opacity-10 transition-opacity" />
        </button>
      </form>
    </div>
  </div>
</section>
      </div>

  
<footer className="w-full border-t border-white/5 py-8" style={{ background: "#171717" }}>
  <div className="container mx-auto px-6 max-w-6xl">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      
      
      <div className="flex flex-col md:items-start items-center">
        <p className="text-sm font-bold tracking-tight" style={{ color: "#EDEDED" }}>
          Yukti Payak 
          <span className="hidden md:inline mx-3 opacity-20">|</span>
          <span className="text-[12px] font-normal opacity-50">
            © {new Date().getFullYear()}
          </span>
        </p>
      </div>

      
      <nav className="flex gap-x-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-xs font-medium transition-colors duration-300 hover:text-indigo-400"
            style={{ color: "#EDEDED" }}
          >
            {item.name}
          </a>
        ))}
      </nav>

      
      <div className="flex gap-5 items-center">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${link.label}`}
              className="group relative p-2 transition-all duration-300 hover:-translate-y-1"
              style={{ color: "#EDEDED" }}
            >
              
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              
              <Icon className="relative w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:text-indigo-400 transition-all duration-300" />
            </a>
          );
        })}
      </div>
      
    </div>

    
    <div className="mt-8 pt-6 border-t border-white/5 text-center md:text-left">
      <p className="text-[10px] uppercase tracking-[0.2em] opacity-30" style={{ color: "#EDEDED" }}>
        Made with Next.js & Tailwind CSS
      </p>
    </div>
  </div>
</footer>
      
    </div>
  );
}

export default Page;