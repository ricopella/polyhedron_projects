import React, { FC } from 'react'
import styled from '@emotion/styled'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const ContactLink = styled(OutboundLink)`
  &:hover {
    cursor: pointer;
  }
`

const ExternalLink: FC<{ href: string }> = ({ children, href = "" }) => (
  <ContactLink
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    title="href"
  >
    {children}
  </ContactLink>
)

export default ExternalLink
