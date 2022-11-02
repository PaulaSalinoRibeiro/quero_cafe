import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Routers } from './routers';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routers />
    </ApolloProvider>
  );
}

export default App;
