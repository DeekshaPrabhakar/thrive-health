'use client';

import { PropsWithChildren, useMemo } from 'react';
import { UrqlProvider, ssrExchange, fetchExchange, createClient, gql } from '@urql/next';
import { cacheExchange } from '@urql/exchange-graphcache';
import config from '../lib/config';

const GraphQLProvider = ({ children }: PropsWithChildren) => {
  // Memoize the client and ssr exchanges to prevent re-creation on each render
  const [client, ssr] = useMemo(() => {
    // ssrExchange is used to prevent the client from making requests on the server
    const ssr = ssrExchange({
      isClient: typeof window !== 'undefined'
    });

    //cacheExchange is used to cache the results of queries, mutations, and subscriptions
    //fetchExchange is used to make requests to the GraphQL server
    //createClient is used to create the client with the specified configuration so that it can be used in the UrqlProvider
    //The client is then passed to the UrqlProvider component along with the ssr exchange
    //The UrqlProvider component is then used to wrap the children components so that they can access the client
    //The client is then used to make requests to the GraphQL server
    const client = createClient({
      url: config.app.url,
      exchanges: [cacheExchange({}), ssr, fetchExchange]
    });

    return [client, ssr];
  }, []);

  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  );
};

export default GraphQLProvider;
