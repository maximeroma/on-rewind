import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import * as serviceWorker from './serviceWorker';



const client = new ApolloClient({
  uri: process.env.REACT_APP_ON_REWIND_URL,
  cache: new InMemoryCache(),
  headers: {
    'x-account-key': process.env.REACT_APP_ACCOUNT_ID
  }
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
