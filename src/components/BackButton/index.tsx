import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const BackButtonWrapper = styled(Link)`
  display: grid;
  align-items: center;
  background-color: black;
  border-radius: 50%;
  border: 0.125rem solid white;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 2rem;
  justify-items: center;
  left: 2%;
  opacity: 0.75;
  position: fixed;
  top: 4%;
  width: 2rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    opacity: 1;
  }
`

const BackButtonInner = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  border-left: 0.1875rem solid white;
  border-bottom: 0.1875rem solid white;
  margin-left: 0.25rem;
  transform: rotate(45deg);
`

const BackButton = () => (
  <BackButtonWrapper to="/">
    <BackButtonInner />
  </BackButtonWrapper>
)

export default BackButton
