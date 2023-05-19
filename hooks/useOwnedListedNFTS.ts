import { gql, useQuery } from "@apollo/client";
import useSigner from "../context/signer";

const useOwnedListedNFTS=()=>{
    const {address}=useSigner()
    const NFT_MARKET_ADDRESS=process.env.NEXT_PUBLIC_NFT_MARKET_CONTRACT_ADDRESS
    const GET_OWNED_LISTED_NFTS = gql`
    query GetOwnedListedNFTs($owner: String!) {
      nfts(
        where: {
          to: "${NFT_MARKET_ADDRESS}"
          from: $owner 
        }
      ) {
        id
        from
        to
        tokenURI
        price
      }
    }
  `;
const { loading, error, data } = useQuery(GET_OWNED_LISTED_NFTS, {
    variables: { owner: address ?? ""},skip:!address
});
const listedNFTS=data?.nfts
return {loading, error, listedNFTS}
}
export default useOwnedListedNFTS