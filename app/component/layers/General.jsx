import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GenCard from "./GenCard";

const General = () => {
  return (
    <div className="pb-20">
      <h2 className="mb-[30px] dark:text-[#fff] text-[#0c0c0c] font-medium text-[2.38rem] leading-[130%]">
        General Skills
      </h2>
      <p className="dark:text-[#fff] uppercase mb-10 text-[#0c0c0c] border-2 dark:border-[#ffffff1f] rounded-full inline-flex py-2 px-5 items-center gap-2">
        <FontAwesomeIcon
          className="h-3 dark:text-[#fff] group-hover:text-[#78cc6d] text-[#0c0c0c]"
          icon={faCode}
        />
        Tool Skills
      </p>
      <div className="flex gap-[30px] xl:gap-[20px] flex-wrap justify-evenly">
        <GenCard percen="90" title="ChatGpt" />
        <GenCard percen="40" title="Gsap" />
        <GenCard percen="70" title="Jquery" />
        <GenCard percen="80" title="Js" />
        <GenCard percen="100" title="Tailwind" />
        <GenCard percen="100" title="Bootstrap" />
        <GenCard percen="100" title="Css" />
        <GenCard percen="100" title="Html" />
      </div>
    </div>
  );
};

export default General;
