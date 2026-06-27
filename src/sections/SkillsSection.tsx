import { Box, List, SimpleGrid, Text, Title } from '@mantine/core'
import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data'
import sectionClasses from './Section.module.css'
import classes from './SkillsSection.module.css'

export function SkillsSection() {
  return (
    <Box component="section" className={sectionClasses.section}>
      <SectionHeading id="skills" number="02">
        Technical skills
      </SectionHeading>
      <SimpleGrid className={classes.grid} cols={{ base: 1, sm: 3 }} spacing={0}>
        {skillGroups.map((group) => (
          <Box className={classes.group} key={group.title}>
            <Title className={classes.title} order={3}>
              {group.title}
            </Title>
            <List className={classes.list} listStyleType="none" spacing={2}>
              {group.items.map((item) => (
                <List.Item key={item}>
                  <Text inherit>{item}</Text>
                </List.Item>
              ))}
            </List>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}
