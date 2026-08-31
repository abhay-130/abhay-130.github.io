import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const Icon = ({ children, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

export const MapPinIcon = (props: IconProps) => <Icon {...props}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></Icon>;
export const MailIcon = (props: IconProps) => <Icon {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.9 1.9 0 0 1-2.06 0L2 7" /></Icon>;
export const PhoneIcon = (props: IconProps) => <Icon {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.79.62 2.65a2 2 0 0 1-.45 2.11L8 9.76a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.86.29 1.75.5 2.65.62A2 2 0 0 1 22 16.92Z" /></Icon>;
export const LandmarkIcon = (props: IconProps) => <Icon {...props}><path d="m3 10 9-6 9 6" /><path d="M4 10h16" /><path d="M6 10v7m4-7v7m4-7v7m4-7v7M3 21h18M4 17h16" /></Icon>;
export const CodeIcon = (props: IconProps) => <Icon {...props}><path d="m8 9-4 3 4 3m8-6 4 3-4 3M14 5l-4 14" /></Icon>;
export const FilmIcon = (props: IconProps) => <Icon {...props}><rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18" /><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" /></Icon>;
export const ZapIcon = (props: IconProps) => <Icon {...props}><path d="M4 14a1 1 0 0 1-.78-1.63l9-11A.5.5 0 0 1 13 1.7l-1.14 6.86A1 1 0 0 0 12.85 9H20a1 1 0 0 1 .78 1.63l-9 11a.5.5 0 0 1-.88-.33l1.14-6.86A1 1 0 0 0 11.15 14Z" /></Icon>;
export const MenuIcon = (props: IconProps) => <Icon {...props}><path d="M4 12h16M4 6h16M4 18h16" /></Icon>;
export const XIcon = (props: IconProps) => <Icon {...props}><path d="M18 6 6 18M6 6l12 12" /></Icon>;
export const SunIcon = (props: IconProps) => <Icon {...props}><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></Icon>;
export const MoonIcon = (props: IconProps) => <Icon {...props}><path d="M12 3a6.5 6.5 0 0 0 9 9A9 9 0 1 1 12 3Z" /></Icon>;
export const PauseIcon = (props: IconProps) => <Icon {...props}><path d="M8 5v14M16 5v14" /></Icon>;
export const PlayIcon = (props: IconProps) => <Icon {...props}><path d="m8 5 11 7-11 7Z" /></Icon>;
export const CameraIcon = (props: IconProps) => <Icon {...props}><path d="M14.5 4 16 7h4a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4l1.5-3Z" /><circle cx="12" cy="13" r="3" /></Icon>;
export const StarIcon = (props: IconProps) => <Icon {...props}><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01Z" /></Icon>;
