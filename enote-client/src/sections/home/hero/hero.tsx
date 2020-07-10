import React, { Ref } from 'react';
export interface HeroProps {
  element: any;
}

const Hero: React.SFC<HeroProps> = ({ element }) => {
  return (
    <div
      ref={element}
      style={{ width: '100%', height: '100vh', background: 'black' }}
    ></div>
  );
};

export default Hero;
