import React from 'react';
import { Github, Linkedin, Mail, Youtube, Instagram, FileDown } from 'lucide-react';
import { SocialLink } from './SocialLink';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/sahiti-goud-08a87417a/',
    icon: Linkedin,
    label: 'LinkedIn'
  },
  {
    href: 'https://github.com/Sahiti-Cheguru',
    icon: Github,
    label: 'GitHub'
  },
  {
    href: '',
    icon: Youtube,
    label: 'YouTube'
  },
  {
    href: '',
    icon: Instagram,
    label: 'Instagram'
  },
  {
    href: '',
    icon: FileDown,
    label: 'Download Resume'
  },
  {
    href: 'mailto:cheguru.sahithi@gmail.com',
    icon: Mail,
    label: 'Email'
  }
];

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
            Designed by{' '}
            <span className="font-medium text-gray-900 dark:text-white">
            SAHITI CHEGURU 
            </span>
          </p>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.label}
                href={link.href}
                icon={link.icon}
                label={link.label}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}