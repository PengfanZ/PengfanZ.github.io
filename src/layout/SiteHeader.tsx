import {
  Anchor,
  AppShell,
  Burger,
  Drawer,
  Group,
  Stack,
  Text,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { ArrowIcon } from '../components/ArrowIcon'
import classes from './SiteHeader.module.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function NavigationLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {navLinks.map((link) => (
        <Anchor
          className={classes.navLink}
          href={link.href}
          key={link.href}
          onClick={onNavigate}
        >
          {link.label}
        </Anchor>
      ))}
      <Anchor
        className={classes.resumeLink}
        href="/resources/pengfan_resume_v2.pdf"
        rel="noreferrer"
        target="_blank"
      >
        Resume
        <ArrowIcon external />
      </Anchor>
    </>
  )
}

export function SiteHeader() {
  const [opened, { close, toggle }] = useDisclosure(false)

  return (
    <>
      <AppShell.Header className={classes.header}>
        <Group className={classes.inner} justify="space-between">
          <Anchor className={classes.monogram} href="#top" aria-label="Back to top">
            PZ
          </Anchor>
          <Group className={classes.desktopNav} gap="clamp(1.5rem, 3.5vw, 3.6rem)">
            <NavigationLinks />
          </Group>
          <Burger
            aria-label="Toggle navigation"
            color="var(--portfolio-accent)"
            hiddenFrom="sm"
            opened={opened}
            onClick={toggle}
            size="sm"
          />
        </Group>
      </AppShell.Header>
      <Drawer
        classNames={{ content: classes.drawer, header: classes.drawerHeader }}
        hiddenFrom="sm"
        onClose={close}
        opened={opened}
        position="right"
        size="100%"
        title={<Text className={classes.drawerTitle}>Navigate</Text>}
      >
        <Stack gap={0}>
          <NavigationLinks onNavigate={close} />
        </Stack>
      </Drawer>
    </>
  )
}
