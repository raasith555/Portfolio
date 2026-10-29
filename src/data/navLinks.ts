export type NavLinkItem = {
  label: string
  path: string
}

// Site navigation items used by the Navbar
export const navLinks: NavLinkItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
]
