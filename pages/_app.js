import React from 'react';
import { render } from 'react-dom';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import fetch from 'isomorphic-unfetch';

const client = new ApolloClient({
  fetch: fetch,
  uri: 'http://localhost/graphql',
});

export default ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);
