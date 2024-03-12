export interface NavItem {
  path: string;
  label: string;
}

export const useMenu = (): NavItem[] => {
  return [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/properties',
    label: 'Properties',
  },
  {
    path: '/blog',
    label: 'Blog',
  },
  {
    path: '/about',
    label: 'About Us',
  },
  {
    path: '/contact',
    label: 'Contact Us',
  },
  ];
};