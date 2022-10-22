import {
  FiBookOpen,
  FiChevronDown,
  FiChevronsRight,
  FiUnlock,
} from "react-icons/fi";

const Header = () => {
  return (
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
  );
};

export default Header;
