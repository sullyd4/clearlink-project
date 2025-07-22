import React, { useState } from 'react'; // Import useState
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-row justify-between items-center bg-slate-200 px-5 py-2 rounded-3xl w-[95%] mx-auto mt-12">
      <div className="flex flex-row gap-3 items-center">
        <img src="images/Group.svg" alt="comapny-logo" className="w-7 h-8" />
        <h1 className="font-semibold">
          ClearLink<span className="text-blue-500">.</span>
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row gap-10 items-center">
        <ul className="flex flex-row gap-10">
          <div className="flex gap-2 justify-center items-center cursor-pointer">
            <Link to="/products">Products</Link>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className="flex gap-2 justify-center items-center cursor-pointer">
            <Link to="/solutions">Solutions</Link>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className="flex gap-2 justify-center items-center cursor-pointer">
            <Link to="/resources">Resources</Link>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <Link to="/pricing">Pricing</Link>
        </ul>
      </div>

       {/* CTA Buttons - Desktop */}
      <div className="hidden md:flex flex-row gap-5">
        <button className="px-5 py-2 bg-white rounded-3xl border-2 border-slate-300">
          Talk to sales
        </button>
        <button className="px-5 py-2 bg-blue-500 rounded-3xl border text-white">
          Sign up for free
        </button>
      </div>


      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl" />
        </button>
      </div>

       {/* Mobile Menu - Dropdown */}
       {isMenuOpen && (
        <div className="absolute top-24 right-5 w-48 bg-white rounded-lg shadow-xl md:hidden">
          <ul className="flex flex-col items-center gap-4 p-4">
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
             <li className='pt-2'> <button className="px-5 py-2 bg-white rounded-3xl border-2 border-slate-300">
          Talk to sales
        </button></li>
            <li> <button className="px-5 py-2 bg-blue-500 rounded-3xl border text-white">
          Sign up for free
        </button></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;