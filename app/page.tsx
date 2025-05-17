"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Rocket, ChevronDown, Twitter, MessageCircle, Send, Menu, X, Cpu, Palette, Type, Grid, Battery, Zap } from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // Define the color system
  const colors = {
    primary: {
      neon: "#00f0ff", // Electric cyan/blue
      purple: "#9d4edd", // Electric purple
      blue: "#4361ee", // Electric blue
      pink: "#ff00a0", // Electric pink
    },
    metallics: {
      silver: "#c5c5c5",
      gunmetal: "#2d3748",
      chrome: "#e2e2e2",
    },
    backgrounds: {
      darkest: "#0f1123", // Deep space black with hint of blue
      dark: "#1a1b2e", // Dark blue-black
      medium: "#252a41", // Medium dark blue
    },
    accent: {
      yellow: "#ffd700", // Cyber yellow
      orange: "#ff7b00", // Bright orange
      red: "#ff0040", // Neon red
      green: "#00ff9f", // Electric green
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
      setIsMenuOpen(false)
    }
  }

  // Helper function to apply circuit pattern
  const applyCircuitPattern = (intensity = 0.05) => {
    return {
      backgroundImage: `radial-gradient(${colors.primary.neon}${Math.round(intensity * 255).toString(16)} 1px, transparent 1px), 
                        linear-gradient(to right, ${colors.primary.neon}${Math.round(intensity * 100).toString(16)} 1px, transparent 1px)`,
      backgroundSize: '20px 20px, 20px 20px',
      backgroundPosition: '0 0, 0 0',
    };
  };

  // Helper function to apply grid pattern
  const applyGridPattern = (intensity = 0.05) => {
    return {
      backgroundImage: `linear-gradient(${colors.primary.blue}${Math.round(intensity * 100).toString(16)} 1px, transparent 1px), 
                        linear-gradient(to right, ${colors.primary.blue}${Math.round(intensity * 100).toString(16)} 1px, transparent 1px)`,
      backgroundSize: '40px 40px',
      backgroundPosition: '0 0, 0 0',
    };
  };

  // Sample data for robot fighters
  const fighters = [
    {
      id: 1,
      name: "ELON SMACK",
      image: "/robot1.png", // Placeholder for your clean robot image
      description: "A bot built for Twitter beef. Specializes in market manipulation and viral memes.",
      color: `linear-gradient(to bottom right, ${colors.primary.neon}, ${colors.primary.blue})`,
      stats: {
        punchPower: 85,
        batteryLife: 70,
        blueScreenFreq: 15
      }
    },
    {
      id: 2,
      name: "HODL-9000",
      image: "/robot2.png", // Placeholder for your clean robot image
      description: "Diamond hands built into its core. Can withstand any market crash with ease.",
      color: `linear-gradient(to bottom right, ${colors.primary.purple}, ${colors.primary.pink})`,
      stats: {
        punchPower: 75,
        batteryLife: 90,
        blueScreenFreq: 5
      }
    },
    {
      id: 3,
      name: "FUD Crusher",
      image: "/robot3.png", // Placeholder for your clean robot image
      description: "Demolishes fear, uncertainty, and doubt with facts and pure strength.",
      color: `linear-gradient(to bottom right, ${colors.accent.green}, ${colors.primary.blue})`,
      stats: {
        punchPower: 95,
        batteryLife: 60,
        blueScreenFreq: 25
      }
    },
    {
      id: 4,
      name: "The Liquidator",
      image: "/robot4.png", // Placeholder for your clean robot image
      description: "Hunts for leveraged positions. No margin trader is safe from its wrath.",
      color: `linear-gradient(to bottom right, ${colors.accent.red}, ${colors.accent.orange})`,
      stats: {
        punchPower: 90,
        batteryLife: 65,
        blueScreenFreq: 20
      }
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-hidden" style={{ backgroundColor: colors.backgrounds.darkest }}>
      {/* Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? "backdrop-blur-md py-3" : "bg-transparent py-5"}`}
        style={{ backgroundColor: scrollY > 50 ? `${colors.backgrounds.darkest}e6` : 'transparent' }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-bold bg-clip-text text-transparent" 
                  style={{ 
                    backgroundImage: `linear-gradient(to right, ${colors.primary.neon}, ${colors.primary.purple}, ${colors.primary.blue})` 
                  }}>
              $RUMBLE
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex gap-8"
          >
            <button onClick={() => scrollToSection("about")} 
                    className="transition-colors font-medium hover:text-cyan-400">
              About
            </button>
            <button onClick={() => scrollToSection("design")} 
                    className="transition-colors font-medium hover:text-cyan-400">
              Design System
            </button>
            <button onClick={() => scrollToSection("fighters")} 
                    className="transition-colors font-medium hover:text-cyan-400">
              Fighters
            </button>
            <button onClick={() => scrollToSection("community")} 
                    className="transition-colors font-medium hover:text-cyan-400">
              Community
            </button>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-16 left-0 right-0 backdrop-blur-md z-40 md:hidden"
          style={{ backgroundColor: `${colors.backgrounds.darkest}f2` }}
        >
          <div className="flex flex-col p-4 gap-4">
            <button onClick={() => scrollToSection("about")} 
                    className="py-3 px-4 rounded-md hover:bg-gray-800">
              About
            </button>
            <button onClick={() => scrollToSection("design")} 
                    className="py-3 px-4 rounded-md hover:bg-gray-800">
              Design System
            </button>
            <button onClick={() => scrollToSection("fighters")} 
                    className="py-3 px-4 rounded-md hover:bg-gray-800">
              Fighters
            </button>
            <button onClick={() => scrollToSection("community")} 
                    className="py-3 px-4 rounded-md hover:bg-gray-800">
              Community
            </button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <CyberpunkBackground colors={colors} />
        </div>

        <div className="container mx-auto px-4 z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block py-1 px-3 rounded-full text-sm font-medium mb-4"
                    style={{ backgroundColor: `${colors.primary.neon}20`, color: colors.primary.neon }}>
                ROBOT REVOLUTION
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              <span className="block bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(to right, ${colors.primary.neon}, ${colors.primary.purple}, ${colors.primary.blue})` 
                    }}>
                $RUMBLE
              </span>
              <span className="block text-2xl md:text-4xl mt-2">The Ultimate Robot Fight Token</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
              style={{ color: colors.metallics.silver }}
            >
              Where memes meet mechanical mayhem. Join the robot revolution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("fighters")}
                className="px-8 py-3 rounded-full font-bold text-lg flex items-center justify-center gap-2"
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${colors.primary.neon}, ${colors.primary.blue})`,
                  boxShadow: `0 0 15px ${colors.primary.neon}80`
                }}
              >
                Choose Your Fighter <Zap size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("community")}
                className="px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
                style={{ 
                  backgroundColor: 'transparent',
                  border: `2px solid ${colors.primary.neon}`,
                  color: colors.primary.neon
                }}
              >
                Join Community
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-16"
            >
              <motion.button
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                onClick={() => scrollToSection("about")}
                style={{ color: colors.metallics.silver }}
                className="hover:text-white transition-colors"
              >
                <ChevronDown size={32} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: colors.backgrounds.dark }}>
        <div className="absolute inset-0" style={applyCircuitPattern(0.03)}></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent" 
                  style={{ 
                    fontFamily: "'Orbitron', sans-serif",
                    backgroundImage: `linear-gradient(to right, ${colors.primary.neon}, ${colors.primary.blue})` 
                  }}>
                About $RUMBLE
              </h2>

              <div className="space-y-6">
                <motion.p
                  className="text-xl md:text-2xl leading-relaxed"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  style={{ color: colors.metallics.chrome }}
                >
                  The first memecoin fueled by robot carnage. Inspired by real robotic fight leagues. Built for degens,
                  powered by memes.
                </motion.p>

                <motion.p
                  className="text-lg leading-relaxed"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  style={{ color: colors.metallics.silver }}
                >
                  In the arena of crypto, only the strongest survive. $RUMBLE brings the excitement of robot combat to
                  the blockchain, creating a community of battle-hardened HODLers ready for the ultimate showdown.
                </motion.p>

                <motion.div
                  className="pt-8 flex justify-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="p-4 rounded-xl border" 
                         style={{ 
                           backgroundColor: `${colors.backgrounds.medium}80`,
                           borderColor: colors.primary.neon,
                           boxShadow: `0 0 10px ${colors.primary.neon}40`
                         }}>
                      <h3 className="text-2xl md:text-3xl font-bold" style={{ color: colors.primary.neon }}>0%</h3>
                      <p className="mt-2" style={{ color: colors.metallics.silver }}>Tax</p>
                    </div>
                    <div className="p-4 rounded-xl border" 
                         style={{ 
                           backgroundColor: `${colors.backgrounds.medium}80`,
                           borderColor: colors.primary.purple,
                           boxShadow: `0 0 10px ${colors.primary.purple}40`
                         }}>
                      <h3 className="text-2xl md:text-3xl font-bold" style={{ color: colors.primary.purple }}>100%</h3>
                      <p className="mt-2" style={{ color: colors.metallics.silver }}>Community</p>
                    </div>
                    <div className="p-4 rounded-xl border" 
                         style={{ 
                           backgroundColor: `${colors.backgrounds.medium}80`,
                           borderColor: colors.primary.blue,
                           boxShadow: `0 0 10px ${colors.primary.blue}40`
                         }}>
                      <h3 className="text-2xl md:text-3xl font-bold" style={{ color: colors.primary.blue }}>LP</h3>
                      <p className="mt-2" style={{ color: colors.metallics.silver }}>Locked</p>
                    </div>
                    <div className="p-4 rounded-xl border" 
                         style={{ 
                           backgroundColor: `${colors.backgrounds.medium}80`,
                           borderColor: colors.accent.yellow,
                           boxShadow: `0 0 10px ${colors.accent.yellow}40`
                         }}>
                      <h3 className="text-2xl md:text-3xl font-bold" style={{ color: colors.accent.yellow }}>∞</h3>
                      <p className="mt-2" style={{ color: colors.metallics.silver }}>Potential</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Design System Section */}
      <section id="design" className="py-20 md:py-32 relative" style={{ backgroundColor: colors.backgrounds.darkest }}>
        <div className="absolute inset-0" style={applyGridPattern(0.05)}></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent"
                  style={{ 
                    fontFamily: "'Orbitron', sans-serif",
                    backgroundImage: `linear-gradient(to right, ${colors.primary.neon}, ${colors.primary.blue})` 
                  }}>
                Design System
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Color Palette Reference Sheet */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="rounded-xl border overflow-hidden"
                  style={{ 
                    backgroundColor: `${colors.backgrounds.medium}90`,
                    borderColor: colors.primary.neon,
                  }}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" 
                           style={{ backgroundColor: colors.primary.neon }}>
                        <Palette size={20} />
                      </div>
                      <h3 className="text-xl font-bold" style={{ fontFamily: "'Orbitron', sans-serif" }}>Color Palette</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm mb-2" style={{ color: colors.metallics.silver }}>Primary Colors</p>
                        <div className="grid grid-cols-4 gap-2">
                          <div className="h-12 rounded-md" style={{ backgroundColor: colors.primary.neon }}></div>
                          <div className="h-12 rounded-md" style={{ backgroundColor: colors.primary.purple }}></div>
                          <div className="h-12 rounded-md" style={{ backgroundColor: colors.primary.blue }}></div>
                          <div className="h-12 rounded-md" style={{ backgroundColor: colors.primary.pink }}></div>
                        </div>
                        <div className="grid grid-cols-4 gap-2 mt-1">
                          <div className="text-xs" style={{ color: colors.metallics.silver }}>#00f0ff</div>
                          <div className="text-xs" style={{ color: colors.metallics.silver }}>#9d4edd</div>
                          <div className="text-xs" style={{ color: colors.metallics.silver }}>#4361ee</div>
                          <div className="text-xs" style={{ color: colors.metallics.silver }}>#ff00a0</div>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm mb-2" style={{ color: colors.metallics.silver }}>Accent Colors</p>
                        <div className="grid grid-cols-4 gap-2">
                          <div className="h-12 rounded-md" style={{ backgroundColor: colors.accent.yellow }}></div>
                          <div className="h-12 rounded-md" style={{ backgroundColor: colors.accent.orange }}></div>
                          <div className="h-12 rounded-md" style={{ backgroundColor: colors.accent.red }}></div>
                          <div className="h-12 rounded-md" style={{ backgroundColor: colors.accent.green }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Typography System */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="rounded-xl border overflow-hidden"
                  style={{ 
                    backgroundColor: `${colors.backgrounds.medium}90`,
                    borderColor: colors.primary.purple,
                  }}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" 
                           style={{ backgroundColor: colors.primary.purple }}>
                        <Type size={20} />
                      </div>
                      <h3 className="text-xl font-bold" style={{ fontFamily: "'Orbitron', sans-serif" }}>Typography</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm mb-2" style={{ color: colors.metallics.silver }}>Headings - Orbitron</p>
                        <h4 className="text-2xl font-bold" style={{ fontFamily: "'Orbitron', sans-serif" }}>ROBOT COMBAT</h4>
                        <p className="text-xs mt-2" style={{ color: colors.metallics.silver }}>Use for titles, headings, and UI elements</p>
                      </div>
                      
                      <div>
                        <p className="text-sm mb-2" style={{ color: colors.metallics.silver }}>Body - Inter</p>
                        <p className="text-base">Clean, modern text for readable content</p>
                        <p className="text-xs mt-2" style={{ color: colors.metallics.silver }}>Use for paragraphs and descriptions</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Pattern Library */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="rounded-xl border overflow-hidden"
                  style={{ 
                    backgroundColor: `${colors.backgrounds.medium}90`,
                    borderColor: colors.primary.blue,
                  }}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" 
                           style={{ backgroundColor: colors.primary.blue }}>
                        <Grid size={20} />
                      </div>
                      <h3 className="text-xl font-bold" style={{ fontFamily: "'Orbitron', sans-serif" }}>Pattern Library</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm mb-2" style={{ color: colors.metallics.silver }}>Circuit Pattern</p>
                        <div className="h-16 rounded-md overflow-hidden">
                          <div className="w-full h-full" style={applyCircuitPattern(0.2)}></div>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm mb-2" style={{ color: colors.metallics.silver }}>Grid Pattern</p>
                        <div className="h-16 rounded-md overflow-hidden">
                          <div className="w-full h-full" style={applyGridPattern(0.2)}></div>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm mb-2" style={{ color: colors.metallics.silver }}>Blueprint Style</p>
                        <div className="h-16 rounded-md" style={{ 
                          backgroundColor: colors.primary.blue + '20',
                          backgroundImage: `linear-gradient(0deg, ${colors.primary.blue}30 1px, transparent 1px), 
                                           linear-gradient(90deg, ${colors.primary.blue}30 1px, transparent 1px)`,
                          backgroundSize: '20px 20px'
                        }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Fighter Cards Section */}
      <section id="fighters" className="py-20 md:py-32 relative" style={{ backgroundColor: colors.backgrounds.dark }}>
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(${colors.primary.purple}20 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent"
                  style={{ 
                    fontFamily: "'Orbitron', sans-serif",
                    backgroundImage: `linear-gradient(to right, ${colors.primary.neon}, ${colors.primary.purple})` 
                  }}>
                Choose Your Fighter
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {fighters.map((fighter) => (
                  <FighterCard 
                    key={fighter.id}
                    name={fighter.name}
                    image={fighter.image}
                    description={fighter.description}
                    color={fighter.color}
                    stats={fighter.stats}
                    colors={colors}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Join the Community */}
      <section id="community" className="py-20 md:py-32 relative" style={{ backgroundColor: colors.backgrounds.darkest }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, ${colors.primary.purple}30, transparent 70%)`
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent"
                  style={{ 
                    fontFamily: "'Orbitron', sans-serif",
                    backgroundImage: `linear-gradient(to right, ${colors.primary.neon}, ${colors.primary.blue})` 
                  }}>
                Join the Community
              </h2>

              <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: colors.metallics.silver }}>
                Connect with fellow robot fight enthusiasts and be part of the $RUMBLE revolution. The arena awaits.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center p-6 rounded-xl border hover:bg-gray-700 transition-colors"
                  style={{ 
                    backgroundColor: `${colors.backgrounds.medium}50`,
                    borderColor: colors.primary.blue
                  }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                       style={{ backgroundColor: colors.primary.blue }}>
                    <Twitter size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>Twitter</h3>
                  <p style={{ color: colors.metallics.silver }}>Follow for updates</p>
                </motion.a>

                <motion.a
  href="#"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex flex-col items-center justify-center p-6 rounded-xl border hover:bg-gray-700 transition-colors"
  style={{ 
    backgroundColor: `${colors.backgrounds.medium}50`,
    borderColor: colors.primary.neon
  }}
>
  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
       style={{ backgroundColor: colors.primary.neon }}>
    <Send size={32} />
  </div>
  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>Telegram</h3>
  <p style={{ color: colors.metallics.silver }}>Join the conversation</p>
</motion.a>

<motion.a
  href="#"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex flex-col items-center justify-center p-6 rounded-xl border hover:bg-gray-700 transition-colors"
  style={{ 
    backgroundColor: `${colors.backgrounds.medium}50`,
    borderColor: colors.primary.purple
  }}
>
  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
       style={{ backgroundColor: colors.primary.purple }}>
    <MessageCircle size={32} />
  </div>
  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>Discord</h3>
  <p style={{ color: colors.metallics.silver }}>Connect with the community</p>
</motion.a>
</div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="mt-16"
>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 mx-auto"
    style={{ 
      backgroundImage: `linear-gradient(to right, ${colors.primary.neon}, ${colors.primary.purple})`,
      boxShadow: `0 0 20px ${colors.primary.neon}60`
    }}
  >
    Buy $RUMBLE <Rocket size={18} />
  </motion.button>
</motion.div>
</div>
</AnimatedSection>
</div>
</section>

{/* Footer */}
<footer className="py-12 border-t" style={{ 
  backgroundColor: colors.backgrounds.darkest,
  borderColor: `${colors.backgrounds.medium}`
}}>
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-6 md:mb-0">
        <span className="text-2xl font-bold bg-clip-text text-transparent"
              style={{ 
                backgroundImage: `linear-gradient(to right, ${colors.primary.neon}, ${colors.primary.purple}, ${colors.primary.blue})` 
              }}>
          $RUMBLE
        </span>
      </div>

      <div className="flex gap-6 mb-6 md:mb-0">
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Twitter size={20} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Send size={20} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <MessageCircle size={20} />
        </a>
      </div>

      <div style={{ color: colors.metallics.silver }} className="text-sm">
        &copy; {new Date().getFullYear()} $RUMBLE. All rights reserved.
      </div>
    </div>
  </div>
</footer>
</div>
)
}

// Animated Section Component
function AnimatedSection({ children }) {
const ref = useRef(null)
const isInView = useInView(ref, { once: true, amount: 0.2 })

return (
<motion.div
  ref={ref}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
>
  {children}
</motion.div>
)
}

// Cyberpunk Background Component
function CyberpunkBackground({ colors }) {
return (
<div className="absolute inset-0 overflow-hidden">
  <div className="absolute inset-0" style={{ backgroundColor: colors.backgrounds.darkest }}></div>
  <motion.div
    className="absolute inset-0"
    style={{ 
      backgroundImage: `radial-gradient(circle at center, ${colors.primary.neon}30, transparent 70%)` 
    }}
    animate={{
      scale: [1, 1.1, 1],
      opacity: [0.5, 0.8, 0.5],
    }}
    transition={{
      duration: 8,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    }}
  ></motion.div>
  <motion.div
    className="absolute inset-0"
    style={{ 
      backgroundImage: `radial-gradient(circle at 60% 30%, ${colors.primary.purple}30, transparent 70%)` 
    }}
    animate={{
      scale: [1.1, 1, 1.1],
      opacity: [0.5, 0.7, 0.5],
    }}
    transition={{
      duration: 10,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    }}
  ></motion.div>
  <motion.div
    className="absolute inset-0"
    style={{ 
      backgroundImage: `radial-gradient(circle at 30% 70%, ${colors.primary.blue}30, transparent 70%)` 
    }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.7, 0.5],
    }}
    transition={{
      duration: 12,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    }}
  ></motion.div>

  {/* Digital Grid Lines */}
  <div className="absolute inset-0 overflow-hidden opacity-20">
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-[1px] left-0 right-0"
        style={{ 
          top: `${Math.random() * 100}%`,
          backgroundColor: colors.primary.neon
        }}
        animate={{
          opacity: [0, 1, 0],
          scaleX: [0, 1, 0],
          left: ["0%", `${Math.random() * 100}%`, "100%"],
        }}
        transition={{
          duration: Math.random() * 2 + 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          delay: Math.random() * 5,
        }}
      ></motion.div>
    ))}
  </div>
</div>
)
}

// Fighter Card Component with boxing-style stats
function FighterCard({ name, image, description, color, stats, colors }) {
return (
<motion.div
  whileHover={{ y: -10, scale: 1.02 }}
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }}
  className="rounded-xl border overflow-hidden flex flex-col"
  style={{ 
    backgroundColor: `${colors.backgrounds.medium}80`,
    borderColor: colors.primary.neon,
    boxShadow: `0 0 20px ${colors.primary.neon}20`
  }}
>
  <div className="h-3" style={{ background: color }}></div>
  
  {/* Fighter Image */}
  <div className="p-4 flex-1 flex flex-col">
    <div className="bg-gradient-to-b from-transparent to-black/40 rounded-lg overflow-hidden mb-4 relative">
      <img 
        src={image || "/api/placeholder/200/200"} 
        alt={name} 
        className="w-full h-48 object-cover object-center" 
      />
      <div className="absolute bottom-0 left-0 right-0 text-center p-2">
        <h3 className="text-xl font-bold" style={{ fontFamily: "'Orbitron', sans-serif" }}>{name}</h3>
      </div>
    </div>
    
    <p className="text-sm mb-4" style={{ color: colors.metallics.silver }}>
      {description}
    </p>
    
    {/* Boxing-style Stats */}
    <div className="space-y-3 mt-auto">
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs" style={{ color: colors.metallics.silver }}>
            <Zap size={12} className="inline mr-1" style={{ color: colors.accent.yellow }} />
            Punch Power
          </span>
          <span className="text-xs font-bold" style={{ color: colors.accent.yellow }}>
            {stats.punchPower}/100
          </span>
        </div>
        <div className="w-full h-2 rounded-full" style={{ backgroundColor: `${colors.backgrounds.darkest}` }}>
          <div 
            className="h-full rounded-full" 
            style={{ 
              width: `${stats.punchPower}%`,
              background: `linear-gradient(to right, ${colors.accent.yellow}, ${colors.accent.orange})`
            }}
          ></div>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs" style={{ color: colors.metallics.silver }}>
            <Battery size={12} className="inline mr-1" style={{ color: colors.accent.green }} />
            Battery Life
          </span>
          <span className="text-xs font-bold" style={{ color: colors.accent.green }}>
            {stats.batteryLife}/100
          </span>
        </div>
        <div className="w-full h-2 rounded-full" style={{ backgroundColor: `${colors.backgrounds.darkest}` }}>
          <div 
            className="h-full rounded-full" 
            style={{ 
              width: `${stats.batteryLife}%`,
              background: `linear-gradient(to right, ${colors.accent.green}, ${colors.primary.neon})`
            }}
          ></div>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs" style={{ color: colors.metallics.silver }}>
            <Cpu size={12} className="inline mr-1" style={{ color: colors.primary.purple }} />
            Blue Screen Freq.
          </span>
          <span className="text-xs font-bold" style={{ color: colors.primary.purple }}>
            {stats.blueScreenFreq}/100
          </span>
        </div>
        <div className="w-full h-2 rounded-full" style={{ backgroundColor: `${colors.backgrounds.darkest}` }}>
          <div 
            className="h-full rounded-full" 
            style={{ 
              width: `${stats.blueScreenFreq}%`,
              background: `linear-gradient(to right, ${colors.primary.blue}, ${colors.primary.purple})`
            }}
          ></div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="p-3 flex justify-between items-center border-t" 
       style={{ 
         borderColor: colors.backgrounds.darkest
       }}>
    <button 
      className="text-xs font-bold px-3 py-1 rounded-full"
      style={{ 
        backgroundImage: color,
        boxShadow: `0 0 10px ${colors.primary.neon}40`
      }}
    >
      Select Fighter
    </button>
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div 
          key={i} 
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: colors.primary.neon }}
        ></div>
      ))}
    </div>
  </div>
</motion.div>
)
}