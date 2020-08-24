import { ThemeProvider } from 'emotion-theming';
import React, { FC } from 'react';
import Header from '../../components/Header';
import CenteredLogo from '../../components/Logo/HeadingCentered';
import styled from '../../styled';
import Theme from '../../styles/theme';
import Footer from '../Footer';
import SEO, { SEOProps } from '../SEO';

interface LayoutProps extends SEOProps {
  hasBackground?: boolean;
  hasCenteredLogo?: boolean;
  hasHeader?: boolean;
}

const Container = styled.div`
  display: grid;
  grid-row-gap: 0;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr max-content;
  min-height: 100vh;
  position: relative;
  width: 100vw;

  @media only screen and (max-width: ${(props) => props.theme.media.l}) {
    align-content: center;
  }

  @media only screen and (max-width: ${(props) => props.theme.media.m}) {
    align-content: center;
  }
`;

const LogoWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Layout: FC<LayoutProps> = ({
  children,
  title,
  description,
  image,
  hasBackground = true,
  hasHeader = true,
  hasCenteredLogo = false,
}) => (
  <React.Fragment>
    <ThemeProvider theme={Theme}>
      <SEO description={description} image={image} title={title} />
      {/* {hasHeader && <Header />} */}
      <Container className={hasBackground ? 'bouncy' : ''}>
        {hasCenteredLogo ? (
          <LogoWrapper>
            <CenteredLogo />
          </LogoWrapper>
        ) : (
          <div />
        )}
        <section>{children}</section>
        <Footer />
      </Container>
    </ThemeProvider>
  </React.Fragment>
);

export default Layout;
