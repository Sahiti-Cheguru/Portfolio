import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

// Update the paths to local assets
const projects = [
  {
    title: 'MME Worldwide',
    description: 'Redesigned Event Management and Hospitality agency known for creating extraordinary, first-class experiences.',
    tech: ['JavaScript', 'CSS', 'HTML', 'SCSS', 'PHP'],
    github: 'https://github.com/GaneshVarma1',
    demo: 'https://mmecreativepartners.com/',
    image: 'mme.gif'
  },
  {
    title: 'FiDi Hospitality',
    description: 'Designed Full Web Application from Start to Finish with Custom CSS.',
    tech: ['JavaScript', 'CSS', 'HTML', 'SCSS', 'PHP'],
    github: 'https://github.com/GaneshVarma1',
    demo: 'https://www.fidihospitality.com',
    image: 'fidi.gif'
  },
  {
    title: 'Tesla Clone',
    description: 'Designed a meticulously detailed replica of the official Tesla website.',
    tech: ['HTML', 'SCSS', 'JavaScript'],
    github: 'https://github.com/GaneshVarma1/Tesla-website',
    demo: 'https://ganeshvarma1.github.io/Tesla-website/',
    image: 'tesla.gif'
  },
  {
    title: 'Fridge to Feast',
    description: 'Developed a web application that transforms simple ingredients into delectable meal suggestions.',
    tech: ['ReactJS', 'NextJS', 'APIDB', 'Hooks','Vue.js'],
    github: 'https://github.com/GaneshVarma1/Fridge-to-Feast',
    demo: 'https://fridge-to-feastapp.vercel.app//',
    image: 'fridgetofood.gif'
  },
  {
    title: 'Netflix Clone',
    description: 'Designed a meticulously detailed replica of the official Netflix website.',
    tech: ['Vue.js', 'React', 'NextJS', 'API'],
    github: 'https://github.com/GaneshVarma1/Netflix-clone',
    demo: 'https://netflixclonebysri.vercel.app//',
    image: 'netflix.gif'
  },
  {
    title: 'MME Rental Ecommerce',
    description: 'Re-designed an E-commerce store for Rental items.',
    tech: ['Wordpress', 'Woo-Commerce', 'JavaScript', 'PHP','Elementor'],
    github: 'https://github.com',
    demo: 'https://rentals.mmeink.com',
    image: 'mmerental.gif'
  },
  {
    title: 'GreenLeaf Resort',
    description: 'Secure cloud storage solution with file sharing and collaboration features.',
    tech: ['HTML', 'Javascript', 'SCSS', 'Gateway Integration'],
    github: 'https://github.com/GaneshVarma1/Greenleaf',
    demo: 'https://greenleaf-three.vercel.app/',
    image: 'kerala.gif'
  },
  {
    title: 'Flappy Bird Game',
    description: 'Mobile-first fitness tracking application with workout planning and progress monitoring.',
    tech: ['Javascript', 'HTML', 'CSS'],
    github: 'https://github.com/GaneshVarma1/flappy-bird',
    demo: 'https://ganeshvarma1.github.io/flappy-bird/',
    image: 'flappy.gif'
  },
  {
    title: 'Flownia',
    description: 'SAAS Application Re-designed total website from start.',
    tech: ['HTML', 'Bootstrap', 'CSS', 'Javascript'],
    github: 'https://github.com/GaneshVarma1/Flownia',
    demo: 'https://ganeshvarma1.github.io/Flownia/',
    image: 'flownia.gif'
  },
  {
    title: 'Rocket Apply (Start-up)',
    description: 'Educational platform with course creation, student management, and progress tracking.',
    tech: ['NextJs', 'React', 'AI', 'TailwindCSS'],
    github: 'https://github.com',
    demo: 'https://rocketapply.vercel.app/',
    image: 'rocketapply.gif'
  }
];

export function ProjectsGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </div>
  );
}
