import { motion } from "framer-motion"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "../../styled"

const Nav = styled(motion.nav)<{ isOpen: boolean }>`
  left: 0;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: ${props => (props.isOpen ? `8.75rem` : 0)};
`

const NavBackground = styled(motion.div)`
  background: ${props => props.theme.colors.navBackground};
  display: grid;
  position: absolute;
  width: 9.75rem;
`

const MenuItemUl = styled(motion.ul)`
  margin: 0 0;
  padding: 0 0;
  padding: 1.5625rem;
  position: absolute;
  top: 6.25rem;
  width: 14.375rem;
  display: grid;
  grid-row-gap: 1.5rem;
`

const MenuItemLi = styled(motion.li)`
  align-items: center;
  cursor: pointer;
  display: flex;
  list-style: none;
  margin-bottom: 1.25rem;
  margin: 0;
  padding: 0;

  &:hover {
    cursor: none;
  }

  &.active {
    pointer-events: all;

    &:hover {
      cursor: pointer;
    }
  }
`

const HomePageExternalLink = styled(OutboundLink)`
  color: ${props => props.theme.colors.action};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  align-self: center;
  justify-self: center;
  text-transform: capitalize;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &.active {
    color: ${props => props.theme.colors.accent};
  }
`

const HomepageLink = styled(AniLink)`
  color: ${props => props.theme.colors.action};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  align-self: center;
  justify-self: center;
  text-transform: capitalize;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &.active {
    color: ${props => props.theme.colors.accent};
  }
`

const MenuToggleButton = styled(motion.button)`
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  background: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: 3.125rem;
  left: 2rem;
  outline: none;
  position: absolute;
  top: 3rem;
  width: 3.125rem;
  z-index: 1000;

  @media (max-width: ${props => props.theme.media.s}) {
    left: 1rem;
  }
`

const Path = styled(motion.path)`
  stroke-line-cap: round;
  stroke-width: 0.1875rem;
  stroke: ${props => props.theme.colors.action};
`

const SocialNavWrapper = styled(motion.div)`
  position: absolute;
  bottom: 1rem;
  width: 100%;
`

const NAV_VARIANTS = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const SIDEBAR_VARIANTS = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 2.5rem 2.5rem)`,
    opacity: 0.7,
    height: `22.5rem`,
    transition: {
      type: "spring",
      stiffness: 20,
      duration: 0.25,
    },
  }),
  closed: {
    clipPath: "circle(1.875rem at 2.5rem 2.5rem)",
    top: 0,
    left: 0,
    opacity: 0,
    height: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const TOGGLE_WRAPPER_VARIANTS = {
  open: {
    opacity: 1,
    display: "grid",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
    transition: {
      y: { stiffness: 1000 },
    },
  },
}
const MENU_ITEM_VARIANTS = {
  open: {
    y: 0,
    opacity: 1,
    display: "initial",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export default {
  HomePageExternalLink,
  HomepageLink,
  MENU_ITEM_VARIANTS,
  MenuItemLi,
  MenuItemUl,
  MenuToggleButton,
  NAV_VARIANTS,
  Nav,
  NavBackground,
  Path,
  SIDEBAR_VARIANTS,
  SocialNavWrapper,
  TOGGLE_WRAPPER_VARIANTS,
}
