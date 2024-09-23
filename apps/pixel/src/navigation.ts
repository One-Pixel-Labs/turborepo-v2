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
      title: 'Product',
      links: [
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Security', href: '#' },
        { text: 'Customers', href: '#' },
        { text: 'Integrations', href: '#' },
        { text: "What's New", href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Help Center', href: '#' },
        { text: 'Guides', href: '#' },
        { text: 'Contact Support', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Careers', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by One Pixel Labs · All rights reserved.
  `,
};
