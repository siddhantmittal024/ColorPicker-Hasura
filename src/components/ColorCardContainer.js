import { Box, Grid } from '@chakra-ui/react';
import AddColorCard from './AddColorCard';
import { GET_ALL_COLORS } from '../graphql/gqlQueries';
import { useSubscription } from '@apollo/client';
import Spinner from '../components/Spinner/Spinner';
import CardColor from './ColorCard/CardColor';

const ColorCardContainer = () => {
  const { loading, error, data } = useSubscription(GET_ALL_COLORS);

  if (error) {
    return <Box>Some Error!! Please try again...</Box>;
  }

  return (
    <Box
      bgColor="gray.100"
      margin={['', '2', '2', '2', '8']}
      minHeight="90vh"
      borderRadius="md"
    >
      <Box fontSize={['4xl', '5xl']} fontWeight="700" textAlign="center" p="8">
        {' '}
        COLORS
      </Box>
      {loading && (
        <div>
          <Spinner />
        </div>
      )}
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(5, 1fr)'
        ]}
        width={['95%', '90%']}
        mx="auto"
      >
        {data &&
          data.colors.map((color) => (
            <CardColor key={color.id} props={color} />
          ))}
        <AddColorCard />
      </Grid>
    </Box>
  );
};

export default ColorCardContainer;
