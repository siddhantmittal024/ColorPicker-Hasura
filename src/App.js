import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import './App.css';
import { Box } from '@chakra-ui/react';

import ColorCardContainer from './components/ColorCardContainer';

const ADMIN_SECRET_KEY =
  'biNp3K5fkGAdjXyzw3Klp715Gd2eBRvbg6BVaX33SV5dkMX0FIldjVj4F67LdQWG';

function App() {
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link: new WebSocketLink({
      uri: 'wss://colorpicker.hasura.app/v1/graphql',
      options: {
        reconnect: true,
        lazy: true,
        connectionParams: {
          headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': ADMIN_SECRET_KEY
          }
        }
      }
    }),
    cache,
    connectToDevTools: true
  });

  return (
    <ApolloProvider client={client}>
      <Box
        minHeight="100vh"
        bgGradient="linear(to-t, blue.800, blue.900)"
        boxShadow="lg"
      >
        <Box padding="6">
          <ColorCardContainer />
        </Box>
      </Box>
    </ApolloProvider>
  );
}

export default App;
