import { DocumentationSidebar } from './documentation'
import { NewsSidebar } from './news'
import type { SidebarItem } from './sidebar-item'

export const GlobalSidebar: SidebarItem[] = [
  {
    text: 'Getting Started',
    link: '/getting-started/',
  },
  {
    text: 'News',
    collapsed: true,
    items: NewsSidebar,
    link: '/news/',
  },
  {
    text: '文档',
    collapsed: true,
    items: DocumentationSidebar,
    link: '/docs/',
  },
  {
    text: 'Sponsor Iconify',
    link: '/sponsors/',
  },
  {
    text: 'About Iconify',
    link: '/about/',
  },
  {
    text: 'Iconify Support',
    link: '/support/',
  },
  {
    text: 'History',
    link: '/about/history',
  },
  {
    text: 'Privacy',
    link: '/privacy/',
  },
]
