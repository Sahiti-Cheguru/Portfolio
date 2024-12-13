import React from 'react';
import { motion } from 'framer-motion';
import { TechGrid } from './TechGrid';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>
        
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none dark:prose-invert"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
              With over 4 years of experience in full-stack development, I specialize in building
              scalable web applications using modern technologies. My passion lies in creating
              efficient, maintainable code and delivering exceptional user experiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I've successfully led multiple projects from conception to deployment, collaborating
              with cross-functional teams and implementing best practices in software development.
            </p>
          </motion.div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-200">
              Technical Skills & Tools
            </h3>
            <TechGrid />
          </div>
        </div>
      </div>
    </section>
  );
}