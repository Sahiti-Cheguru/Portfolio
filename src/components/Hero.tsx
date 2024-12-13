import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { FloatingEmoji } from './FloatingEmoji';
import { SocialLink } from './SocialLink';
import HeroImage from '../assets/Images/Hero.png'; 
import { WavingHand } from './WavingHand';

const emojis = [
  { emoji: '💻', delay: 0, duration: 4, position: { x: 75, y: 20 } },
  { emoji: '🚀', delay: 1, duration: 5, position: { x: 85, y: 40 } },
  { emoji: '🌟', delay: 2, duration: 6, position: { x: 80, y: 60 } },
  { emoji: '⚡', delay: 1.5, duration: 4.5, position: { x: 70, y: 80 } },
];

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="relative max-w-7xl mx-auto px-4 pt-20 md:pt-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12"
        >
          {/* Left Side */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 text-gray-900 dark:text-white space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi <WavingHand />, This is{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Sri Ganesh Shiramshetty
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300">
              A passionate Full Stack Software Engineer with 4+ years of experience in building
              scalable applications and creating exceptional user experiences.
            </p>

            <div className="flex gap-6 pt-4">
              <SocialLink href="https://github.com/GaneshVarma1" icon={<Github />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/sriganeshshiramshetty/" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="https://www.instagram.com/varmaaa.x_/" icon={<Instagram />} label="Instagram" />
              <SocialLink href="mailto:sriganeshshiram@gmail.com" icon={<Mail />} label="Email" />
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1BrPG03icph8hL7WE-asnDGgtZfIa90cU/view?usp=drive_link" // Replace with the external link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-200 inline-block align-middle"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Right Side */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/2 flex justify-center items-center relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[15px] blur-2xl opacity-20 animate-pulse" />
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src={HeroImage}
                alt="Sri Ganesh Shiramshetty"
                className="relative w-80 h-96 object-cover rounded-[15px] border-2 border-blue-400/20 shadow-2xl"
              />
              
              {/* Floating Emojis */}
              {emojis.map((emojiProps, index) => (
                <FloatingEmoji 
                  key={index} 
                  emoji={emojiProps.emoji} 
                  delay={emojiProps.delay} 
                  duration={emojiProps.duration} 
                  initialPosition={emojiProps.position}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}