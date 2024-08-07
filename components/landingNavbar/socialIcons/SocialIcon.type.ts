import { IconType } from 'react-icons';

export interface ISocialIconProps {
  icon: icon;
}

type icon = 'facebook' | 'instagram' | 'linkedin' | 'x' | 'tiktok';

export interface IIconMap {
  facebook: 'https://facebook.com';
  instagram: 'https://instagram.com';
  linkedin: 'https://linkedin.com';
  x: 'https://x.com';
  tiktok: 'https://tiktok.com';
}

type facebookColor = '#1877F2';
type instagramColor = '#E1306C';
type linkedinColor = '#0A66C2';
type xColor = '#000000';
type tiktokColor = '#69C9D0';
