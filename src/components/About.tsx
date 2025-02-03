import { motion } from "framer-motion";
import { TechGrid } from "./TechGrid";
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
            I am a Machine Learning Engineer & Data Scientist with 
            4+ years of experience in Generative AI, specializing in Large Language Models 
            (LLMs) and Retrieval-Augmented Generation (RAG). 
            I develop AI-driven solutions for natural language understanding, content generation, 
            and intelligent automation, leveraging retrieval-based techniques to enhance model accuracy and contextual relevance.


            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
            With expertise in optimizing AI pipelines, fine-tuning architectures, and scaling data workflows, I thrive in dynamic environments solving complex challenges. Passionate about cutting-edge AI, I aim to drive impactful innovations by leveraging LLMs,
             RAG, and AI-driven systems to build scalable, high-performing applications that push the boundaries of intelligent automation.</p>
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
