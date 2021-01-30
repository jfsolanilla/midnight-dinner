import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';

import EmployeeDashboard from './components/employee-dashboard';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache()
});

export function App() {
  return (
    <ApolloProvider client={ client }>
      <EmployeeDashboard />
    </ApolloProvider>
  );
}

export default App;
