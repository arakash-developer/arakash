const Technologies = ({ skillName, percent, icon }) => {
  let wid = `w-[${percent}]`;
  return (
    <div className="skill rounded-2xl w-full lg:w-96 h-28 border-2 dark:text-[#fff] text-[#0c0c0c] dark:border-[#ffffff1f] pl-8 flex items-center relative">
      {icon}
      <h3 className="pl-8 font-medium text-[25px] leading-[170%] text-[#0c0c0c] dark:text-[#eaeaea]">
        {skillName}
      </h3>
      <div className="absolute right-3 top-3 border-2 dark:border-[#ffffff1f] rounded-3xl w-12 h-7 center">
        <p className="font-normal text-xs leading-[170%] text-[#0c0c0c] dark:text-[#eaeaea]">
          {percent}%
        </p>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 dark:bg-[#ffffff1f] w-[90%] xl:w-[335px] h-1 rounded">
        <div className={`progress h-full bg-[#78cc6d] rounded ${wid}`}></div>
      </div>
    </div>
  );
};

export default Technologies;
