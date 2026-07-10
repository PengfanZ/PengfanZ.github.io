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
            I’m a full-stack software engineer with three years of experience at
            Lutron Electronics. I’m starting my M.S.E. at the University of
            Pennsylvania and am excited to explore future software engineering
            opportunities.
          </Text>
        </Grid.Col>
      </Grid>
    </Box>
  )
}
