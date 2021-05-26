import { Box, Flex } from '@chakra-ui/layout';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { hexCodeGenerator, hexTorgbConvert } from '../utils/generateNewColor';
import { ADD_COLOR } from '../graphql/gqlQueries';
import { useMutation } from '@apollo/client';

const AddColorCard = () => {
  const [addNewColorCard] = useMutation(ADD_COLOR);

  const handleClick = () => {
    const hexCode = hexCodeGenerator();
    const rgbCode = hexTorgbConvert(hexCode);
    const label = 'Default Color Name';
    addNewColorCard({
      variables: {
        label,
        hexCode,
        rgbCode
      }
    });
  };

  return (
    <Flex
      h="72"
      w="64"
      as="button"
      bgColor="white"
      borderRadius="lg"
      boxShadow="lg"
      border="0.1px"
      mx="auto"
      alignItems="center"
      marginTop="2"
      marginBottom="10"
      flexDirection="column"
      _hover={{ bgColor: 'gray.200' }}
      onClick={handleClick}
    >
      {' '}
      <Box mt="30%">
        {' '}
        <PlusSquareIcon h="20" w="16" color="gray.600" />
        <Box mt="4" fontSize="xl" fontWeight="600">
          ADD A COLOR
        </Box>
      </Box>
    </Flex>
  );
};

export default AddColorCard;
