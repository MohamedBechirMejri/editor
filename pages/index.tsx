import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Statusbar from "../components/Statusbar";
import Textarea from "../components/Textarea";
import BlockPicker from "../components/BlockPicker";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Editor</title>
      </Head>

      <Header />

      <main>
        <Statusbar />
        <Textarea />
        <BlockPicker />
      </main>
    </>
  );
};

export default Home;
