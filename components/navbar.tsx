// Navbar.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  scrollToSection: (id: string) => void;
  colors: {
    primary: {
      yellow: string;
      amber: string;
      orange: string;
      red: string;
    };
    backgrounds: {
      blackest: string;
      darker: string;
      dark: string;
      medium: string;
    };
  };
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, colors }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "tokenomics", label: "TOKENOMICS" },
    { id: "roadmap", label: "ROADMAP" },
    { id: "arena", label: "ARENA" },
    { id: "buy", label: "BUY" },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setActiveItem(id);
  };

  // CSS for glow animation
  const glowKeyframes = `
    @keyframes textGlow {
      0% { text-shadow: 0 0 5px ${colors.primary.yellow}, 0 0 10px ${colors.primary.yellow}, 0 0 15px ${colors.primary.yellow}; }
      50% { text-shadow: 0 0 10px ${colors.primary.yellow}, 0 0 20px ${colors.primary.yellow}, 0 0 30px ${colors.primary.yellow}; }
      100% { text-shadow: 0 0 5px ${colors.primary.yellow}, 0 0 10px ${colors.primary.yellow}, 0 0 15px ${colors.primary.yellow}; }
    }
    
    @keyframes borderGlow {
      0% { box-shadow: 0 0 5px ${colors.primary.yellow}, 0 0 10px ${colors.primary.yellow}; }
      50% { box-shadow: 0 0 10px ${colors.primary.yellow}, 0 0 20px ${colors.primary.yellow}; }
      100% { box-shadow: 0 0 5px ${colors.primary.yellow}, 0 0 10px ${colors.primary.yellow}; }
    }

    .nav-item:hover {
      animation: textGlow 1.5s infinite;
    }
    
    .nav-item-border:hover {
      animation: borderGlow 1.5s infinite;
    }
  `;

  return (
    <>
      <style>{glowKeyframes}</style>

      {/* Background Image - fill entire page */}
      <div
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/nav-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.5)",
        }}
      />

      {/* Semi-circular navbar */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 select-none">
        <div
          className="relative w-24 h-96"
          style={{
            backgroundImage: `linear-gradient(to right, ${colors.backgrounds.blackest}90, transparent)`,
            borderTopRightRadius: "100%",
            borderBottomRightRadius: "100%",
            overflow: "visible",
            backdropFilter: "blur(10px)",
            boxShadow: `0 0 20px ${colors.primary.yellow}60`,
            borderRight: `2px solid ${colors.primary.yellow}`,
            borderTop: `2px solid ${colors.primary.yellow}`,
            borderBottom: `2px solid ${colors.primary.yellow}`,
          }}
        >
          {/* The arc items */}
          {navItems.map((item, index) => {
            const angleStep = 140 / (navItems.length - 1);
            const angle = -70 + index * angleStep;
            const radius = 160; // pixels

            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.1 }}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: `
          rotate(${angle}deg)
          translate(${radius}px)
          rotate(${-angle}deg)
        `,
                }}
              >
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-item text-white font-bold text-sm py-2 px-3 whitespace-nowrap
                   ${activeItem === item.id ? "text-shadow-glow" : ""}`}
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    textShadow:
                      activeItem === item.id
                        ? `0 0 5px ${colors.primary.yellow}, 0 0 10px ${colors.primary.yellow}`
                        : "none",
                  }}
                >
                  <div
                    className="nav-item-border rounded-md"
                    style={{
                      border: `1px solid ${colors.primary.yellow}`,
                      boxShadow:
                        activeItem === item.id
                          ? `0 0 10px ${colors.primary.yellow}`
                          : `0 0 5px ${colors.primary.yellow}20`,
                      padding: "6px 8px",
                      backgroundColor: `${colors.backgrounds.blackest}60`,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.label}
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Small electric effect at the edge of the menu */}
        <div
          className="absolute top-1/2 left-6 transform -translate-y-1/2 w-5 h-28 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(ellipse at center, ${colors.primary.yellow}70 0%, transparent 70%)`,
            filter: "blur(2px)",
            opacity: 0.8,
          }}
        />
      </div>
    </>
  );
};

export default Navbar;
