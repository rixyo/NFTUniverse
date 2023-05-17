import type { NextPage } from "next";

import {
  MediaRenderer,
  useActiveListings,
  useContract,
} from "@thirdweb-dev/react";


const Home: NextPage = () => {

  return (
    <>
      {/* Content */}
      <MediaRenderer src="https://bafybeihk6p46ma7z2pp4w6n7xwxnw4bro2yqn27e4pukegnddlrfd4uilq.ipfs.dweb.link/0%20%2814%29.png" />
    </>
  );
};

export default Home;
