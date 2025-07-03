"use client";
import { Contex } from "@/app/contex/DarkContext";
import Akash5 from '@/public/akash5.png'
// import Akash5 from "@/public/akash.gif";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Profile = ({ className }) => {
  let { dark } = useContext(Contex);
  return (
    <div className={`${dark ? "dark" : null} ${className}`}>
      <div className="dark:bg-[#0c0c0c] bg-[#fff] rounded-b-3xl rounded-tl-3xl text-[#0c0c0c] dark:text-[#fff]">
        <div className="p-5 md:p-10 flex justify-center flex-col items-center">
          <div className="rounded-b-3xl rounded-tl-3xl lg:w-72 lg:h-72 h-64 w-64 md:w-full bg-stone-200 overflow-hidden">
            <Image
              className="h-full w-full object-cover"
              src={Akash5}
              alt="Akash"
            />
          </div>
          <div className="mt-[49px] mb-0">
            <h3 className="font-normal text-sm leading-[170%] uppercase text-center text-[#78cc6d]">
          Full Stack Developer
            </h3>
            <h2 className="mt-2 font-semibold text-3xl leading-[107%] text-center dark:text-[#fff] text-[#0c0c0c]">
              AR AKASH
            </h2>
            <div className="icon mt-5 flex gap-2 justify-center items-center">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/arakashdeveloper/"
                className="inline-block center rounded-2xl w-12 h-12 border-2 dark:border-[#ffffff1f]"
              >
                <FontAwesomeIcon
                  className="dark:text-[#fff] text-[#0c0c0c]"
                  icon={faLinkedin}
                />
              </Link>
              <Link
                target="_blank"
                href="https://github.com/arakash-developer/"
                className="inline-block center rounded-2xl w-12 h-12 border-2 dark:border-[#ffffff1f]"
              >
                <FontAwesomeIcon
                  className="dark:text-[#fff] text-[#0c0c0c]"
                  icon={faGithub}
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/arakash.developer/"
                className="inline-block center rounded-2xl w-12 h-12 border-2 dark:border-[#ffffff1f]"
              >
                <FontAwesomeIcon
                  className="dark:text-[#fff] text-[#0c0c0c]"
                  icon={faFacebook}
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/arakash.developer/"
                className="inline-block center rounded-2xl w-12 h-12 border-2 dark:border-[#ffffff1f]"
              >
                <FontAwesomeIcon
                  className="dark:text-[#fff] text-[#0c0c0c]"
                  icon={faInstagram}
                />
              </Link>
              <Link
                target="_blank"
                href="https://x.com/dev_arakash"
                className="inline-block center rounded-2xl w-12 h-12 border-2 dark:border-[#ffffff1f]"
              >
                <FontAwesomeIcon
                  className="dark:text-[#fff] text-[#0c0c0c]"
                  icon={faTwitter}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="button flex justify-between ">
          <a
            href="/atiqurrahmanakash.pdf"
            download="Atiqur Rahman Akash"
            className="w-1/2 font-semibold text-sm text-center py-6 border-t-2 border-r dark:border-[#ffffff1f] rounded-bl-3xl"
          >
            Download Cv
          </a>
          <Link
            href="#sendme"
            className="w-1/2 font-semibold text-sm text-center py-6 border-l border-t-2 dark:border-[#ffffff1f] rounded-br-3xl"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
