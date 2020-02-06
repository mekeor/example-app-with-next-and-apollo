import React from 'react';

import { withRouter } from 'next/router'

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Query from '../../components/query';

const query = gql`
query($uri: String!) {
  news: nodeByUri(uri: $uri) {
    ... on Report {
      title
      uri
    }
  }
}
`;

const OneNews = ({router}) => (
  <div>
    { router && router.query && router.query.slug && (
      <Query query={query} variables={{uri: 'news/' + router.query.slug}}>
        {({ news: { title } }) =>
         <>
           <h1>{title}</h1>
         </>
        }
      </Query>
    )
  }
  </div>
);

export default withRouter(OneNews);
