import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Services',
          href: `${import.meta.env.PUBLIC_BASE_URL}/#services`,
        },
        {
          text: 'Blueprint',
          href: `${import.meta.env.PUBLIC_BASE_URL}/#blueprint`,
        },
        {
          text: 'About us',
          href: `${import.meta.env.PUBLIC_BASE_URL}/about`,
        },
        {
          text: 'Contact',
          href: `${import.meta.env.PUBLIC_BASE_URL}/contact`,
        },
      ],
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'Contact Us', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        {
          text: 'Services',
          href: `${import.meta.env.PUBLIC_BASE_URL}/#services`,
        },
        {
          text: 'Blueprint',
          href: `${import.meta.env.PUBLIC_BASE_URL}/#blueprint`,
        },
        {
          text: 'About us',
          href: `${import.meta.env.PUBLIC_BASE_URL}/about`,
        },
        {
          text: 'Contact',
          href: `${import.meta.env.PUBLIC_BASE_URL}/contact`,
        },
      ],
    },
    {
      title: 'Support',
      links: [{ text: 'Contact Support', href: `${import.meta.env.PUBLIC_BASE_URL}/contact` }],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Careers', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: `${import.meta.env.PUBLIC_BASE_URL}/contact` },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/EdAncerys' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/ancerys/' },
  ],
};
