import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import { hexCodeGenerator, hexTorgbConvert } from '../utils/generateNewColor';

const ColorCardContainer = () => {
  return (
    <Box bgColor="white" margin="8" minHeight="90vh" borderRadius="md">
      COLOR PICKER
      <Button onClick={hexCodeGenerator}>CLICK ME</Button>
    </Box>
  );
};

export default ColorCardContainer;
