import { gql, useQuery } from "@apollo/client";
import useSigner from "../context/signer";

const useGetOwnedNFTS=()=>{
    const {address}=useSigner()
    const GET_NFTS = gql `
  query GetNFTS($owner: String!) {
    nfts(where: { to: $owner }) {
        id
        from
        to
        tokenURI
      }
  }
`;
const { loading, error, data } = useQuery(GET_NFTS, {
    variables: { owner: address ?? ""},skip:!address
});
const ownedNFTS=data?.nfts
return {loading, error, ownedNFTS}
}
export default useGetOwnedNFTS
