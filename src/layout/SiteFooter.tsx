import { Anchor, Box, Group, Text } from '@mantine/core'
import classes from './SiteFooter.module.css'

export function SiteFooter() {
  return (
    <Box component="footer" className={classes.footer}>
      <Group justify="space-between" className={classes.inner}>
        <Anchor className={classes.name} href="#top">
          <span aria-hidden="true">&lt;/&gt;</span> Pengfan Zhang
        </Anchor>
        <Text className={classes.meta}>Built with React + TypeScript + Mantine</Text>
      </Group>
    </Box>
  )
}
