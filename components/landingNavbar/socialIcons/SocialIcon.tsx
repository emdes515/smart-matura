import { SocialIcon as ReactSocialIcon } from 'react-social-icons';
import { ISocialIconProps } from './SocialIcon.type';

const SocialIcon: React.FC<ISocialIconProps> = ({ icon }) => {
  return (
    <ReactSocialIcon
      network={icon}
      className="w-12 h-12 hover:scale-95 transition-transform hover:opacity-80"
    />
  );
};

export default SocialIcon;
