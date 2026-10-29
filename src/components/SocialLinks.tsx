import type { ElementType } from 'react'
import { IconButton, Stack, Tooltip } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import EmailIcon from '@mui/icons-material/Email'
import LinkIcon from '@mui/icons-material/Link'
import { socialLinks } from '../data/socialLinks'

const icons: Record<string, ElementType> = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  x: XIcon,
  email: EmailIcon,
}

function SocialLinks() {
  const links = socialLinks.filter((link) => link.url)

  if (links.length === 0) {
    return null
  }

  return (
    <Stack direction="row" spacing={1} component="nav" aria-label="Contact links">
      {links.map((link) => {
        const Icon = icons[link.id] ?? LinkIcon
        const isMail = link.url.startsWith('mailto:')

        return (
          <Tooltip key={link.id} title={link.label}>
            <IconButton
              component="a"
              href={link.url}
              {...(isMail
                ? {}
                : { target: '_blank', rel: 'noopener noreferrer' })}
              aria-label={link.label}
              color="primary"
              size="large"
            >
              <Icon />
            </IconButton>
          </Tooltip>
        )
      })}
    </Stack>
  )
}

export default SocialLinks
