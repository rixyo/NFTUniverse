import type { NextPage } from "next";
import { CircleLoader } from "react-spinners";
import ListedNFTS from "../components/MarketItems/ListedNFTS";
import useListedNFTS from "../hooks/useGetListedNFTS";


const Home: NextPage = () => {
  const {loading,listedNFTS}=useListedNFTS()


  return (
    <>
      {/* Content */}
      {loading&&<div className="flex justify-center items-center h-full">
  <CircleLoader color="#3B82F6" className="" size={50} />
</div> 
}
      <ListedNFTS listedNFTS={listedNFTS} loading={loading}/>
   
    </>
  );
};

export default Home;
