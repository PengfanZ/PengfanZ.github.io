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
            Lutron Electronics and an incoming M.S.E. student in Computer and
            Information Science at the University of Pennsylvania. I’m interested
            in building practical tools that improve everyday life.
          </Text>
        </Grid.Col>
      </Grid>
    </Box>
  )
}
