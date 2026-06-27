import {
  Anchor,
  Box,
  Button,
  Grid,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core'
import { ArrowIcon } from '../components/ArrowIcon'
import { SectionHeading } from '../components/SectionHeading'
import sectionClasses from './Section.module.css'
import classes from './ContactSection.module.css'

const fieldClassNames = {
  label: classes.label,
  input: classes.input,
}

export function ContactSection() {
  return (
    <Box component="section" className={`${sectionClasses.section} ${classes.section}`}>
      <SectionHeading id="contact" number="05">
        Contact
      </SectionHeading>
      <Grid className={classes.layout} gap={{ base: 48, md: 96 }}>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Stack component="address" className={classes.address} gap="lg">
            <Anchor href="mailto:pengfanz139@gmail.com">
              pengfanz139@gmail.com
            </Anchor>
            <Anchor href="tel:+19172397253">917 239 7253</Anchor>
            <Anchor
              href="https://linkedin.com/in/pengfan-zhang-1002021a3"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn <ArrowIcon external />
            </Anchor>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Box
            component="form"
            action="https://formspree.io/f/myybnyny"
            method="post"
          >
            <Grid gap="md">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  autoComplete="name"
                  classNames={fieldClassNames}
                  label="Name"
                  name="name"
                  required
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                  autoComplete="email"
                  classNames={fieldClassNames}
                  label="Email"
                  name="email"
                  required
                  type="email"
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <Textarea
                  classNames={fieldClassNames}
                  label="Message"
                  minRows={5}
                  name="message"
                  required
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <Button
                  className={classes.submit}
                  fullWidth
                  rightSection={<ArrowIcon />}
                  type="submit"
                  variant="outline"
                >
                  Send message
                </Button>
              </Grid.Col>
            </Grid>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  )
}
