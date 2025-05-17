"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Rocket, ChevronDown, Twitter, MessageCircle, Send, Menu, X } from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? "bg-gray-900/90 backdrop-blur-md py-3" : "bg-transparent py-5"}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
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
            <button onClick={() => scrollToSection("about")} className="hover:text-cyan-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("fighters")} className="hover:text-cyan-400 transition-colors">
              Fighters
            </button>
            <button onClick={() => scrollToSection("community")} className="hover:text-cyan-400 transition-colors">
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
          className="fixed top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-md z-40 md:hidden"
        >
          <div className="flex flex-col p-4 gap-4">
            <button onClick={() => scrollToSection("about")} className="py-3 px-4 hover:bg-gray-800 rounded-md">
              About
            </button>
            <button onClick={() => scrollToSection("fighters")} className="py-3 px-4 hover:bg-gray-800 rounded-md">
              Fighters
            </button>
            <button onClick={() => scrollToSection("community")} className="py-3 px-4 hover:bg-gray-800 rounded-md">
              Community
            </button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <GlitchBackground />
        </div>

        <div className="container mx-auto px-4 z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-pink-500/20 text-pink-400 text-sm font-medium mb-4">
                JUST LAUNCHED
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            >
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                $RUMBLE
              </span>
              <span className="block text-2xl md:text-4xl mt-2">The Ultimate Robot Fight Token</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
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
                className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 font-bold text-lg flex items-center justify-center gap-2"
              >
                Join the Fight <Zap size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("community")}
                className="px-8 py-3 rounded-full bg-gray-800 border border-gray-700 font-bold text-lg hover:bg-gray-700 transition-colors"
              >
                Community
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
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ChevronDown size={32} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-500">
                About $RUMBLE
              </h2>

              <div className="space-y-6">
                <motion.p
                  className="text-xl md:text-2xl text-gray-300 leading-relaxed"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  The first memecoin fueled by robot carnage. Inspired by real robotic fight leagues. Built for degens,
                  powered by memes.
                </motion.p>

                <motion.p
                  className="text-lg text-gray-400 leading-relaxed"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
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
                    <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                      <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">0%</h3>
                      <p className="text-gray-400 mt-2">Tax</p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                      <h3 className="text-2xl md:text-3xl font-bold text-pink-400">100%</h3>
                      <p className="text-gray-400 mt-2">Community</p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                      <h3 className="text-2xl md:text-3xl font-bold text-purple-400">LP</h3>
                      <p className="text-gray-400 mt-2">Locked</p>
                    </div>
                    <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                      <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">∞</h3>
                      <p className="text-gray-400 mt-2">Potential</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Robot Fighter Cards */}
      <section id="fighters" className="py-20 md:py-32 bg-gray-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-500">
                Robot Fighters
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FighterCard
                  name="ELON SMACK"
                  description="A bot built for Twitter beef. Specializes in market manipulation and viral memes."
                  color="from-pink-500 to-purple-500"
                />

                <FighterCard
                  name="BeepCoin Destroyer"
                  description="Specializes in rugged FOMO attacks. Has never lost a battle against weak hands."
                  color="from-purple-500 to-cyan-500"
                />

                <FighterCard
                  name="HODL-9000"
                  description="Diamond hands built into its core. Can withstand any market crash with ease."
                  color="from-cyan-500 to-lime-500"
                />

                <FighterCard
                  name="The Liquidator"
                  description="Hunts for leveraged positions. No margin trader is safe from its wrath."
                  color="from-lime-500 to-yellow-500"
                />

                <FighterCard
                  name="FUD Crusher"
                  description="Demolishes fear, uncertainty, and doubt with facts and pure strength."
                  color="from-yellow-500 to-orange-500"
                />

                <FighterCard
                  name="Gas Fee Goblin"
                  description="Feeds on transaction fees. The higher the gas, the stronger it becomes."
                  color="from-orange-500 to-pink-500"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Join the Community */}
      <section id="community" className="py-20 md:py-32 bg-gray-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-500">
                Join the Community
              </h2>

              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Connect with fellow robot fight enthusiasts and be part of the $RUMBLE revolution. The arena awaits.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center p-6 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700 transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                    <Twitter size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Twitter</h3>
                  <p className="text-gray-300">Follow for updates</p>
                </motion.a>

                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center p-6 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700 transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center mb-4">
                    <Send size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Telegram</h3>
                  <p className="text-gray-300">Join the conversation</p>
                </motion.a>

                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center p-6 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700 transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center mb-4">
                    <MessageCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Discord</h3>
                  <p className="text-gray-300">Connect with the community</p>
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
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 font-bold text-lg flex items-center justify-center gap-2 mx-auto"
                >
                  Buy $RUMBLE <Rocket size={18} />
                </motion.button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
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

            <div className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} $RUMBLE. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Animated Section Component
function AnimatedSection({ children }: { children: React.ReactNode }) {
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

// Glitch Background Component
function GlitchBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gray-900"></div>
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.15),transparent_50%)]"
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
        className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(139,92,246,0.15),transparent_50%)]"
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
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,211,238,0.15),transparent_50%)]"
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

      {/* Glitch Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-cyan-400 left-0 right-0"
            style={{ top: `${Math.random() * 100}%` }}
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

// Fighter Card Component
function FighterCard({
  name,
  description,
  color,
}: {
  name: string
  description: string
  color: string
}) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="bg-gray-700/50 rounded-xl border border-gray-600 overflow-hidden"
    >
      <div className={`h-3 bg-gradient-to-r ${color}`}></div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">{name}</h3>
          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <Zap size={18} className="text-yellow-400" />
          </div>
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-400">Power Level: 9000+</div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-cyan-400"></div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}