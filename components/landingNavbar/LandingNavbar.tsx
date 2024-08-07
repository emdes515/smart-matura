'use client';

import Image from 'next/image';
import SocialIcon from '@/components/landingNavbar/socialIcons/SocialIcon';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import SocialHamburgerMenu from '@/components/landingNavbar/socialHamburgerMenu/SocialHamburgerMenu';

const LandingNavbar: React.FC = () => {
  const [isSocialHamurgerOpen, setIsSocialHamurgerOpen] = useState(false);

  return (
    <div className="m-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost relative w-52">
            <Image
              src="/logo_text.png"
              alt="logo"
              fill={true}
              style={{ objectFit: 'cover' }}
            />
          </a>
        </div>
        <div className="navbar-end">
          <div className="hidden sm:flex space-x-4">
            <SocialIcon icon="instagram" />
            <SocialIcon icon="facebook" />
            <SocialIcon icon="tiktok" />
            <SocialIcon icon="linkedin" />
          </div>
        </div>
        <SocialHamburgerMenu />
      </div>
    </div>
  );
};

export default LandingNavbar;
