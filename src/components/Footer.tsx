'use client';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-secondary py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Yusuf Kedir</h3>
            <p className="text-gray-400">Software Engineer | Full-Stack Developer | AI Enthusiast</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-accent transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4 text-2xl">
              <a
                href="https://github.com/yu12suf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                title="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://linkedin.com/in/yusuf-kedir"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                title="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="mailto:yusuf.kedir@example.com"
                className="hover:text-accent transition-colors"
                title="Email"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Yusuf Kedir. All rights reserved.</p>
            <a
              href="https://github.com/yu12suf/My-Portfolio-Website"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors mt-4 md:mt-0"
            >
              View Source <FiExternalLink className="text-xs" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
