import {
  Accordion,
  Anchor,
  Box,
  Group,
  List,
  Stack,
  Text,
} from '@mantine/core'
import type { Project } from '../data'
import { ArrowIcon } from './ArrowIcon'
import classes from './ProjectAccordion.module.css'

function ProjectSummary({ project }: { project: Project }) {
  return (
    <Box className={classes.summary}>
      <Text className={classes.tier}>{project.featured ? 'Featured' : 'Archive'}</Text>
      <Box>
        <Text className={classes.name}>{project.name}</Text>
        <Text className={classes.kind}>{project.kind}</Text>
      </Box>
      <Text className={classes.description}>{project.description}</Text>
      <Text className={classes.period}>{project.period}</Text>
    </Box>
  )
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <Box className={classes.details}>
      <Box />
      <Stack gap="md">
        {project.media?.type === 'video' ? (
          <video
            aria-label={project.media.alt}
            className={classes.video}
            controls
            preload="metadata"
          >
            <source src={project.media.src} type="video/mp4" />
          </video>
        ) : null}
        {project.highlights.length > 0 ? (
          <List className={classes.highlights} spacing="xs">
            {project.highlights.map((highlight) => (
              <List.Item key={highlight}>{highlight}</List.Item>
            ))}
          </List>
        ) : null}
      </Stack>
      <Stack className={classes.meta} gap="md">
        <Text>{project.technologies.join(' · ')}</Text>
        <Group gap="lg">
          {project.projectUrl ? (
            <Anchor href={project.projectUrl} rel="noreferrer" target="_blank">
              View project <ArrowIcon external />
            </Anchor>
          ) : null}
          <Anchor href={project.githubUrl} rel="noreferrer" target="_blank">
            GitHub <ArrowIcon external />
          </Anchor>
        </Group>
      </Stack>
    </Box>
  )
}

export function ProjectAccordion({ projects }: { projects: Project[] }) {
  return (
    <Accordion
      chevron={<span className={classes.plus}>+</span>}
      classNames={{
        root: classes.root,
        item: classes.item,
        control: classes.control,
        chevron: classes.chevron,
        label: classes.label,
        panel: classes.panel,
        content: classes.content,
      }}
      multiple
      order={3}
    >
      {projects.map((project) => (
        <Accordion.Item key={project.name} value={project.name}>
          <Accordion.Control aria-label={`Show details for ${project.name}`}>
            <ProjectSummary project={project} />
          </Accordion.Control>
          <Accordion.Panel>
            <ProjectDetails project={project} />
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}
