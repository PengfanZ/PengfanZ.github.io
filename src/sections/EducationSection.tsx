import { Anchor, Box, Group, Stack, Text, Title } from '@mantine/core'
import { ArrowIcon } from '../components/ArrowIcon'
import { SectionHeading } from '../components/SectionHeading'
import sectionClasses from './Section.module.css'
import classes from './EducationSection.module.css'

export function EducationSection() {
  return (
    <Box component="section" className={sectionClasses.section}>
      <SectionHeading id="education" number="04">
        Education & honors
      </SectionHeading>
      <Group className={classes.content} justify="space-between" wrap="wrap">
        <Stack gap={4}>
          <Title className={classes.title} order={3}>
            New York University
          </Title>
          <Text className={classes.degree}>
            B.A. Mathematics and Computer Science · Class of 2023
          </Text>
        </Stack>
        <Anchor
          className={classes.honor}
          href="https://cas.nyu.edu/content/nyu-as/cas/academic-programs/bulletin/policies/honors-and-awards.html"
          rel="noreferrer"
          target="_blank"
        >
          Dean’s List · 2019—2022 <ArrowIcon external />
        </Anchor>
      </Group>
    </Box>
  )
}
