import { Box, Grid, List, Stack, Text, Timeline, Title } from '@mantine/core'
import { SectionHeading } from '../components/SectionHeading'
import { experiences } from '../data'
import sectionClasses from './Section.module.css'
import classes from './ExperienceSection.module.css'

export function ExperienceSection() {
  return (
    <Box component="section" className={sectionClasses.section}>
      <SectionHeading id="experience" number="01">
        Experience
      </SectionHeading>
      <Timeline
        active={experiences.length}
        bulletSize={20}
        classNames={{
          root: classes.timeline,
          item: classes.item,
          itemBody: classes.body,
          itemBullet: classes.bullet,
        }}
        lineWidth={1}
      >
        {experiences.map((experience) => (
          <Timeline.Item key={`${experience.company}-${experience.role}-${experience.period}`}>
            <Grid gap={{ base: 20, md: 48 }}>
              <Grid.Col span={{ base: 12, md: 9 }}>
                <Title className={classes.role} order={3}>
                  {experience.role}
                </Title>
                <Text className={classes.company}>{experience.company}</Text>
                <List className={classes.highlights} spacing={2}>
                  {experience.highlights.map((highlight) => (
                    <List.Item key={highlight}>{highlight}</List.Item>
                  ))}
                </List>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 3 }}>
                <Stack className={classes.meta} gap={0}>
                  <Text>{experience.location}</Text>
                  <Text>{experience.period}</Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </Timeline.Item>
        ))}
      </Timeline>
    </Box>
  )
}
