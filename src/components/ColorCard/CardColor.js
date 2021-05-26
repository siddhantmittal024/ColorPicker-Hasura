import React, { useState } from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import CardLabel from './CardLabel';
import { DELETE_COLOR } from '../../graphql/gqlQueries';
import { useMutation } from '@apollo/client';

const DeleteColor = ({ id }) => {
  const [del] = useMutation(DELETE_COLOR);

  const deleteColor = (e) => {
    e.stopPropagation();
    del({
      variables: {
        id
      }
    });
  };
  return (
    <Button
      onClick={deleteColor}
      borderRadius="0"
      bgColor="red.600"
      color="white"
      _hover={{ bgColor: 'red.600' }}
    >
      DELETE
    </Button>
  );
};

const CardColor = ({ props }) => {
  console.log(props);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const { hex, rgb, label, id } = props;

  let bgColor = hex;

  return (
    <Flex
      h="72"
      w="60"
      bgColor="white"
      borderRadius="lg"
      mx="auto"
      my="10"
      flexDirection="column"
      boxShadow="lg"
      border="0.5px"
    >
      <CardLabel />
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
            <DeleteColor id={id} />
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default CardColor;
