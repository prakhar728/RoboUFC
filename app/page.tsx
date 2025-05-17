"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Rocket,
  ChevronDown,
  Twitter,
  MessageCircle,
  Send,
  Menu,
  X,
  Cpu,
  Palette,
  Type,
  Grid,
  Battery,
} from "lucide-react";
import Navbar from "@/components/navbar";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Define the cyberpunk color system with electric yellow focus
  const colors = {
    primary: {
      yellow: "#f7df1e", // Electric yellow
      amber: "#ffb01f", // Warm amber
      orange: "#ff7700", // Cyber orange
      red: "#ff2a6d", // Neon red/pink
    },
    metallics: {
      steel: "#a7adc0", // Cool steel
      gunmetal: "#1e2334", // Dark gunmetal
      chrome: "#d3d7e8", // Light chrome
    },
    backgrounds: {
      blackest: "#0a0a0f", // Near black
      darker: "#121420", // Very dark blue-black
      dark: "#1b1e2e", // Dark blue-black
      medium: "#252a41", // Medium dark blue
    },
    accent: {
      cyan: "#00fff5", // Electric cyan
      purple: "#8a2be2", // Deep electric purple
      blue: "#2176ff", // Electric blue
      green: "#00ff9f", // Neon green
    },
    scanlines: {
      color: "#f7df1e10", // Yellow scanlines with 10% opacity
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  // Helper function to apply circuit pattern
  const applyCircuitPattern = (intensity = 0.05) => {
    return {
      backgroundImage: `radial-gradient(${colors.primary.yellow}${Math.round(
        intensity * 255
      ).toString(16)} 1px, transparent 1px), 
                        linear-gradient(to right, ${
                          colors.primary.yellow
                        }${Math.round(intensity * 100).toString(
        16
      )} 1px, transparent 1px)`,
      backgroundSize: "20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0",
    };
  };

  // Helper function to apply grid pattern
  const applyGridPattern = (intensity = 0.05) => {
    return {
      backgroundImage: `linear-gradient(${colors.primary.yellow}${Math.round(
        intensity * 100
      ).toString(16)} 1px, transparent 1px), 
                        linear-gradient(to right, ${
                          colors.primary.yellow
                        }${Math.round(intensity * 100).toString(
        16
      )} 1px, transparent 1px)`,
      backgroundSize: "40px 40px",
      backgroundPosition: "0 0, 0 0",
    };
  };

  // Helper function to apply scanlines
  const applyScanlines = (opacity = 0.1) => {
    return {
      backgroundImage: `linear-gradient(to bottom, transparent, transparent 50%, ${colors.scanlines.color} 50%, ${colors.scanlines.color})`,
      backgroundSize: "100% 4px",
      backgroundRepeat: "repeat",
      pointerEvents: "none",
    };
  };

  // Sample data for robot fighters
  const fighters = [
    {
      id: 1,
      name: "ELON SMACK",
      image: "/robo1.jpg", // Placeholder for your clean robot image
      description:
        "A bot built for Twitter beef. Specializes in market manipulation and viral memes.",
      color: `linear-gradient(to bottom right, ${colors.primary.yellow}, ${colors.primary.orange})`,
      stats: {
        punchPower: 85,
        batteryLife: 70,
        blueScreenFreq: 15,
      },
    },
    {
      id: 2,
      name: "HODL-9000",
      image: "/robo2.jpg", // Placeholder for your clean robot image
      description:
        "Diamond hands built into its core. Can withstand any market crash with ease.",
      color: `linear-gradient(to bottom right, ${colors.primary.amber}, ${colors.primary.red})`,
      stats: {
        punchPower: 75,
        batteryLife: 90,
        blueScreenFreq: 5,
      },
    },
    {
      id: 3,
      name: "FUD Crusher",
      image: "/robo3.jpg", // Placeholder for your clean robot image
      description:
        "Demolishes fear, uncertainty, and doubt with facts and pure strength.",
      color: `linear-gradient(to bottom right, ${colors.accent.green}, ${colors.accent.cyan})`,
      stats: {
        punchPower: 95,
        batteryLife: 60,
        blueScreenFreq: 25,
      },
    },
    {
      id: 4,
      name: "The Liquidator",
      image: "/robo4.jpg", // Placeholder for your clean robot image
      description:
        "Hunts for leveraged positions. No margin trader is safe from its wrath.",
      color: `linear-gradient(to bottom right, ${colors.accent.purple}, ${colors.accent.blue})`,
      stats: {
        punchPower: 90,
        batteryLife: 65,
        blueScreenFreq: 20,
      },
    },
  ];
  
  return (
    <div
      className="min-h-screen text-white overflow-hidden"
      style={{ backgroundColor: colors.backgrounds.blackest }}
    >
      {/* Scanlines overlay */}
      <div
        className="fixed inset-0 z-50 pointer-events-none"
        style={applyScanlines(0.05)}
      ></div>

      {/* Navigation */}
      {/* <Navbar scrollToSection={scrollToSection} colors={colors} /> */}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-16 left-0 right-0 backdrop-blur-md z-40 md:hidden"
          style={{ backgroundColor: `${colors.backgrounds.blackest}f2` }}
        >
          <div className="flex flex-col p-4 gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="py-3 px-4 rounded-md hover:bg-gray-800"
              style={{ borderLeft: `2px solid ${colors.primary.yellow}` }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("fighters")}
              className="py-3 px-4 rounded-md hover:bg-gray-800"
              style={{ borderLeft: `2px solid ${colors.primary.yellow}` }}
            >
              Fighters
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="py-3 px-4 rounded-md hover:bg-gray-800"
              style={{ borderLeft: `2px solid ${colors.primary.yellow}` }}
            >
              Community
            </button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>{" "}
          {/* Darker overlay for better text visibility */}
          <img
            src="/robot-fight-background.png"
            alt="Robot Fighting Background"
            className="absolute inset-0 w-full h-full"
          />
          {/* Scanlines overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to bottom, transparent, transparent 50%, ${colors.primary.yellow}10 50%, ${colors.primary.yellow}10)`,
              backgroundSize: "100% 4px",
              backgroundRepeat: "repeat",
              pointerEvents: "none",
              opacity: 0.15,
              zIndex: 20,
            }}
          ></div>
          {/* Additional glow/vignette effect */}
          <div
            className="absolute inset-0 z-15"
            style={{
              background: `radial-gradient(circle at center, transparent 30%, ${colors.backgrounds.blackest}90 100%)`,
              pointerEvents: "none",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span
                className="inline-block py-1 px-3 rounded-full text-sm font-medium mb-4"
                style={{
                  backgroundColor: `${colors.primary.yellow}20`,
                  color: colors.primary.yellow,
                }}
              >
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
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colors.primary.yellow}, ${colors.primary.amber}, ${colors.primary.orange})`,
                }}
              >
                $RUFC
              </span>
              <span className="block text-2xl md:text-4xl mt-2">
                The Ultimate Robot Fight Token
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
              style={{ color: colors.metallics.steel }}
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
                  backgroundImage: `linear-gradient(to right, ${colors.primary.yellow}, ${colors.primary.orange})`,
                  boxShadow: `0 0 15px ${colors.primary.yellow}80`,
                  color: colors.backgrounds.blackest,
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
                  backgroundColor: "transparent",
                  border: `2px solid ${colors.primary.yellow}`,
                  color: colors.primary.yellow,
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
                style={{ color: colors.metallics.steel }}
                className="hover:text-white transition-colors"
              >
                <ChevronDown size={32} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: colors.backgrounds.darker }}
      >
        <div
          className="absolute inset-0"
          style={applyCircuitPattern(0.03)}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2
                className="text-3xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  backgroundImage: `linear-gradient(to right, ${colors.primary.yellow}, ${colors.primary.orange})`,
                }}
              >
                About $RUFC
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
                  The first memecoin fueled by robot carnage. Inspired by real
                  robotic fight leagues. Built for degens, powered by memes.
                </motion.p>

                <motion.p
                  className="text-lg leading-relaxed"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  style={{ color: colors.metallics.steel }}
                >
                  In the arena of crypto, only the strongest survive. $RUFC
                  brings the excitement of robot combat to the blockchain,
                  creating a community of battle-hardened HODLers ready for the
                  ultimate showdown.
                </motion.p>

                <motion.div
                  className="pt-8 flex justify-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div
                      className="p-4 rounded-xl border"
                      style={{
                        backgroundColor: `${colors.backgrounds.dark}80`,
                        borderColor: colors.primary.yellow,
                        boxShadow: `0 0 10px ${colors.primary.yellow}40`,
                      }}
                    >
                      <h3
                        className="text-2xl md:text-3xl font-bold"
                        style={{ color: colors.primary.yellow }}
                      >
                        0%
                      </h3>
                      <p
                        className="mt-2"
                        style={{ color: colors.metallics.steel }}
                      >
                        Tax
                      </p>
                    </div>
                    <div
                      className="p-4 rounded-xl border"
                      style={{
                        backgroundColor: `${colors.backgrounds.dark}80`,
                        borderColor: colors.primary.amber,
                        boxShadow: `0 0 10px ${colors.primary.amber}40`,
                      }}
                    >
                      <h3
                        className="text-2xl md:text-3xl font-bold"
                        style={{ color: colors.primary.amber }}
                      >
                        100%
                      </h3>
                      <p
                        className="mt-2"
                        style={{ color: colors.metallics.steel }}
                      >
                        Community
                      </p>
                    </div>
                    <div
                      className="p-4 rounded-xl border"
                      style={{
                        backgroundColor: `${colors.backgrounds.dark}80`,
                        borderColor: colors.primary.orange,
                        boxShadow: `0 0 10px ${colors.primary.orange}40`,
                      }}
                    >
                      <h3
                        className="text-2xl md:text-3xl font-bold"
                        style={{ color: colors.primary.orange }}
                      >
                        LP
                      </h3>
                      <p
                        className="mt-2"
                        style={{ color: colors.metallics.steel }}
                      >
                        Locked
                      </p>
                    </div>
                    <div
                      className="p-4 rounded-xl border"
                      style={{
                        backgroundColor: `${colors.backgrounds.dark}80`,
                        borderColor: colors.accent.green,
                        boxShadow: `0 0 10px ${colors.accent.green}40`,
                      }}
                    >
                      <h3
                        className="text-2xl md:text-3xl font-bold"
                        style={{ color: colors.accent.green }}
                      >
                        ∞
                      </h3>
                      <p
                        className="mt-2"
                        style={{ color: colors.metallics.steel }}
                      >
                        Potential
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* Fighter Cards Section */}
      <section
        id="fighters"
        className="py-20 md:py-32 relative"
        style={{ backgroundColor: colors.backgrounds.darker }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(${colors.primary.yellow}20 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <h2
                className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  backgroundImage: `linear-gradient(to right, ${colors.primary.yellow}, ${colors.primary.orange})`,
                }}
              >
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
      <section
        id="community"
        className="py-20 md:py-32 relative"
        style={{ backgroundColor: colors.backgrounds.blackest }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, ${colors.primary.yellow}20, transparent 70%)`,
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2
                className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  backgroundImage: `linear-gradient(to right, ${colors.primary.yellow}, ${colors.primary.orange})`,
                }}
              >
                Join the Community
              </h2>

              <p
                className="text-xl mb-12 max-w-2xl mx-auto"
                style={{ color: colors.metallics.steel }}
              >
                Connect with fellow robot fight enthusiasts and be part of the
                $RUFC revolution. The arena awaits.
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
                    backgroundColor: `${colors.backgrounds.dark}50`,
                    borderColor: colors.primary.yellow,
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: colors.primary.yellow }}
                  >
                    <Twitter size={32} color={colors.backgrounds.blackest} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    Twitter
                  </h3>
                  <p style={{ color: colors.metallics.steel }}>
                    Follow for updates
                  </p>
                </motion.a>

                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center p-6 rounded-xl border hover:bg-gray-700 transition-colors"
                  style={{
                    backgroundColor: `${colors.backgrounds.dark}50`,
                    borderColor: colors.primary.amber,
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: colors.primary.amber }}
                  >
                    <Send size={32} color={colors.backgrounds.blackest} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    Telegram
                  </h3>
                  <p style={{ color: colors.metallics.steel }}>
                    Join the conversation
                  </p>
                </motion.a>

                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center p-6 rounded-xl border hover:bg-gray-700 transition-colors"
                  style={{
                    backgroundColor: `${colors.backgrounds.dark}50`,
                    borderColor: colors.primary.orange,
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: colors.primary.orange }}
                  >
                    <MessageCircle
                      size={32}
                      color={colors.backgrounds.blackest}
                    />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    Discord
                  </h3>
                  <p style={{ color: colors.metallics.steel }}>
                    Connect with the community
                  </p>
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
                    backgroundImage: `linear-gradient(to right, ${colors.primary.yellow}, ${colors.primary.orange})`,
                    boxShadow: `0 0 20px ${colors.primary.yellow}60`,
                    color: colors.backgrounds.blackest,
                  }}
                >
                  Buy $RUFC <Rocket size={18} />
                </motion.button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 border-t"
        style={{
          backgroundColor: colors.backgrounds.blackest,
          borderColor: `${colors.backgrounds.dark}`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span
                className="text-2xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${colors.primary.yellow}, ${colors.primary.amber}, ${colors.primary.orange})`,
                }}
              >
                $RUFC
              </span>
            </div>

            <div className="flex gap-6 mb-6 md:mb-0">
              <a
                href="#"
                className="hover:text-yellow-400 transition-colors"
                style={{ color: colors.metallics.steel }}
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-yellow-400 transition-colors"
                style={{ color: colors.metallics.steel }}
              >
                <Send size={20} />
              </a>
              <a
                href="#"
                className="hover:text-yellow-400 transition-colors"
                style={{ color: colors.metallics.steel }}
              >
                <MessageCircle size={20} />
              </a>
            </div>

            <div style={{ color: colors.metallics.steel }} className="text-sm">
              &copy; {new Date().getFullYear()} $RUFC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Animated Section Component
function AnimatedSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
  );
}

// Cyberpunk Background Component
function CyberpunkBackground({ colors }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: colors.backgrounds.blackest }}
      ></div>

      {/* Radial gradients */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, ${colors.primary.yellow}30, transparent 70%)`,
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
          backgroundImage: `radial-gradient(circle at 60% 30%, ${colors.primary.amber}30, transparent 70%)`,
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
          backgroundImage: `radial-gradient(circle at 30% 70%, ${colors.primary.orange}30, transparent 70%)`,
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
              backgroundColor: colors.primary.yellow,
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

      {/* Scanlines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, transparent 50%, ${colors.primary.yellow}10 50%, ${colors.primary.yellow}10)`,
          backgroundSize: "100% 4px",
          backgroundRepeat: "repeat",
          pointerEvents: "none",
          opacity: 0.15,
        }}
      ></div>
    </div>
  );
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
        backgroundColor: `${colors.backgrounds.dark}80`,
        borderColor: colors.primary.yellow,
        boxShadow: `0 0 20px ${colors.primary.yellow}20`,
      }}
    >
      <div className="h-3" style={{ background: color }}></div>

      {/* Fighter Image */}
      <div className="p-4 flex-1 flex flex-col">
        <div
          className="bg-gradient-to-b from-transparent to-black/40 rounded-lg overflow-hidden mb-4 relative"
          style={{ border: `1px solid ${colors.primary.yellow}40` }}
        >
          <img
            src={image || "/api/placeholder/200/200"}
            alt={name}
            className="w-full h-48 object-cover object-center"
          />
          <div
            className="absolute bottom-0 left-0 right-0 text-center p-2"
            style={{ backgroundColor: `${colors.backgrounds.blackest}90` }}
          >
            <h3
              className="text-xl font-bold"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                color: colors.primary.yellow,
              }}
            >
              {name}
            </h3>
          </div>
        </div>

        <p className="text-sm mb-4" style={{ color: colors.metallics.steel }}>
          {description}
        </p>

        {/* Boxing-style Stats */}
        <div className="space-y-3 mt-auto">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span
                className="text-xs"
                style={{ color: colors.metallics.steel }}
              >
                <Zap
                  size={12}
                  className="inline mr-1"
                  style={{ color: colors.primary.yellow }}
                />
                Punch Power
              </span>
              <span
                className="text-xs font-bold"
                style={{ color: colors.primary.yellow }}
              >
                {stats.punchPower}/100
              </span>
            </div>
            <div
              className="w-full h-2 rounded-full"
              style={{ backgroundColor: `${colors.backgrounds.blackest}` }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${stats.punchPower}%`,
                  background: `linear-gradient(to right, ${colors.primary.yellow}, ${colors.primary.orange})`,
                }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <span
                className="text-xs"
                style={{ color: colors.metallics.steel }}
              >
                <Battery
                  size={12}
                  className="inline mr-1"
                  style={{ color: colors.primary.amber }}
                />
                Battery Life
              </span>
              <span
                className="text-xs font-bold"
                style={{ color: colors.primary.amber }}
              >
                {stats.batteryLife}/100
              </span>
            </div>
            <div
              className="w-full h-2 rounded-full"
              style={{ backgroundColor: `${colors.backgrounds.blackest}` }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${stats.batteryLife}%`,
                  background: `linear-gradient(to right, ${colors.primary.amber}, ${colors.primary.yellow})`,
                }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <span
                className="text-xs"
                style={{ color: colors.metallics.steel }}
              >
                <Cpu
                  size={12}
                  className="inline mr-1"
                  style={{ color: colors.accent.cyan }}
                />
                Blue Screen Freq.
              </span>
              <span
                className="text-xs font-bold"
                style={{ color: colors.accent.cyan }}
              >
                {stats.blueScreenFreq}/100
              </span>
            </div>
            <div
              className="w-full h-2 rounded-full"
              style={{ backgroundColor: `${colors.backgrounds.blackest}` }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${stats.blueScreenFreq}%`,
                  background: `linear-gradient(to right, ${colors.accent.cyan}, ${colors.accent.blue})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="p-3 flex justify-between items-center border-t"
        style={{
          borderColor: colors.backgrounds.blackest,
        }}
      >
        <button
          className="text-xs font-bold px-3 py-1 rounded-full"
          style={{
            backgroundImage: color,
            boxShadow: `0 0 10px ${colors.primary.yellow}40`,
            color: colors.backgrounds.blackest,
          }}
        >
          Select Fighter
        </button>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: colors.primary.yellow }}
            ></div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
