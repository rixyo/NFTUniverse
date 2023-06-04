import type { NextPage } from "next";
import ListedNFTS from "../components/MarketItems/ListedNFTS";
import useListedNFTS from "../hooks/useGetListedNFTS";


const Home: NextPage = () => {
  const {loading,listedNFTS}=useListedNFTS()


  return (
    <>
      {/* Content */}
      <ListedNFTS listedNFTS={listedNFTS} loading={loading}/>
   
    </>
  );
};

export default Home;
