import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  FiArrowDownLeft,
  FiBookOpen,
  FiCheckCircle,
  FiChevronDown,
  FiChevronsRight,
  FiClock,
  FiCloud,
  FiMoreVertical,
  FiUnlock,
} from "react-icons/fi";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Editor</title>
      </Head>
      <header>
        <div className="breadcrumbs">
          <FiChevronsRight />
          <p>
            <span className="main">
              <FiBookOpen /> Main
            </span>
            <span>/</span>
            <span className="project"> Getting Started </span>
            <span>/</span>
            <span className="document">Front-end developer test proje...</span>
          </p>
        </div>
        <div className="publish">
          <div>
            <FiUnlock />

            <span className="status">Editing</span>
          </div>
          <div className="divider"></div>
          <button>
            Publish Space
            <FiChevronDown />
          </button>
        </div>
      </header>
      <main>
        <div className="statusbar">
          <div className="left">
            <p className="name">P</p>
            <div className="divider"></div>
            <p className="time-passed">
              <FiClock />
              0min
            </p>
            <div className="divider"></div>
            <Image
              src="https://picsum.photos/100/100"
              width="20"
              height="20"
              alt="user"
            />
            <div className="divider"></div>
            <p className="dontknowwhatthisisyet">
              <FiArrowDownLeft /> 0
            </p>
          </div>
          <div className="right">
            <FiCheckCircle />
            <FiCloud />
            <FiMoreVertical />
          </div>
        </div>

        <div contentEditable="true" className="textarea">
          <h1 id="title" data-placeholder="Untitled">
            <br />
          </h1>
        </div>
        <div className="block-picker">
          <div>
            <h1>Add blocks</h1>
            <h2>Keep typing to filter, or escape to exit</h2>
          </div>
          <h3>
            Filtering keyword <span id="filter">1</span>
          </h3>
          <div className="block" id="h1-block">
            <Image src="/heading-solid.svg" width="32" height="32" alt="user" />
            <div>
              <h1>Heading 1</h1>
              <p>Big section heading</p>
            </div>
          </div>
          <div className="block" id="h2-block">
            <Image src="/heading-solid.svg" width="32" height="32" alt="user" />
            <div>
              <h1>Heading 2</h1>
              <p>Medium section heading</p>
            </div>
          </div>
          <div className="block" id="h3-block">
            <Image src="/heading-solid.svg" width="32" height="32" alt="user" />
            <div>
              <h1>Heading 3</h1>
              <p>Small section heading</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
