import { Box, Text, Title } from '@mantine/core'
import classes from './SectionHeading.module.css'

type SectionHeadingProps = {
  number: string
  id: string
  children: React.ReactNode
}

export function SectionHeading({
  number,
  id,
  children,
}: SectionHeadingProps) {
  return (
    <Box className={classes.heading} id={id}>
      <Text className={classes.number}>{number}</Text>
      <Title className={classes.title} order={2}>
        {children}
      </Title>
    </Box>
  )
}
