import { Anchor, Box, Text, Title } from '@mantine/core'
import { ArrowIcon } from '../components/ArrowIcon'
import { SectionHeading } from '../components/SectionHeading'
import sectionClasses from './Section.module.css'
import classes from './RunningSection.module.css'

const STRAVA_PROFILE_URL = 'https://www.strava.com/athletes/156790831'
const STRAVA_EMBED_TOKEN = '61d7713f22a33ffc9928ae0eece75c5f33541c9c'
const STRAVA_ATHLETE_ID = '156790831'

const STRAVA_RECENT_RUNS_URL = `https://www.strava.com/athletes/${STRAVA_ATHLETE_ID}/latest-rides/${STRAVA_EMBED_TOKEN}`
const STRAVA_WEEKLY_SUMMARY_URL = `https://www.strava.com/athletes/${STRAVA_ATHLETE_ID}/activity-summary/${STRAVA_EMBED_TOKEN}`

export function RunningSection() {
  return (
    <Box component="section" className={sectionClasses.section}>
      <SectionHeading id="running" number="03">
        Running
      </SectionHeading>
      <Box className={classes.layout}>
        <Box className={classes.intro}>
          <Title className={classes.title} order={3}>
            Recent runs
          </Title>
          <Text className={classes.description}>
            A live snapshot of my latest activities, updated by Strava.
          </Text>
          <Anchor
            className={classes.profileLink}
            href={STRAVA_PROFILE_URL}
            rel="noreferrer"
            target="_blank"
          >
            Open my Strava profile <ArrowIcon external />
          </Anchor>
        </Box>

        <Box className={classes.embedBlock}>
          <Text className={classes.embedLabel}>This week</Text>
          <Box className={classes.embedFrame}>
            <iframe
              className={classes.summaryEmbed}
              height="160"
              loading="lazy"
              scrolling="no"
              src={STRAVA_WEEKLY_SUMMARY_URL}
              title="Pengfan Zhang's weekly running summary on Strava"
              width="300"
            />
          </Box>
        </Box>

        <Box className={classes.embedBlock}>
          <Text className={classes.embedLabel}>Latest activities</Text>
          <Box className={classes.embedFrame}>
            <iframe
              className={classes.activityEmbed}
              height="454"
              loading="lazy"
              scrolling="no"
              src={STRAVA_RECENT_RUNS_URL}
              title="Pengfan Zhang's latest runs on Strava"
              width="300"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
