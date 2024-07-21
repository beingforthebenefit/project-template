import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Dashboard />
      <Footer />
    </ApolloProvider>
  );
}

export default App;