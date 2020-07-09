import * as React from 'react';
import { FrontpageLayoutProps } from './interface';
import { Box } from 'wix-style-react';
import f from './FrontpageLayout.scss';

const FrontpageLayout: React.SFC<FrontpageLayoutProps> = ({ children }) => {
  return (
    <Box className={f.main} flex={1} width="100vw" height="100vh">
      {children}
    </Box>
  );
};

export default FrontpageLayout;
