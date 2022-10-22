import Image from "next/image";
import {
  FiArrowDownLeft,
  FiCheckCircle,
  FiClock,
  FiCloud,
  FiMoreVertical,
} from "react-icons/fi";

const Statusbar = () => {
  return (
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
  );
};

export default Statusbar;
