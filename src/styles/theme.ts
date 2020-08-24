import { COLORS, MEDIA_BREAKPOINTS } from './constants'

const theme = {
  colors: {
    accent: COLORS.ORANGE,
    action: COLORS.NEON_GREEN,
    navBackground: COLORS.BLACK,
    primary: COLORS.BLACK,
    secondary: COLORS.PURPLE,
    content: COLORS.WHITE,
  },
  media: {
    s: MEDIA_BREAKPOINTS.PHONE,
    l: MEDIA_BREAKPOINTS.SMALL_DESKTOP,
    m: MEDIA_BREAKPOINTS.TABLET,
  },
  zIndex: {
    header: 1000,
  },
}

export type ThemeType = typeof theme
export default theme
