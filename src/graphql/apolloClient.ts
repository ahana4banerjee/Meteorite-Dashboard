import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({
  uri: "http://13.200.172.225:1337/graphql",
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
