"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Briefcase, User, MessageCircle, MessageSquare, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import profileImage from '@/app/assets/pp.jpeg';
import covid from '@/app/assets/covid19.jpg';
import cv from '@/app/assets/cv.png';
import food from '@/app/assets/food.png'
import job from '@/app/assets/Job Portal.jpg'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);
  const [currentProject, setCurrentProject] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Job Portal Platform',
      description: 'Full-stack job portal solution with React, Node.js, and MongoDB. Features include user authentication, job listings, application tracking, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      link: 'https://github.com/Falahk10/Mern-Stack-Job-Portal',
      demo: 'https://job-portal-demo.vercel.app',
      image: job.src,
      category: 'Web App',
      status: 'Completed',
      duration: '3 months'
    },
    {
      id: 2,
      title: 'Resume Screening App',
      description: '"Resume Screening App" is a Python-based tool that uses AI and Natural Language Processing to automate resume evaluation. Leveraging machine learning, it matches job requirements with candidate skills, simplifying the hiring process for recruiters and HR professionals.',
      tech: ['Jupyter Notebook', 'Python'],
      link: 'https://github.com/Falahk10/Resume-Screening-App',
      demo: 'https://ai-chat-demo.vercel.app',
      image: cv.src,
      category: 'AI/ML',
      status: 'Completed',
      duration: '2 months'
    },
    {
      id: 3,
      title: 'Contact Tracing for COVID-19',
      description: 'Contact tracing involves identifying and monitoring people who have been in contact with someone infected. Governments use this approach to control the spread of infectious diseases like COVID-19.',
      tech: ['Python', 'Jupter Notebook'],
      link: 'https://github.com/Falahk10/Contact-Tracing-For-Pandemics-Using-Machine-Learning',
      demo: 'https://taskmanager-demo.vercel.app',
      image: covid.src,
      category: 'AI/ML',
      status: 'Completed',
      duration: '3 months'
    },
    {
      id: 4,
      title: 'Full Stack Food Delivery Website',
      description: 'Full Stack Food Delivery Website In React JS, MongoDB, Express, Node JS & Stripe',
      tech: ['React JS', 'MongoDB', 'Express', 'Node JS'],
      link: 'https://github.com/Falahk10/Full-Stack-Food-Delivery-Website-in-ReactJs',
      demo: 'https://banking-demo.vercel.app',
      image: food.src,
      category: 'Web App',
      status: 'Completed',
      duration: '4 months'
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: 'Languages',

      skills: [
        { name: 'JavaScript', level: 95, color: '#F7DF1E' },
        { name: 'TypeScript', level: 90, color: '#3178C6' },
        { name: 'Python', level: 90, color: '#3776AB' },
        { name: 'Java', level: 80, color: '#007396' },
        { name: 'C#', level: 75, color: '#239120' },
      ]
    },
    {
      title: 'Frontend Frameworks',

      skills: [
        { name: 'React', level: 92, color: '#61DAFB' },
        { name: 'Next.js', level: 88, color: '#000000' },
        { name: 'Angular', level: 95, color: '#DD0031' },
        { name: 'Vue.js', level: 75, color: '#4FC08D' },
      ]
    },
    {
      title: 'Backend & APIs',

      skills: [
        { name: 'Node.js', level: 95, color: '#339933' },
        { name: '.NET', level: 80, color: '#512BD4' },
        { name: 'Express.js', level: 85, color: '#000000' },
        { name: 'REST APIs', level: 83, color: '#FF6B35' },
      ]
    },
    {
      title: 'Databases',

      skills: [
        { name: 'PostgreSQL', level: 85, color: '#336791' },
        { name: 'MongoDB', level: 95, color: '#47A248' },
        { name: 'MySQL', level: 82, color: '#4479A1' },
      ]
    },
    {
      title: 'UI Libraries',

      skills: [
        { name: 'Tailwind CSS', level: 95, color: '#06B6D4' },
        { name: 'Material-UI', level: 80, color: '#0081CB' },
        { name: 'Bootstrap', level: 90, color: '#7952B3' },
      ]
    },
    {
      title: 'Tools & Methodologies',

      skills: [
        { name: 'Git', level: 90, color: '#F05032' },
        { name: 'Agile/Scrum', level: 85, color: '#FF6B35' },
        { name: 'CI/CD', level: 80, color: '#326CE5' },
      ]
    }
  ];

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'MTBC CareCloud',
      period: 'July 2025 - Present',
      description: `Managed projects and operations, led automation efforts, and maintained compliance with MTBC's security and privacy policies.`,
      achievements: ['Ensured timely updates for clients and insurers', 'Led team of 5 developers', 'Implemented CI/CD pipeline']
    },
    {
      title: 'AI Coding Expert',
      company: 'Outlier AI',
      period: 'February 2025 - May 2025',
      description: 'Developed coding prompts in multiple languages, evaluated AI-generated responses, and provided high-quality feedback to enhance AI accuracy, efficiency, and clarity.',
      achievements: ['Contributed to 20+ projects', 'Learned AI prompt engineering', 'Received outstanding performance reviews']      
    },
    {
      title: 'Web Developer Intern - Remote',
      company: 'APNAWIFI LLP',
      period: 'July 2024 - October 2024',
      description: 'Developed a responsive WordPress website for APNAWIFI LLP using Elementor, collaborating with cross-functional teams to create a visually engaging user experience.',
      achievements: ['Built the company website', 'Improved code quality by 60%', 'Learned WordPress and Elementor']
    },
    {
      title: 'Web Programmer Intern',
      company: 'NaqCoDE Technologies',
      period: 'July 2024 - August 2024',
      description: 'Refined frontend skills using Next.js and React to build user-friendly web solutions. Leveraged Python with pandas, Numpy, and Matplotlib for data analysis and visualization tasks.',
      achievements: ['Gained proficiency in data visualization', 'Mastered Reacta and Next.js fundamentals', 'Collaborated in agile teams']
    },
  ];

  const navItems = [
    { id: 'hero', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'contact', label: 'Contact', icon: MessageCircle },
  ];

  // Auto-rotate projects every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [projects.length]);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial active section
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu when navigating
    }
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-purple-400 text-xl font-mono"
          >
            Loading Portfolio...
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl sm:text-2xl font-bold text-purple-400 font-mono"
            >
              &lt;FK/&gt;
            </motion.div>

            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${activeSection === item.id
                    ? 'text-purple-400 bg-purple-500/10'
                    : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/5'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Medium screens navigation */}
            <div className="hidden md:flex lg:hidden space-x-4">
              {navItems.slice(0, 4).map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-2 py-1 rounded-md text-xs font-medium transition-all duration-300 ${activeSection === item.id
                    ? 'text-purple-400 bg-purple-500/10'
                    : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/5'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-purple-400"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-purple-500/20 bg-black/90 backdrop-blur-md"
              >
                <div className="px-3 py-4 space-y-2">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${activeSection === item.id
                        ? 'text-purple-400 bg-purple-500/10'
                        : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/5'
                        }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Falah Khalid
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 font-mono"
            >
              &lt; Software Engineer /&gt;
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
            >
              Creating clean, user-focused solutions that blend performance with great design.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={profileImage.src}
                      alt="Falah Khalid"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-purple-400">Software Engineer</h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Graduated from NUST, with a strong full-stack background, building modern web applications using .NET, Angular, React, and Node.js, with added interest in machine learning and intelligent systems.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                My journey in software development has been driven by curiosity and a desire to create meaningful solutions.
                I enjoy working on challenging projects that push the boundaries of what's possible with technology.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50 text-xs sm:text-sm">NUST Graduate</Badge>
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50 text-xs sm:text-sm">Full-Stack Developer</Badge>
                <Badge className="bg-pink-500/20 text-pink-400 border-pink-500/50 text-xs sm:text-sm">ML Enthusiast</Badge>
                <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50 text-xs sm:text-sm">Data Scientist</Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div className="flex-1">
                        <CardTitle className="text-lg sm:text-xl text-purple-400 leading-snug">{exp.title}</CardTitle>
                        <CardDescription className="text-cyan-400 text-base sm:text-lg">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="border-gray-600 text-gray-300 text-xs sm:text-sm self-start">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">{exp.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-purple-400">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm sm:text-base">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="leading-relaxed">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projects Gallery
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore my portfolio through an interactive notebook-style gallery. Each project tells a unique story of innovation and craftsmanship.
            </p>
          </motion.div>

          {/* Notebook Gallery Container */}
          <div className="relative" style={{ perspective: '1200px', perspectiveOrigin: 'center bottom' }}>
            {/* Project Indicators */}
            <div className="flex justify-center mb-6 sm:mb-8 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentProject
                      ? 'bg-purple-500 w-6 sm:w-8 shadow-lg shadow-purple-500/50'
                      : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                />
              ))}
            </div>

            {/* Main Notebook Container */}
            <div className="relative h-[350px] sm:h-[400px] lg:h-[450px] xl:h-[500px] mx-auto max-w-6xl">
              {/* Background Pages (Stacked Effect) */}
              <div className="absolute inset-0">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute inset-0 bg-gray-800/20 border border-gray-700/30 rounded-lg sm:rounded-xl lg:rounded-2xl transform-gpu origin-bottom
                      ${i === 0 ? 'translate-x-1.5 translate-y-1.5 sm:translate-x-2 sm:translate-y-2 lg:translate-x-3 lg:translate-y-3' : ''}
                      ${i === 1 ? 'translate-x-1 translate-y-1 sm:translate-x-1.5 sm:translate-y-1.5 lg:translate-x-2 lg:translate-y-2' : ''}
                      ${i === 2 ? 'translate-x-0.5 translate-y-0.5 sm:translate-x-1 sm:translate-y-1' : ''}
                      ${i === 3 ? 'translate-x-0.25 translate-y-0.25 sm:translate-x-0.5 sm:translate-y-0.5' : ''}
                    `}
                    style={{
                      zIndex: 10 - i,
                      rotateX: `${i * 1.5}deg`,
                      transformStyle: 'preserve-3d'
                    }}
                    animate={{
                      rotateX: `${i * 1.5}deg`,
                      y: i * 2,
                      x: i * 2,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
              {/* Page Wrap Effect Layer */}
              <AnimatePresence>
                <motion.div
                  key={`wrap-${currentProject}`}
                  initial={{ scaleY: 0, originY: 1 }}
                  animate={{ scaleY: 1, originY: 1 }}
                  exit={{ scaleY: 0, originY: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-lg sm:rounded-xl lg:rounded-2xl"
                  style={{ zIndex: 15 }}
                />
              </AnimatePresence>

              {/* Active Project Page */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject}
                  initial={{
                    y: '100%',
                    opacity: 0,
                    rotateX: 45,
                    scale: 0.9
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    scale: 1
                  }}
                  exit={{
                    y: '-100%',
                    opacity: 0,
                    rotateX: -45,
                    scale: 0.9
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0.0, 0.2, 1],
                    type: "tween"
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-purple-500/30 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden backdrop-blur-sm shadow-2xl transform-gpu origin-bottom"
                  style={{ zIndex: 20 }}
                >
                  {/* Project Content */}
                  <motion.div
                    className="h-full flex flex-col lg:flex-row"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    {/* Top - Image (Mobile) / Left - Image (Desktop) */}
                    <motion.div
                      className="w-full h-28 sm:h-32 lg:w-1/2 lg:h-full relative overflow-hidden shrink-0"
                      initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
                      animate={{ clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)' }}
                      transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20" />
                      <img
                        src={projects[currentProject].image}
                        alt={projects[currentProject].title}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Project Status Badge */}
                      <motion.div
                        className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 lg:top-4 lg:left-4"
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                      >
                        <Badge
                          className={`text-xs ${projects[currentProject].status === 'Completed'
                              ? 'bg-green-500/20 text-green-400 border-green-500/50'
                              : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
                            }`}
                        >
                          {projects[currentProject].status}
                        </Badge>
                      </motion.div>

                      {/* Category Badge */}
                      <motion.div
                        className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 lg:top-4 lg:right-4"
                        initial={{ scale: 0, rotate: 90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                      >
                        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50 text-xs">
                          {projects[currentProject].category}
                        </Badge>
                      </motion.div>
                    </motion.div>

                    {/* Bottom - Content (Mobile) / Right - Content (Desktop) */}
                    <motion.div
                      className="flex-1 w-full lg:w-1/2 p-3 sm:p-4 lg:p-6 xl:p-8 flex flex-col justify-between min-h-0"
                      initial={{ opacity: 0, x: 0, y: 20 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      <div>
                        <div className="mb-3 sm:mb-4 lg:mb-6">
                          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                            {projects[currentProject].title}
                          </h3>
                          <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
                            <span>Duration: {projects[currentProject].duration}</span>
                            <span>•</span>
                            <span>Project #{projects[currentProject].id}</span>
                          </div>
                        </div>

                        <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4 lg:mb-6 overflow-hidden">
                          <span className="block sm:hidden">
                            {projects[currentProject].description.length > 100
                              ? projects[currentProject].description.substring(0, 100) + '...'
                              : projects[currentProject].description
                            }
                          </span>
                          <span className="hidden sm:block lg:hidden">
                            {projects[currentProject].description.length > 150
                              ? projects[currentProject].description.substring(0, 150) + '...'
                              : projects[currentProject].description
                            }
                          </span>
                          <span className="hidden lg:block">
                            {projects[currentProject].description}
                          </span>
                        </p>

                        {/* Tech Stack */}
                        <div className="mb-3 sm:mb-4">
                          <h4 className="text-purple-400 font-semibold mb-2 text-xs sm:text-sm lg:text-base">Technologies Used</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {projects[currentProject].tech.map((tech, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30 transition-colors duration-300 text-xs px-1.5 py-0.5 sm:px-2 sm:py-1"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                        
                      {/* Action Button */}
                      <div className="flex justify-start mt-2 sm:mt-4">
                        <Button
                          onClick={() => window.open(projects[currentProject].link, '_blank')}
                          className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white transition-all duration-300 hover:scale-105 text-xs sm:text-sm lg:text-base py-1.5 sm:py-2 lg:py-3 px-4 sm:px-6 lg:px-8"
                        >
                          <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                          View Code
                        </Button>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevProject}
                className="absolute left-1 sm:left-2 lg:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/50 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm z-30"
              >
                <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6" />
              </button>

              <button
                onClick={nextProject}
                className="absolute right-1 sm:right-2 lg:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/50 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm z-30"
              >
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6" />
              </button>
            </div>

            {/* Project Counter */}
            <div className="text-center mt-6 sm:mt-8">
              <p className="text-gray-400 text-sm sm:text-base">
                <span className="text-purple-400 font-semibold">{currentProject + 1}</span> of <span className="text-cyan-400 font-semibold">{projects.length}</span> projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="space-y-8 sm:space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-400 mb-2">
                    {category.title}
                  </h3>
                  <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 mx-auto"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.5rem)] lg:w-[calc(25%-0.75rem)] xl:w-[calc(20%-0.8rem)] max-w-[200px] min-w-[140px]"
                    >
                      <Card className="bg-gray-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full w-full">
                        <CardContent className="p-2.5 sm:p-3 lg:p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-purple-400 font-semibold text-xs sm:text-sm truncate pr-1">{skill.name}</span>
                            <span className="text-cyan-400 text-xs font-bold flex-shrink-0">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2 mb-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                              className="h-1.5 sm:h-2 rounded-full"
                              style={{
                                background: `linear-gradient(90deg, ${skill.color}40, ${skill.color})`
                              }}
                            />
                          </div>
                          <div className="flex justify-center">
                            <div
                              className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full"
                              style={{ backgroundColor: skill.color }}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="flex justify-center items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-4xl"
            >
              <Card className="bg-gray-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 mx-auto backdrop-blur-sm">
                <CardHeader className="text-center pb-6 sm:pb-8">
                  <CardTitle className="text-2xl sm:text-3xl text-purple-400 mb-3 sm:mb-4">Let's Connect</CardTitle>
                  <CardDescription className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    I'm always open to discussing new opportunities and interesting projects.
                    Feel free to reach out through any of these platforms!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6 pb-6 sm:pb-8">
                  {/* Email */}
                  <div
                    className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-700/30 rounded-lg sm:rounded-xl hover:bg-gradient-to-r hover:from-red-500/20 hover:to-pink-500/20 hover:border-red-400/50 border border-gray-600/30 transition-all duration-300 cursor-pointer group transform hover:scale-[1.02] hover:-translate-y-1"
                    onClick={() => window.open('mailto:falehkhalid10@gmail.com', '_blank')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        window.open('mailto:falehkhalid10@gmail.com', '_blank');
                      }
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-red-500/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-red-500/30 transition-all duration-300">
                        <svg className="h-5 w-5 sm:h-7 sm:w-7 text-red-400 group-hover:text-red-300 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-white font-semibold text-base sm:text-lg group-hover:text-red-200 transition-colors duration-300">Email</p>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base truncate">falehkhalid10@gmail.com</p>
                    </div>
                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-red-300 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0" />
                  </div>

                  {/* Phone/WhatsApp */}
                  <div
                    className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-700/30 rounded-lg sm:rounded-xl hover:bg-gradient-to-r hover:from-green-500/20 hover:to-emerald-500/20 hover:border-green-400/50 border border-gray-600/30 transition-all duration-300 cursor-pointer group transform hover:scale-[1.02] hover:-translate-y-1"
                    onClick={() => window.open('https://wa.me/923331571169', '_blank')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        window.open('https://wa.me/923331571169', '_blank');
                      }
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-green-500/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-all duration-300">
                        <svg className="h-5 w-5 sm:h-7 sm:w-7 text-green-400 group-hover:text-green-300 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-white font-semibold text-base sm:text-lg group-hover:text-green-200 transition-colors duration-300">WhatsApp</p>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base">+92 333 1571169</p>
                    </div>
                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-green-300 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0" />
                  </div>

                  {/* Phone */}
                  <div
                    className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-700/30 rounded-lg sm:rounded-xl hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 hover:border-blue-400/50 border border-gray-600/30 transition-all duration-300 cursor-pointer group transform hover:scale-[1.02] hover:-translate-y-1"
                    onClick={() => window.open('tel:+93331571169', '_blank')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        window.open('tel:+93331571169', '_blank');
                      }
                    }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                        <Phone className="h-5 w-5 sm:h-7 sm:w-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-white font-semibold text-base sm:text-lg group-hover:text-blue-200 transition-colors duration-300">Phone</p>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base">+92 333 1571169</p>
                    </div>
                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-blue-300 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0" />
                  </div>

                  {/* Location */}
                  <div
                    className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-700/30 rounded-lg sm:rounded-xl hover:bg-gradient-to-r hover:from-red-500/20 hover:to-orange-500/20 hover:border-red-400/50 border border-gray-600/30 transition-all duration-300 group transform hover:scale-[1.02] hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-red-500/20 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-red-500/30 transition-all duration-300">
                        <MapPin className="h-5 w-5 sm:h-7 sm:w-7 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-white font-semibold text-base sm:text-lg group-hover:text-red-200 transition-colors duration-300">Location</p>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base">Islamabad, Pakistan</p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 sm:pt-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-4 sm:mb-6 text-center">Connect on Social Media</h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
                      <div className="transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                        <Button
                          variant="outline"
                          className="w-full h-12 sm:h-14 border-purple-500/50 hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-violet-500/30 hover:border-purple-400 hover:text-gray-900 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group text-sm sm:text-base"
                          onClick={() => window.open('https://github.com/Falahk10', '_blank')}
                        >
                          <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                          <span className="font-semibold">GitHub</span>
                        </Button>
                      </div>

                      <div className="transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                        <Button
                          variant="outline"
                          className="w-full h-12 sm:h-14 border-cyan-500/50 hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400 hover:text-gray-900 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group text-sm sm:text-base"
                          onClick={() => window.open('https://linkedin.com/in/falah-khalid-5556b4238', '_blank')}
                        >
                          <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                          <span className="font-semibold">LinkedIn</span>
                        </Button>
                      </div>

                      <div className="transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                        <Button
                          variant="outline"
                          className="w-full h-12 sm:h-14 border-orange-500/50 hover:bg-gradient-to-r hover:from-orange-500/30 hover:to-red-500/30 hover:border-orange-400 hover:text-gray-900 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 group text-sm sm:text-base"
                          onClick={() => window.open('mailto:falehkhalid10@gmail.com', '_blank')}
                        >
                          <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                          <span className="font-semibold">Email</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 Falah Khalid. All rights reserved. | <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
}