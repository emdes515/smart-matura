import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';

const SocialHamburgerMenu: React.FC = () => {
  const [isSocialHamburgerOpen, setIsSocialHamburgerOpen] = useState(false);

  return (
    <div className="sm:hidden navbar-end">
      <button
        onClick={() => setIsSocialHamburgerOpen(!isSocialHamburgerOpen)}
        className="transition-transform duration-300 ease-in-out"
      >
        <FaBars className="text-4xl" />
      </button>
      <div
        className={`absolute top-20 right-[22px] flex flex-col space-y-4 transition-all duration-300 ease-in-out ${
          isSocialHamburgerOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <SocialIcon url="https://instagram.com" />
        <SocialIcon url="https://facebook.com" />
        <SocialIcon url="https://tiktok.com" />
        <SocialIcon url="https://linkedin.com" />
      </div>
    </div>
  );
};

export default SocialHamburgerMenu;
