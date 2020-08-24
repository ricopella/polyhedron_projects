import HeaderStyled from "./Header.styles"
import React, { FC } from "react"
import styled from "../../styled"
import { BUTTON_ANIMATION } from "../../styles/constants"
import { Cycle, motion } from "framer-motion"

const Chevron = styled(motion.div)`
  border-left: 0.2em solid ${props => props.theme.colors.action};
  border-bottom: 0.2em solid ${props => props.theme.colors.action};
  height: 1.25rem;
  position: relative;
  width: 1.25rem;
`

const MenuToggle: FC<{ toggle: Cycle }> = ({ toggle }) => (
  <HeaderStyled.MenuToggleButton
    onClick={toggle}
    {...BUTTON_ANIMATION}
    className="hamburger_menu"
    aria-label="navigation button"
  >
    <Chevron
      variants={{
        open: {
          rotate: 135,
        },
        closed: {
          rotate: 315,
        },
      }}
      transition={{ duration: 0.5 }}
    />
  </HeaderStyled.MenuToggleButton>
)

export default MenuToggle
