import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import WalletModal from "../components/Modal/WalletModal";
import Navbar from "../components/navbar/navbar";
import { SignerProvider } from "../context/signer";
import {Toaster} from "react-hot-toast"


import "../styles/globals.css";
import EditModal from "../components/Modal/EditModal";


const activeChain = "goerli";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
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
   
    </ThirdwebProvider>
  );
}

export default MyApp;
