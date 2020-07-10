import * as React from 'react';
import { Box } from 'wix-style-react';
export interface HeroProps {}

const Hero: React.SFC<HeroProps> = () => {
  return <Box backgroundColor="#000000" height="100vh"></Box>;
};

export default Hero;
