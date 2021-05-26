import { Box } from '@chakra-ui/layout';
import React from 'react';

const CardCodes = ({ rgb, hex }) => {
  return (
    <Box mx="7">
      <Box fontSize="xl" mb="2">
        <strong>HEX:</strong> {hex}
      </Box>
      <Box fontSize="xl" mb="4">
        {' '}
        <strong>RGB:</strong> {rgb}
      </Box>
    </Box>
  );
};

export default CardCodes;
