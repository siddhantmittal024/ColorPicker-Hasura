import { Box } from '@chakra-ui/layout';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { hexCodeGenerator, hexTorgbConvert } from '../utils/generateNewColor';
import { ADD_COLOR } from '../graphql/gqlQueries';
import { useMutation } from '@apollo/client';

const AddColorCard = () => {
  const [addNewColorCard] = useMutation(ADD_COLOR);

  const handleClick = () => {
    const hexCode = hexCodeGenerator();
    const rgbCode = hexTorgbConvert(hexCode);
    const label = 'Default Color';
    addNewColorCard({
      variables: {
        label,
        hexCode,
        rgbCode
      }
    });
  };

  return (
    <Box
      h="72"
      w="60"
      as="button"
      bgColor="white"
      borderRadius="lg"
      boxShadow="lg"
      border="0.1px"
      mx="auto"
      my="10"
      _hover={{ bgColor: 'gray.200' }}
      onClick={handleClick}
    >
      <PlusSquareIcon h="20" w="16" color="gray.600" />
    </Box>
  );
};

export default AddColorCard;
