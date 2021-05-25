import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client';
import './App.css';
import { Box } from '@chakra-ui/react';
//import { LocalForageWrapper, persistCache } from 'apollo3-cache-persist';
import ColorCardContainer from './components/ColorCardContainer';

const ADMIN_SECRET_KEY =
  'biNp3K5fkGAdjXyzw3Klp715Gd2eBRvbg6BVaX33SV5dkMX0FIldjVj4F67LdQWG';

function App() {
  const cache = new InMemoryCache();
  // persistCache({
  //   cache,
  //   storage: new LocalForageWrapper(window.localStorage)
  // });

  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://colorpicker.hasura.app/v1/graphql',
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': ADMIN_SECRET_KEY
      }
    }),
    cache,
    connectToDevTools: true
  });

  return (
    <ApolloProvider client={client}>
      <Box minHeight="100%" bgGradient="linear(to-t, blue.800, blue.900)">
        <Box padding="6">
          <ColorCardContainer />
        </Box>
      </Box>
    </ApolloProvider>
  );
}

export default App;
