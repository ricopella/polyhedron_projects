import React, { FC } from 'react'
import styled from '@emotion/styled'

interface SimpleSplashProps {
  title: string
}

const SimpleSplashContainer = styled.div`
  display: grid;
  align-content: center;
  grid-template-rows: 1fr max-content;
  height: 100%;
  max-width: 31.25rem;
  padding: 0 2rem 0 2rem;
  margin: 0 auto;
`

const SimpleSplashWrapper = styled.div`
  display: grid;
  align-content: center;
`

const SimpleSplashHeading = styled.h1`
  text-align: center;
`

const SimpleSplash: FC<SimpleSplashProps> = ({ children, title }) => {
  return (
    <SimpleSplashContainer>
      <SimpleSplashWrapper>
        <SimpleSplashHeading>{title}</SimpleSplashHeading>
        {children}
      </SimpleSplashWrapper>
    </SimpleSplashContainer>
  )
}

export default SimpleSplash
