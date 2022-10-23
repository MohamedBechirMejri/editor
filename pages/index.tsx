import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Statusbar from "../components/Statusbar";
import Textarea from "../components/Textarea";
import BlockPicker from "../components/BlockPicker";
import { useState } from "react";

const Home: NextPage = () => {
  const [filter, setFilter] = useState("");
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <>
      <Head>
        <title>Editor</title>
      </Head>
      <Header />
      <main>
        <Statusbar />
        <Textarea
          filter={filter}
          setFilter={setFilter}
          isOverlayVisible={isOverlayVisible}
          setIsOverlayVisible={setIsOverlayVisible}
        />
        <BlockPicker
          filter={filter}
          setFilter={setFilter}
          isOverlayVisible={isOverlayVisible}
          setIsOverlayVisible={setIsOverlayVisible}
        />
      </main>
    </>
  );
};

export default Home;
