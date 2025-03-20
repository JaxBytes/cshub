import type { DefaultTheme } from 'vitepress'
//右上角的导航栏
const DocumentationNav: DefaultTheme.NavItemWithLink[] = [
  { text: 'Documentation', link: '/docs/' },
  { text: 'Icons and Icon Sets', link: '/docs/icons/', activeMatch: '^/docs/icons/' },
  { text: 'How to Use Icons', link: '/docs/usage/', activeMatch: '^/docs/(usage|design|iconify-icon|icon-components)/' },
  { text: 'Libraries for Developers', link: '/docs/libraries/', activeMatch: '^/docs/(libraries|types)/' },
  { text: 'Iconify API', link: '/docs/api/', activeMatch: '^/docs/api/' },
]

const AboutNav: DefaultTheme.NavItemWithLink[] = [
  { text: 'About Iconify', link: '/about/' },
  { text: 'Support', link: '/support/' },
  { text: 'History', link: '/about/history' },
  { text: 'Privacy', link: '/privacy/' },
]

export const Nav: DefaultTheme.NavItem[] = [
  {
    text: 'News',
    link: '/news/',
    activeMatch: '^/news/',
  },
  {
    text: 'Icons',
    link: 'https://icon-sets.iconify.design/',
    target: '_blank',
  },
  {
    text: 'Docs',
    items: DocumentationNav,
    activeMatch: '^/docs/',
  },
  {
    text: 'Blog',
    link: '/blog/',
    activeMatch: '^/blog/',
  },
  {
    text: 'Sponsor',
    link: '/sponsors/',
  },
  {
    text: '关于',
    items: AboutNav,
    activeMatch: '^/(about|support|privacy)/',
  },
]
