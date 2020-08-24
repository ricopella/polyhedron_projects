import MenuToggle from './MenuToggle'
import Navigation from './Navigation'
import React, { FC, useRef } from 'react'
import Styled from './Header.styles'
import { useClickAway } from 'react-use'
import { useCycle } from 'framer-motion'

/**
 * Component that handles the Menu Hamburger and opens the side menu
 *
 */
const Header: FC<{}> = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const ref = useRef(null)

  // closes menu when clicking outside
  useClickAway(ref, () => {
    if (isOpen) {
      toggleOpen()
    }
  })

  return (
    <Styled.Nav
      animate={isOpen ? "open" : "closed"}
      isOpen={isOpen}
      initial={false}
      ref={ref}
    >
      <Styled.NavBackground variants={Styled.SIDEBAR_VARIANTS} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </Styled.Nav>
  )
}

export default Header
