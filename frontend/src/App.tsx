import React from 'react'
import './App.css'
import {ApolloProvider} from '@apollo/client'
import client from './apolloClient'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Dashboard />
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
