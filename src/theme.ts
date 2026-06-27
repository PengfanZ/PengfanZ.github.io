import { createTheme, rem } from '@mantine/core'

export const theme = createTheme({
  primaryColor: 'portfolioAmber',
  primaryShade: 5,
  fontFamily: "'DM Sans', Arial, sans-serif",
  headings: {
    fontFamily: "'DM Sans', Arial, sans-serif",
    fontWeight: '600',
  },
  colors: {
    portfolioAmber: [
      '#fff8e2',
      '#ffedbd',
      '#ffe092',
      '#ffd263',
      '#ffc43d',
      '#ffb31a',
      '#e89b00',
      '#bd7900',
      '#915900',
      '#653c00',
    ],
  },
  radius: {
    xs: rem(3),
    sm: rem(5),
    md: rem(8),
    lg: rem(12),
    xl: rem(20),
  },
  cursorType: 'pointer',
  focusRing: 'auto',
})
