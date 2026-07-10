import { Box, Group, List, Stack, Text, Title } from '@mantine/core'
import { SectionHeading } from '../components/SectionHeading'
import { education } from '../data'
import sectionClasses from './Section.module.css'
import classes from './EducationSection.module.css'

export function EducationSection() {
  return (
    <Box component="section" className={sectionClasses.section}>
      <SectionHeading id="education" number="04">
        Education & honors
      </SectionHeading>
      <Stack className={classes.content} gap={0}>
        {education.map((entry) => (
          <Group
            className={classes.entry}
            justify="space-between"
            key={entry.school}
            wrap="wrap"
          >
            <Stack gap={4}>
              <Title className={classes.title} order={3}>
                {entry.school}
              </Title>
              <Text className={classes.degree}>{entry.degree}</Text>
              {entry.details ? (
                <List className={classes.details} spacing={2}>
                  {entry.details.map((detail) => (
                    <List.Item key={detail}>{detail}</List.Item>
                  ))}
                </List>
              ) : null}
            </Stack>
            <Stack className={classes.meta} gap={2}>
              <Text>{entry.location}</Text>
              <Text>{entry.period}</Text>
            </Stack>
          </Group>
        ))}
      </Stack>
    </Box>
  )
}
