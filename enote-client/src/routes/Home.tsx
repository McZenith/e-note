import * as React from 'react';
import { FrontpageLayout } from '../layouts';
import { Box } from 'wix-style-react';
import { NavBar, Hero } from '../sections';

const Home: React.SFC = () => {
  return (
    <FrontpageLayout>
      <NavBar />

      <Hero />
      <Box backgroundColor="#ffbb22" height="100vh">
        HI
      </Box>
    </FrontpageLayout>
  );
};

export default Home;
