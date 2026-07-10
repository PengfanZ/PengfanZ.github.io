import { Box, Button, Grid, Group, Image, Stack, Text, Title } from '@mantine/core'
import { ArrowIcon } from '../components/ArrowIcon'
import classes from './HeroSection.module.css'

export function HeroSection() {
  return (
    <Box component="section" className={classes.hero} id="top" aria-labelledby="hero-title">
      <Grid align="center" gap={{ base: 44, md: 96 }}>
        <Grid.Col span={{ base: 12, sm: 7, md: 8 }}>
          <Stack gap={0}>
            <Title className={classes.name} id="hero-title" order={1}>
              Pengfan Zhang
            </Title>
            <Text className={classes.role}>Software Engineer</Text>
            <Group className={classes.actions} gap="md">
              <Button
                className={classes.primaryButton}
                component="a"
                href="#work"
                rightSection={<ArrowIcon />}
                variant="outline"
              >
                Explore my work
              </Button>
              <Button
                className={classes.secondaryButton}
                color="gray"
                component="a"
                href="#contact"
                rightSection={<ArrowIcon />}
                variant="outline"
              >
                Get in touch
              </Button>
            </Group>
            <Text className={classes.location}>New York · Philadelphia</Text>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 5, md: 4 }}>
          <Box component="figure" className={classes.portrait}>
            <Image
              alt="Pengfan Zhang"
              className={classes.portraitImage}
              fit="cover"
              src="/images/pengfan-zhang-9.jpg"
            />
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  )
}
