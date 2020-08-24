import getYear from "date-fns/getYear"
import React from "react"
import styled from "../../styled"

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: 1fr;
  justify-content: center;
  width: 100vw;
  margin: 1rem 0;
`

const FooterContent = styled.div`
  color: ${props => props.theme.colors.content};
  font-size: 0.75rem;
`

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      &copy;{`${getYear(new Date())} POLYHEDRON PROJECTS, LLC`}
    </FooterContent>
  </FooterContainer>
)

export default Footer
