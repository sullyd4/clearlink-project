import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebookF, faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const linkSections = [
    {
      title: 'Product',
      links: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing'],
    },
    {
      title: 'Company',
      links: ['About us', 'Careers', 'Press', 'News', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Events', 'Help center', 'Tutorials', 'Support'],
    },
    {
      title: 'Legal',
      links: ['Terms', 'Privacy', 'Cookies', 'Licences', 'Contact'],
    },
  ];

  const socialIcons = [
    { icon: faLinkedin, href: '#', label: 'LinkedIn' },
    { icon: faTwitter, href: '#', label: 'X (Twitter)' },
    { icon: faInstagram, href: '#', label: 'Instagram' },
    { icon: faFacebookF, href: '#', label: 'Facebook' },
    { icon: faYoutube, href: '#', label: 'YouTube' },
    { icon: faGithub, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content grid - UPDATED */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* ClearLink Info Section */}
          <div className="text-left lg:w-1/3">
            <div className="flex items-center mb-4">
              <img src="/images/Group.svg" alt="ClearLink Logo" className="h-8 w-auto mr-2" />
              <span className="text-2xl font-semibold text-gray-900">
                ClearLink<span className="text-blue-600">.</span>
              </span>
            </div>
            <p className="text-gray-500 text-base leading-relaxed">
              ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!
            </p>
          </div>

          {/* Links and App Section Wrapper */}
          <div className='lg:w-2/3 flex flex-col md:flex-row gap-8'>
            {/* Link Sections Grid - UPDATED */}
            <div className="grid grid-cols-2 gap-8 flex-grow">
              {linkSections.map((section) => (
                <div key={section.title} className="text-left">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-base text-gray-500 hover:text-gray-900 transition-colors duration-150"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Get the App Section - UPDATED */}
            <div className="text-left">
              <h3 className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-4">
                Get the app
              </h3>
              {/* Buttons now use flexbox to be side-by-side */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                <a href="#" aria-label="Download on the App Store">
                    <img
                        src="images/Mobile app store badge.svg"
                        alt="App Store"
                        className="h-10 w-auto rounded-md shadow-sm hover:opacity-90 transition-opacity"
                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/135x40/cccccc/000000?text=App+Store+Error"; }}
                    />
                </a>
                <a href="#" aria-label="Get it on Google Play">
                    <img
                        src="images/Mobile app store badge (1).svg"
                        alt="Google Play"
                        className="h-10 w-auto rounded-md shadow-sm hover:opacity-90 transition-opacity"
                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/135x40/cccccc/000000?text=Play+Store+Error"; }}
                    />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright and Social Icons */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-base text-gray-400 order-2 sm:order-1 mt-4 sm:mt-0">
            &copy; {new Date().getFullYear()} ClearLink. All rights reserved.
          </p>
          <div className="flex space-x-6 order-1 sm:order-2">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-gray-500 transition-colors duration-150"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;