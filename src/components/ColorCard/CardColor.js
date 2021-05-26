import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import CardLabel from './CardLabel';
import DeleteCard from './DeleteCard';
import CardCodes from './CardCodes';

const CardColor = ({ props }) => {
  //console.log(props);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const { hex, rgb, label, id } = props;

  let bgColor = hex;

  return (
    <Flex
      h="72"
      w="68"
      bgColor="white"
      borderRadius="lg"
      mx="auto"
      marginTop={['', '2']}
      marginBottom="10"
      //my="10"
      flexDirection="column"
      boxShadow="lg"
      border="0.5px"
    >
      <CardLabel id={id} label={label} />
      <Box
        h="45%"
        w="80%"
        bgColor={bgColor}
        m="auto"
        onMouseEnter={() => setShowDeleteButton(true)}
        onMouseLeave={() => setShowDeleteButton(false)}
      >
        {showDeleteButton && (
          <Box>
            <DeleteCard id={id} />
          </Box>
        )}
      </Box>
      <Box>
        <CardCodes rgb={rgb} hex={hex} />
      </Box>
    </Flex>
  );
};

export default CardColor;
