import * as React from 'react';
import { FrontpageLayout } from '../layouts';
import { NavBar } from '../sections';

const Home: React.SFC = () => {
  return (
    <FrontpageLayout>
      <NavBar />
    </FrontpageLayout>
  );
};

export default Home;
