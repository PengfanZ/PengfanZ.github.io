import { Box } from '@mantine/core'
import { ProjectAccordion } from '../components/ProjectAccordion'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data'
import sectionClasses from './Section.module.css'

export function WorkSection() {
  return (
    <Box component="section" className={sectionClasses.section}>
      <SectionHeading id="work" number="02">
        Selected work
      </SectionHeading>
      <ProjectAccordion projects={projects} />
    </Box>
  )
}
