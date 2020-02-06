import React from 'react';

import Link from 'next/link';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Query from '../components/query';

const query = gql`
  query {
    news: reports {
      nodes {
        title
        uri
      }
    }
  }
`;

const AllNews = () => (
  <div>
    <Query query={query}>
      {({ data: { news: { nodes: list }}}) =>
       <>
         <h1>News</h1>
         <ul>
         {
           list.map(news => (
             <li key={news.url}>
               <Link href={news.uri}>
                 <a>{news.title}</a>
               </Link>
             </li>))
         }
         </ul>
       </>
      }
    </Query>
  </div>
);

export default AllNews;
