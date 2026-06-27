import { Box, Grid, Text } from '@mantine/core'
import classes from './AboutSection.module.css'

export function AboutSection() {
  return (
    <Box component="section" className={classes.about} id="about" aria-labelledby="about-title">
      <Grid gap={{ base: 32, md: 72 }}>
        <Grid.Col span={{ base: 12, sm: 1 }}>
          <Text className={classes.label} id="about-title">
            About
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 11 }}>
          <Text className={classes.lead}>
            Hi, I’m Pengfan Zhang (张芃帆). I’m a software engineer and incoming
            Computer and Information Science master’s student at the University
            of Pennsylvania.
          </Text>
        </Grid.Col>
      </Grid>
    </Box>
  )
}
