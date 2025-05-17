import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaNode } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import General from "./General";
import Technologies from "./Technologies";
import { Toolstack } from "./Toolstack";

const Technology = () => {
  return (
    <div id="skills" className="">
      <div className="mt-4 py-75px dark:bg-[#0c0c0c] bg-[#fff] side">
        <div className="content py-[90px]">
          <p className="dark:text-[#fff] text-[#0c0c0c] uppercase border-2 dark:border-[#ffffff1f] rounded-full inline-flex py-2 px-5 items-center gap-2">
            <FontAwesomeIcon
              className="h-4 dark:text-[#fff] group-hover:text-[#78cc6d] text-[#0c0c0c]"
              icon={faCode}
            />
            Technical Skills
          </p>
          <h2 className="mt-3 mb-[45px] dark:text-[#fff] text-[#0c0c0c] font-medium text-[2.38rem] leading-[130%]">
            Technologies
          </h2>
          <div className="flex flex-col md:flex-row gap-5">
            <Technologies
              skillName="TypeScript"
              percent={40}
              icon={<SiTypescript className="w-10 h-10" />}
            />
            <Technologies
              skillName="MongoDB"
              percent={30}
              icon={<SiMongodb className="w-10 h-10" />}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-7">
            <Technologies
              skillName="Express"
              percent={50}
              icon={<SiExpress className="w-10 h-10" />}
            />
            <Technologies
              skillName="Node"
              percent={40}
              icon={<FaNode className="w-10 h-10" />}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-7">
            <Technologies
              skillName="Redux Toolkit"
              percent={80}
              icon={<TbBrandRedux className="w-10 h-10" />}
            />
            <Technologies
              skillName="Next"
              percent={90}
              icon={<SiNextdotjs className="w-10 h-10" />}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5 mt-7">
            <Technologies
              skillName="React"
              percent={90}
              icon={<RiReactjsLine className="w-10 h-10" />}
            />
            <Technologies
              skillName="Js"
              percent={90}
              icon={<IoLogoNodejs className="w-10 h-10" />}
            />
          </div>
        </div>

        <General />
        <Toolstack />
      </div>
    </div>
  );
};

export default Technology;
