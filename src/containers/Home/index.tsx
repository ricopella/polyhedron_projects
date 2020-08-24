import React from 'react';
import Layout from '../../components/Layout';
import styled from '../../styled';

const HomeWrapper = styled.div`
  position: absolute;
  display: grid;
  top: 50%;
  transform: translateY(-50%);
  align-self: center;
  width: 100%;
`;

const ComingSoon = styled.div`
  text-align: center;
`;

const PAGE_TITLE = 'Polyhedron Projects';

const PAGE_DESCRIPTION = `Web Design & Creative Strategy for The Greater Good of All`;

const Home = () => {
  return (
    <Layout title={PAGE_TITLE} description={PAGE_DESCRIPTION}>
      <HomeWrapper>
        <ComingSoon>Coming Soon.</ComingSoon>
      </HomeWrapper>
    </Layout>
  );
};

export default Home;
