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
import TextType from "@/components/TextType";
import StarBorder from "@/components/StarBorder";
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
      title: "FinoSphere : Stock Trading Platform",
      description:
        "Developed a full-stack stock trading platform using the MERN stack, enabling users to execute buy orders and monitor portfolio holdings, resulting in a 100% feature-complete and responsive dashboard.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      githubLink:
        "https://github.com/sudhirrathod03/FinoSphere-Stock-Trading-Platfrom",
      liveLink: "https://frontend-iota-livid.vercel.app/",
    },
    {
      title: "NestAway - Geo-Spatial Listing Engine ",
      description:
        "Developed a scalable property rental platform utilizing the Model-View-Controller (MVC) architecture, allowing users to seamlessly browse, list, and manage rental properties.",
      tech: ["EJS", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/sudhirrathod03/NestAway",
      liveLink: "https://nest-away-delta.vercel.app/listings",
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
      href: "https://github.com/sudhirrathod03",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sudhir-rathod-8b3715250/",
      label: "LinkedIn",
    },
    {
      icon: SiLeetcode, // Use the icon from react-icons
      href: "https://leetcode.com/u/Sudhir_Rathod_05/", // Replace with your username
      label: "LeetCode",
    },

  ];

  const NotificationIcon =
    notification.type === "success" ? CheckCircle : XOctagon;
  const notificationBg =
    notification.type === "success" ? "bg-indigo-600" : "bg-red-600";
  const notificationShadow =
    notification.type === "success"
      ? "shadow-indigo-500/50"
      : "shadow-red-500/50";

  return (
    <div
      id="home"
      className="min-dvh-screen bg-black text-white font-sans flex flex-col items-center"
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
        className={`fixed top-0 left-0 right-0 z-50 py-4 bg-black/90 backdrop-blur-sm 
         border-gray-800 transition-opacity duration-1000 ${
           isVisible ? "opacity-100" : "opacity-0"
         }`}
      >
        <div className="container mx-auto px-4 max-w-6xl flex justify-between items-center">
          <div className="w-1/4 hidden sm:block"></div>

          <div className="flex gap-4 sm:gap-8 p-2 rounded-full border border-gray-700 bg-gray-900/50 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-full transition-colors duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.name}</span>
              </a>
            ))}
          </div>

          <div className="w-1/4 flex justify-end">
            <div className="flex items-center gap-1 font-medium text-gray-400">
              <MapPin className="w-4 h-4 text-red-700" />
              <span className="text-xs sm:text-sm">{locationItem.name}</span>
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
          <h1 className="text-xl sm:text-2xl font-bold tracking-widest uppercase text-indigo-400">
            <ShinyText
              text="Hi I'm Sudhir Rathod"
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500 whitespace-nowrap">
                {" "}
                <TextType
                  text={["MERN Stack Developer"]}
                  as="p"
                  typingSpeed={50}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  textColors={["silver"]}
                />
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-lg">
              Computer Engineering graduate and MERN stack developer with
              real-world experience building and deploying full-stack
              applications. Skilled in backend systems, JWT authentication, REST
              APIs, and DSA, with a strong focus on clean architecture and
              performance-driven development.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <a
                href="#projects"
                className="group flex cursor-pointer items-center gap-2  text-white font-semibold rounded-lg"
              >
                <StarBorder
                  as="button"
                  className="custom-class border-none cursor-pointer"
                  color="white"
                  speed="3s"
                  thickness={1}
                >
                  View My Work
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
                      className="p-3 text-gray-400 hover:text-indigo-400 hover:bg-gray-800 rounded-full transition-all duration-200"
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
                  alt="Sudhir Rathod - Profile Picture"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        <section id="skills" className="w-full py-16 sm:py-24">
          <div className="text-center mb-12">
            <h1 className="text-xl sm:text-2xl font-bold tracking-widest uppercase text-indigo-400">
              <ShinyText
                text="Technologies"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h1>

            <div className="w-20 h-1 bg-gray-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {skillsData.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`group p-6 flex flex-col items-center bg-gray-900/50 backdrop-blur-sm rounded-xl 
                              border border-gray-800 hover:border-gray-400 transition-all duration-300 
                              transform hover:scale-105 hover:shadow-xl hover:shadow-gray-800/10`}
                >
                  <Icon
                    className={`w-10 h-10 mb-3 ${skill.color} group-hover:rotate-6 transition-transform`}
                  />

                  <h3 className="text-lg font-semibold text-white mb-1">
                    {skill.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </section>

        <section id="projects" className="w-full py-12 sm:py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projectsData.map((project, index) => (
              <div
                key={project.title}
                className="group p-5 sm:p-6 bg-gray-900 rounded-xl border border-gray-700  transition-all duration-300 transform hover:scale-[1.02] hover:border-white/50 hover:shadow-xl hover:shadow-gray-800/50"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors">
                    {project.title}
                  </h3>
                  <Code2 className="w-6 h-6 text-gray-400 transition-transform group-hover:text-indigo-400 group-hover:scale-110" />
                </div>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1 bg-gray-700 text-white rounded-md border border-gray-600 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2 border-t border-gray-700">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1 border border-white text-black bg-white rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="w-full py-12 sm:py-20">
          {" "}
          <div className="text-center mb-12">
            <h1 className="text-xl sm:text-2xl font-bold tracking-widest uppercase text-indigo-400">
              <ShinyText
                text=" Get In Touch"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h1>

            <div className="w-20 h-1 bg-white mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="max-w-xl mx-auto p-6 sm:p-8 bg-gray-900 rounded-xl border border-gray-700 shadow-xl">
            <form onSubmit={handleSubmit} method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
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
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
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
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg  focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
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
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg  focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-200 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white text-black font-bold rounded-lg   shadow-md hover:bg-indigo-600 hover:text-white hover:shadow-indigo-500/50 transition-all duration-300"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </section>
      </div>

      <footer className="w-full bg-gray-950 border-t border-gray-800 py-10 sm:py-12">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
            <p className="text-xl font-bold text-white mb-4 sm:mb-0">
              Sudhir Rathod
            </p>

            <div className="flex gap-4 sm:gap-6 justify-center text-sm font-medium text-gray-400">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-indigo-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex gap-4 mt-4 sm:mt-0 justify-center">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Link to ${link.label}`}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="w-full h-px bg-gray-700 mx-auto mb-6"></div>

          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Sudhir Rathod.
            <span className="block sm:inline sm:ml-2">
              Made with Next.js and Tailwind CSS.
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Page;
