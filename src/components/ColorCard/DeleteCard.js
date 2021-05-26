import { DELETE_COLOR } from '../../graphql/gqlQueries';
import { useMutation } from '@apollo/client';
import React from 'react';
import { Button } from '@chakra-ui/react';

const DeleteCard = ({ id }) => {
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

export default DeleteCard;
