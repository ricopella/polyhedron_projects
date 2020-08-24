export const MEDIA_BREAKPOINTS = {
  PHONE: `25.875rem`,
  SMALL_DESKTOP: `77.5rem`,
  TABLET: `48rem`,
}

export const COLORS = {
  BLACK: `#000000`,
  DARK_GRAY: `#777777`,
  NEON_GREEN: `#00FF00`,
  ORANGE: `#FF6600`,
  PURPLE: `#CC00FF`,
  WHITE: `#ffffff`,
}

export const SLIDE_IN_ANIMATION_OPTIONS = {
  animate: "visible",
  exit: "exit",
  initial: "hidden",
  variants: {
    exit: {
      opacity: 0,
      y: 30,
    },
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
}

export const FADE_IN_ANIMATION_OPTIONS = {
  animate: "visible",
  exit: "exit",
  initial: "hidden",
  transition: {
    duration: 0.25,
  },
  variants: {
    exit: {
      opacity: 0,
    },
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },
}

export const BUTTON_ANIMATION = {
  whileHover: {
    scale: 1.1,
  },
  whileTap: {
    scale: 0.95,
  },
}
