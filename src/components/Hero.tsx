import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { FloatingEmoji } from "./FloatingEmoji";
import { SocialLink } from "./SocialLink";
import MyImage from "../assets/Images/Me.jpg";
import { WavingHand } from "./WavingHand";
import AvatarCircles from "@/components/ui/avatar-circles";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { LinkPreview } from "@/components/ui/link-preview";

const avatars = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileUrl: "/",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1631913290783-490324506193?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileUrl: "/",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileUrl: "/",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileUrl: "/",
  },
  {
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileUrl: "/",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileUrl: "/",
  },
];

const emojis = [
  { emoji: "💻", delay: 0, duration: 4, position: { x: 75, y: 20 } },
  { emoji: "🛩️", delay: 1, duration: 5, position: { x: 85, y: 40 } },
  { emoji: "🍦", delay: 2, duration: 6, position: { x: 80, y: 60 } },
  { emoji: "🗽", delay: 1.5, duration: 4.5, position: { x: 70, y: 80 } },
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
              Hi <WavingHand />, This is{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Sahiti Cheguru
              </span>
            </h1>

            <p className="text-xl text-gray-700 dark:text-gray-300">
            Machine Learning Engineer & Data Scientist with 4+ years in Generative AI and data-centric innovations. 
            Passionate about crafting cutting-edge AI solutions and ready to drive impactful projects.
            </p>
{/* 
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
                Used by
              </span>
              <div>
                <AvatarCircles numPeople={10} avatarUrls={avatars} />
              </div>
              <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
                Developers.
              </span>
            </div> */}
            <div className="flex gap-6 pt-4">
              <SocialLink
                href="https://github.com/Sahiti-Cheguru"
                icon={<Github />}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/sahiti-goud-08a87417a/"
                icon={<Linkedin />}
                label="LinkedIn"
              />
              <SocialLink
                href="mailto:cheguru.sahithi@gmail.com"
                icon={<Mail />}
                label="Email"
              />
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1BrPG03icph8hL7WE-asnDGgtZfIa90cU/view?usp=drive_link" // Replace with the external link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-200 inline-block align-middle"
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/2 flex flex-col items-center relative"
          >
            {/* Magic UI Section */}
            <div className="z-10 flex items-center justify-center mb-4">
              <div
                className={cn(
                  "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                )}
              >
                <a
                  href="https://reactwind.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >

                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[15px] blur-2xl opacity-20 animate-pulse" />
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src={MyImage}
                alt="Sahiti Cheguru"
                className="relative w-80 h-96 object-cover rounded-[15px] border-2 border-blue-400/20 shadow-2xl"
              />

              {/* Floating Emojis */}
              {/* {emojis.map((emojiProps, index) => (
                <FloatingEmoji
                  key={index}
                  emoji={emojiProps.emoji}
                  delay={emojiProps.delay}
                  duration={emojiProps.duration}
                  initialPosition={emojiProps.position}
                />
              ))} */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
