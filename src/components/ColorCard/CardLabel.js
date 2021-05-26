import { useMutation } from '@apollo/client';
import { Input } from '@chakra-ui/input';
import React, { useState, useEffect } from 'react';
import { UPDATE_COLOR_LABEL } from '../../graphql/gqlQueries';

const CardLabel = ({ id, label }) => {
  const [Label, setLabel] = useState(label);
  const [updateColorLabel] = useMutation(UPDATE_COLOR_LABEL);

  useEffect(() => {
    setLabel(label);
  }, [label]);

  const labelHandler = (e) => {
    e.preventDefault();
    if (label !== Label) {
      updateColorLabel({
        variables: {
          id,
          label: Label
        }
      });
    }
  };

  return (
    <Input
      value={Label}
      width="90%"
      margin="auto"
      borderRadius="0"
      border="none"
      borderBottom="1px"
      borderBottomColor="gray.200"
      fontSize="22px"
      textAlign="center"
      _focus={{
        border: 'none',
        borderBottom: '1px',
        borderBottomColor: 'gray.200'
      }}
      onChange={(e) => setLabel(e.target.value)}
      onBlur={labelHandler}
    />
  );
};

export default CardLabel;
