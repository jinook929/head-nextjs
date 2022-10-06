import { ApolloProvider } from "@apollo/client";
import client from "../src/apollo/client";
import '../styles/globals.css';
import Layout from "../components/layouts/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
