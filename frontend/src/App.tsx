import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Message from './components/Message';
import { Button } from '@/components/ui/button';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <Button variant="default">Hello, world!</Button>
          <Message />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
