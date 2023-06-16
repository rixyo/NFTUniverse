import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import WalletModal from "../components/Modal/WalletModal";
import Navbar from "../components/navbar/navbar";
import { SignerProvider } from "../context/signer";
import {Toaster} from "react-hot-toast"
import "../styles/globals.css";
import EditModal from "../components/Modal/EditModal";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const activeChain = "goerli";
const url=process.env.NEXT_PUBLIC_GRAPHQL_URL
const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
       <ApolloProvider client={client}>
      <Head>
        <title>NFTUniverse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="NFT Marketplace for NFTM"
        />
        <meta
          name="keywords"
          content="NFT opensea rarible nftm"
        />
      </Head>
      <SignerProvider>
    <Navbar />
    <Toaster/>
    <WalletModal/>
    <EditModal/>
      <Component {...pageProps} />
      </SignerProvider>
      </ApolloProvider>
   
    </ThirdwebProvider>
  );
}

export default MyApp;
