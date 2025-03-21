import Image from "next/image";
import Fblogo from "@/public/fb-logo.png";
import Akash4 from "@/public/akash4.png";
import Akash5 from "@/public/akash5.jpg";
import Avt2 from "@/public/avt-2.jpg";
import Avt3 from "@/public/avt-3.jpg";
import Avt4 from "@/public/avt-4.jpg";
import Avt5 from "@/public/avt-5.jpg";
import { MdOndemandVideo } from "react-icons/md";
import { RiHome5Fill } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { SiFacebookgaming } from "react-icons/si";



const page = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark-main">
      {/* NAV */}
      <nav className="bg-white dark:bg-dark-second h-max md:h-14 w-full shadow flex flex-col md:flex-row items-center justify-center md:justify-between fixed top-0 z-50 border-b dark:border-dark-third">
        {/* LEFT NAV */}
        <div className="flex items-center justify-between w-full md:w-max px-4 py-2">
          <a href="#" className="mr-2 hidden md:inline-block">
            <Image
              src={Fblogo}
              alt="Facebook logo"
              className="w-24 sm:w-20 lg:w-10 h-auto"
            />
          </a>
          <a href="#" className="inline-block md:hidden">
            <img src="./images/fb-logo-mb.png" alt="" className="w-32 h-auto" />
          </a>
          <div className="flex items-center justify-between space-x-1">
            <div className="relative bg-gray-100 dark:bg-dark-third px-2 py-2 w-10 h-10 sm:w-11 sm:h-11 lg:h-10 lg:w-10 xl:w-max xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer">
              <i className="bx bx-search-alt-2 text-xl xl:mr-2 dark:text-dark-txt" />
              <input
                type="text"
                placeholder="Search Facebook"
                className="outline-none bg-transparent hidden xl:inline-block"
              />
            </div>
            <div className="text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-dark-third rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark:text-dark-txt">
              <i className="bx bxl-messenger" />
            </div>
            <div
              className="text-2xl grid place-items-center md:hidden bg-gray-200 dark:bg-dark-third rounded-full w-10 h-10 cursor-pointer hover:bg-gray-300 dark:text-dark-txt"
              id="dark-mode-toggle-mb"
            >
              <i className="bx bxs-moon" />
            </div>
          </div>
        </div>
        {/* END LEFT NAV */}
        {/* MAIN NAV */}
        <ul className="flex w-full lg:w-max items-center justify-center">
          <li className="w-1/5 md:w-max text-center">
            <a
              href="#"
              className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block text-blue-500 border-b-4 border-blue-500"
            >
              <RiHome5Fill />
            </a>
          </li>
          <li className="w-1/5 md:w-max text-center">
            <a
              href="#"
              className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
            >
              <MdOndemandVideo />
              <span className="text-xs absolute top-0 right-1/4 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
                9+
              </span>
            </a>
          </li>
          <li className="w-1/5 md:w-max text-center">
            <a
              href="#"
              className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
            >
              <FaStore />
            </a>
          </li>
          <li className="w-1/5 md:w-max text-center">
            <a
              href="#"
              className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
            >
              <MdGroups />
              {/* <i className="bx bx-group" /> */}
            </a>
          </li>
          <li className="w-1/5 md:w-max text-center hidden md:inline-block">
            <a
              href="#"
              className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
            >
              {/* <i className="bx bx-layout" />
               */}
               <SiFacebookgaming />

              <span className="text-xs absolute top-0 right-1/4 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
                9+
              </span>
            </a>
          </li>
          <li className="w-1/5 md:w-max text-center inline-block md:hidden">
            <a
              href="#"
              className="w-full text-3xl py-2 px-3 xl:px-12 cursor-pointer text-center inline-block rounded text-gray-600 hover:bg-gray-100 dark:hover:bg-dark-third dark:text-dark-txt relative"
            >
              <i className="bx bx-menu" />
            </a>
          </li>
        </ul>
        {/* END MAIN NAV */}
        {/* RIGHT NAV */}
        <ul className="hidden md:flex mx-4 items-center justify-center">
          <li className="h-full hidden xl:flex">
            <a
              href="#"
              className="inline-flex items-center justify-center p-1 rounded-full hover:bg-gray-200 dark:hover:bg-dark-third mx-1"
            >
              <img
                src="./images/tuat.jpg"
                alt="Profile picture"
                className="rounded-full h-7 w-7"
              />
              <span className="mx-2 font-semibold dark:text-dark-txt">
                Akash
              </span>
            </a>
          </li>
          <li>
            <div className="text-xl hidden xl:grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
              <i className="bx bx-plus" />
            </div>
          </li>
          <li>
            <div className="text-xl hidden xl:grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
              <i className="bx bxl-messenger" />
            </div>
          </li>
          <li>
            <div className="text-xl grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative">
              <i className="bx bxs-bell" />
              <span className="text-xs absolute top-0 right-0 bg-red-500 text-white font-semibold rounded-full px-1 text-center">
                9
              </span>
            </div>
          </li>
          <li>
            <div
              className="text-xl grid place-items-center bg-gray-200 dark:bg-dark-third dark:text-dark-txt rounded-full mx-1 p-3 cursor-pointer hover:bg-gray-300 relative"
              id="dark-mode-toggle"
            >
              <i className="bx bxs-moon" />
            </div>
          </li>
        </ul>
        {/* END RIGHT NAV */}
      </nav>
      {/* END NAV */}
      {/* MAIN */}
      <div className="flex justify-center h-screen">
        {/* LEFT MENU */}
        <div className="w-1/5 pt-16 h-full hidden xl:flex flex-col fixed top-0 left-0">
          <ul className="p-4">
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <img
                  src="./images/tuat.jpg"
                  alt="Profile picture"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold">Tran Anh Tuat</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <img
                  src="./images/friends.png"
                  alt="Profile picture"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold">Friends</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <img
                  src="./images/page.png"
                  alt="Profile picture"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold">Pages</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <img
                  src="./images/memory.png"
                  alt="Profile picture"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold">Memories</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <img
                  src="./images/group.png"
                  alt="Profile picture"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold">Groups</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <span className="w-10 h-10 rounded-full grid place-items-center bg-gray-300 dark:bg-dark-second">
                  <i className="bx bx-chevron-down" />
                </span>
                <span className="font-semibold">See more</span>
              </a>
            </li>
            <li className="border-b border-gray-200 dark:border-dark-third mt-6" />
          </ul>
          <div className="flex justify-between items-center px-4 h-4 group">
            <span className="font-semibold text-gray-500 text-lg dark:text-dark-txt">
              Your shortcuts
            </span>
            <span className="text-blue-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third p-2 rounded-md hidden group-hover:inline-block">
              Edit
            </span>
          </div>
          <ul className="p-4">
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <img
                  src="./images/group-img-1.jpg"
                  alt="Profile picture"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="font-semibold">
                  Cộng đồng Front-end(HTML/CSS/JS) Việt Nam
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <img
                  src="./images/group-img-2.jpg"
                  alt="Profile picture"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="font-semibold">CNPM08_UIT_Group học tập</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <img
                  src="./images/group-img-3.jpg"
                  alt="Profile picture"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="font-semibold">
                  Cộng đồng UI/UX Design vietnam
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <img
                  src="./images/group-img-4.jpg"
                  alt="Profile picture"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="font-semibold">Nihon Koi</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third"
              >
                <span className="w-10 h-10 rounded-full grid place-items-center bg-gray-300 dark:bg-dark-second">
                  <i className="bx bx-chevron-down" />
                </span>
                <span className="font-semibold">See more</span>
              </a>
            </li>
          </ul>
          <div className="mt-auto p-6 text-sm text-gray-500 dark:text-dark-txt">
            <a href="#">Privacy</a>
            <span>.</span>
            <a href="#">Terms</a>
            <span>.</span>
            <a href="#">Advertising</a>
            <span>.</span>
            <a href="#">Cookies</a>
            <span>.</span>
            <a href="#">Ad choices</a>
            <span>.</span>
            <a href="#">More</a>
            <span>.</span>
            <span>Facebook © 2021</span>
          </div>
        </div>
        {/* END LEFT MENU */}
        {/* MAIN CONTENT */}
        <div className="w-full lg:w-2/3 xl:w-2/5 pt-32 lg:pt-16 px-2">
          {/* STORY */}
          <div className="relative flex space-x-2 pt-4">
            <div className="w-1/4 sm:w-1/6 h-44 rounded-xl shadow overflow-hidden flex flex-col group cursor-pointer">
              <div className="h-3/5 overflow-hidden">
                <img
                  src="./images/profile.jpg"
                  alt="picture"
                  className="group-hover:transform group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="flex-1 relative flex items-end justify-center pb-2 text-center leading-none dark:bg-dark-second dark:text-dark-txt">
                <span className="font-semibold">
                  Create a <br /> Story
                </span>
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white grid place-items-center text-2xl border-4 border-white dark:border-dark-second absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <i className="bx bx-plus" />
                </div>
              </div>
            </div>
            <div className="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
              <div className="relative h-full group cursor-pointer">
                <Image
                  src={Akash5}
                  alt="Story images"
                  className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full"
                />
                <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10" />
                <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
                  Your story
                </span>
                <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                  <Image src={Akash4} alt="Profile picture" />
                </div>
              </div>
            </div>
            <div className="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
              <div className="relative h-full group cursor-pointer">
                <img
                  src="./images/story-1.jpg"
                  alt="Story images"
                  className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full"
                />
                <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10" />
                <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
                  Lorem
                </span>
                <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                  <img src="./images/avt-7.jpg" alt="Profile picture" />
                </div>
              </div>
            </div>
            <div className="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
              <div className="relative h-full group cursor-pointer">
                <img
                  src="./images/story-2.jpg"
                  alt="Story images"
                  className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full"
                />
                <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10" />
                <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
                  John Doe
                </span>
                <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                  <img src="./images/avt-6.png" alt="Profile picture" />
                </div>
              </div>
            </div>
            <div className="hidden sm:inline-block w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
              <div className="relative h-full group cursor-pointer">
                <img
                  src="./images/story-3.jpg"
                  alt="Story images"
                  className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full"
                />
                <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10" />
                <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
                  John Doe
                </span>
                <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                  <img src="./images/avt-6.png" alt="Profile picture" />
                </div>
              </div>
            </div>
            <div className="hidden sm:inline-block w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
              <div className="relative h-full group cursor-pointer">
                <img
                  src="./images/story-4.jpg"
                  alt="Story images"
                  className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full"
                />
                <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10" />
                <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
                  John Doe
                </span>
                <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                  <img src="./images/avt-5.jpg" alt="Profile picture" />
                </div>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full hidden lg:grid place-items-center text-2xl bg-white absolute -right-6 top-1/2 transform -translate-y-1/2 border border-gray-200 cursor-pointer hover:bg-gray-100 shadow text-gray-500 dark:bg-dark-third dark:border-dark-third dark:text-dark-txt">
              <i className="bx bx-right-arrow-alt" />
            </div>
          </div>
          {/* END STORY */}
          {/* POST FORM */}
          <div className="px-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second">
            <div className="p-2 border-b border-gray-300 dark:border-dark-third flex space-x-4">
              <Image
                src={Akash4}
                alt="Profile picture"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 bg-gray-100 rounded-full flex items-center justify-start pl-4 cursor-pointer dark:bg-dark-third text-gray-500 text-lg dark:text-dark-txt">
                <span>What's on your mind, Akash?</span>
              </div>
            </div>
            <div className="p-2 flex">
              <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500">
                <i className="bx bxs-video-plus" />
                <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
                  Live video
                </span>
              </div>
              <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500">
                <i className="bx bx-images" />
                <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
                  Live video
                </span>
              </div>
              <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-yellow-500">
                <i className="bx bx-smile" />
                <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">
                  Live video
                </span>
              </div>
            </div>
          </div>
          {/* END POST FORM */}
          {/* ROOM */}
          <div className="p-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second overflow-hidden">
            <div className="flex space-x-4 relative">
              <div className="w-1/2 lg:w-3/12 flex space-x-2 items-center justify-center border-2 border-blue-200 dark:border-blue-700 rounded-full cursor-pointer">
                <i className="bx bxs-video-plus text-2xl text-purple-500" />
                <span className="text-sm font-semibold text-blue-500">
                  Create Room
                </span>
              </div>
              <div className="relative cursor-pointer">
                <Image
                  src={Avt2}
                  alt={Avt2}
                  className="rounded-full"
                />
                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
              </div>
              <div className="relative cursor-pointer">
              <Image
                  src={Avt5}
                  alt={Avt5}
                  className="rounded-full w-full h-full object-cover"
                />
                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
              </div>
              <div className="relative cursor-pointer">
              <Image
                  src={Avt4}
                  alt={Avt4}
                  className="rounded-full w-full h-full object-cover"
                />
                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
              </div>
              <div className="relative cursor-pointer">
              <Image
                  src={Avt5}
                  alt={Avt5}
                  className="rounded-full w-full h-full object-cover"
                />
                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
              </div>
              <div className="w-12 h-12 rounded-full hidden lg:grid place-items-center text-2xl text-gray-500 bg-white absolute right-0 top-1/2 transform -translate-y-1/2 border border-gray-200 cursor-pointer hover:bg-gray-100 shadow dark:bg-dark-third dark:border-dark-third dark:text-dark-txt">
                <i className="bx bxs-chevron-right" />
              </div>
            </div>
          </div>
          {/* END ROOM */}
          {/* LIST POST */}
          <div>
            {/* POST */}
            <div className="shadow bg-white dark:bg-dark-second dark:text-dark-txt mt-4 rounded-lg">
              {/* POST AUTHOR */}
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex space-x-2 items-center">
                  <div className="relative">
                    <Image
                      src={Akash4}
                      alt="Profile picture"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <div className="font-semibold cursor-pointer">Atiqur Rahman Akash</div>
                    <span className="text-sm text-gray-500">38m</span>
                  </div>
                </div>
                <div className="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third rounded-full cursor-pointer">
                  <i className="bx bx-dots-horizontal-rounded" />
                </div>
              </div>
              {/* END POST AUTHOR */}
              {/* POST CONTENT */}
              <div className="text-justify px-4 py-2">
              Hii! am Atiqur Rahman Akash, a dedicated Next.js Developer with over 2.5 years of experience in designing and implementing fast, responsive, and scalable web applications. I specialize in creating innovative and efficient web solutions tailored to meet client needs.
              </div>
              {/* END POST CONTENT */}
              {/* POST IMAGE */}
              <div className="my-2 bg-red-200 flex justify-center">
                <Image src={Akash4} alt="Post image" />
              </div>
              {/* END POST IMAGE */}
              {/* POST REACT */}
              <div className="px-4 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex flex-row-reverse items-center">
                    <span className="ml-2 text-gray-500 dark:text-dark-txt">
                      999
                    </span>
                    <span className="rounded-full grid place-items-center text-2xl -ml-1 text-red-800">
                      <i className="bx bxs-angry" />
                    </span>
                    <span className="rounded-full grid place-items-center text-2xl -ml-1 text-red-500">
                      <i className="bx bxs-heart-circle" />
                    </span>
                    <span className="rounded-full grid place-items-center text-2xl -ml-1 text-yellow-500">
                      <i className="bx bx-happy-alt" />
                    </span>
                  </div>
                  <div className="text-gray-500 dark:text-dark-txt">
                    <span>90 comments</span>
                    <span>66 Shares</span>
                  </div>
                </div>
              </div>
              {/* END POST REACT */}
              {/* POST ACTION */}
              <div className="py-2 px-4">
                <div className="border border-gray-200 dark:border-dark-third border-l-0 border-r-0 py-1">
                  <div className="flex space-x-2">
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                      <i className="bx bx-like" />
                      <span className="text-sm font-semibold">Like</span>
                    </div>
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                      <i className="bx bx-comment" />
                      <span className="text-sm font-semibold">Comment</span>
                    </div>
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                      <i className="bx bx-share bx-flip-horizontal" />
                      <span className="text-sm font-semibold">Share</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* END POST ACTION */}
              {/* LIST COMMENT */}
              <div className="py-2 px-4">
                {/* COMMENT */}
                <div className="flex space-x-2">
                  <img
                    src="./images/avt-5.jpg"
                    alt="Profile picture"
                    className="w-9 h-9 rounded-full"
                  />
                  <div>
                    <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                      <span className="font-semibold block">John Doe</span>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </span>
                    </div>
                    <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                      <span className="font-semibold cursor-pointer">Like</span>
                      <span>.</span>
                      <span className="font-semibold cursor-pointer">
                        Reply
                      </span>
                      <span>.</span>
                      10m
                    </div>
                    {/* COMMENT */}
                    <div className="flex space-x-2">
                      <img
                        src="./images/avt-7.jpg"
                        alt="Profile picture"
                        className="w-9 h-9 rounded-full"
                      />
                      <div>
                        <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                          <span className="font-semibold block">John Doe</span>
                          <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </span>
                        </div>
                        <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                          <span className="font-semibold cursor-pointer">
                            Like
                          </span>
                          <span>.</span>
                          <span className="font-semibold cursor-pointer">
                            Reply
                          </span>
                          <span>.</span>
                          10m
                        </div>
                      </div>
                    </div>
                    {/* END COMMENT */}
                  </div>
                </div>
                {/* END COMMENT */}
                {/* COMMENT */}
                <div className="flex space-x-2">
                  <img
                    src="./images/avt-5.jpg"
                    alt="Profile picture"
                    className="w-9 h-9 rounded-full"
                  />
                  <div>
                    <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                      <span className="font-semibold block">John Doe</span>
                      <span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. In voluptate ipsa animi corrupti unde,
                        voluptatibus expedita suscipit, itaque, laudantium
                        accusantium aspernatur officia repellendus nihil
                        mollitia soluta distinctio praesentium nulla eos?
                      </span>
                    </div>
                    <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                      <span className="font-semibold cursor-pointer">Like</span>
                      <span>.</span>
                      <span className="font-semibold cursor-pointer">
                        Reply
                      </span>
                      <span>.</span>
                      10m
                    </div>
                    {/* COMMENT */}
                    <div className="flex space-x-2">
                      <img
                        src="./images/avt-7.jpg"
                        alt="Profile picture"
                        className="w-9 h-9 rounded-full"
                      />
                      <div>
                        <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                          <span className="font-semibold block">John Doe</span>
                          <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </span>
                        </div>
                        <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                          <span className="font-semibold cursor-pointer">
                            Like
                          </span>
                          <span>.</span>
                          <span className="font-semibold cursor-pointer">
                            Reply
                          </span>
                          <span>.</span>
                          10m
                        </div>
                      </div>
                    </div>
                    {/* END COMMENT */}
                  </div>
                </div>
                {/* END COMMENT */}
              </div>
              {/* END LIST COMMENT */}
              {/* COMMENT FORM */}
              <div className="py-2 px-4">
                <div className="flex space-x-2">
                  <img
                    src="./images/tuat.jpg"
                    alt="Profile picture"
                    className="w-9 h-9 rounded-full"
                  />
                  <div className="flex-1 flex bg-gray-100 dark:bg-dark-third rounded-full items-center justify-between px-3">
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      className="outline-none bg-transparent flex-1"
                    />
                    <div className="flex space-x-0 items-center justify-center">
                      <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                        <i className="bx bx-smile" />
                      </span>
                      <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                        <i className="bx bx-camera" />
                      </span>
                      <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                        <i className="bx bxs-file-gif" />
                      </span>
                      <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                        <i className="bx bx-happy-heart-eyes" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* END COMMENT FORM */}
            </div>
            {/* END POST */}
            {/* POST */}
            <div className="shadow bg-white dark:bg-dark-second dark:text-dark-txt mt-4 rounded-lg">
              {/* POST AUTHOR */}
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex space-x-2 items-center">
                  <div className="relative">
                    <Image
                      src={Akash4}
                      alt="Profile picture"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <div className="font-semibold cursor-pointer">Atiqur Rahman Akash</div>
                    <span className="text-sm text-gray-500">38m</span>
                  </div>
                </div>
                <div className="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third rounded-full cursor-pointer">
                  <i className="bx bx-dots-horizontal-rounded" />
                </div>
              </div>
              {/* END POST AUTHOR */}
              {/* POST CONTENT */}
              <div className="text-justify px-4 py-2">
              I still believe that one day I will reach my dream, to myself, to what I want.....
              </div>
              {/* END POST CONTENT */}
              {/* POST IMAGE */}
              <div className="my-2 bg-red-200 flex justify-center">
                <Image src={Akash5} alt="Post image" />
              </div>
              {/* END POST IMAGE */}
              {/* POST REACT */}
              <div className="px-4 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex flex-row-reverse items-center">
                    <span className="ml-2 text-gray-500 dark:text-dark-txt">
                      999
                    </span>
                    <span className="rounded-full grid place-items-center text-2xl -ml-1 text-red-800">
                      <i className="bx bxs-angry" />
                    </span>
                    <span className="rounded-full grid place-items-center text-2xl -ml-1 text-red-500">
                      <i className="bx bxs-heart-circle" />
                    </span>
                    <span className="rounded-full grid place-items-center text-2xl -ml-1 text-yellow-500">
                      <i className="bx bx-happy-alt" />
                    </span>
                  </div>
                  <div className="text-gray-500 dark:text-dark-txt">
                    <span>90 comments</span>
                    <span>66 Shares</span>
                  </div>
                </div>
              </div>
              {/* END POST REACT */}
              {/* POST ACTION */}
              <div className="py-2 px-4">
                <div className="border border-gray-200 dark:border-dark-third border-l-0 border-r-0 py-1">
                  <div className="flex space-x-2">
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                      <i className="bx bx-like" />
                      <span className="text-sm font-semibold">Like</span>
                    </div>
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                      <i className="bx bx-comment" />
                      <span className="text-sm font-semibold">Comment</span>
                    </div>
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                      <i className="bx bx-share bx-flip-horizontal" />
                      <span className="text-sm font-semibold">Share</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* END POST ACTION */}
              {/* LIST COMMENT */}
              <div className="py-2 px-4">
                {/* COMMENT */}
                <div className="flex space-x-2">
                  <img
                    src="./images/avt-5.jpg"
                    alt="Profile picture"
                    className="w-9 h-9 rounded-full"
                  />
                  <div>
                    <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                      <span className="font-semibold block">John Doe</span>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </span>
                    </div>
                    <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                      <span className="font-semibold cursor-pointer">Like</span>
                      <span>.</span>
                      <span className="font-semibold cursor-pointer">
                        Reply
                      </span>
                      <span>.</span>
                      10m
                    </div>
                    {/* COMMENT */}
                    <div className="flex space-x-2">
                      <img
                        src="./images/avt-7.jpg"
                        alt="Profile picture"
                        className="w-9 h-9 rounded-full"
                      />
                      <div>
                        <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                          <span className="font-semibold block">John Doe</span>
                          <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </span>
                        </div>
                        <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                          <span className="font-semibold cursor-pointer">
                            Like
                          </span>
                          <span>.</span>
                          <span className="font-semibold cursor-pointer">
                            Reply
                          </span>
                          <span>.</span>
                          10m
                        </div>
                      </div>
                    </div>
                    {/* END COMMENT */}
                  </div>
                </div>
                {/* END COMMENT */}
                {/* COMMENT */}
                <div className="flex space-x-2">
                  <img
                    src="./images/avt-5.jpg"
                    alt="Profile picture"
                    className="w-9 h-9 rounded-full"
                  />
                  <div>
                    <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                      <span className="font-semibold block">John Doe</span>
                      <span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. In voluptate ipsa animi corrupti unde,
                        voluptatibus expedita suscipit, itaque, laudantium
                        accusantium aspernatur officia repellendus nihil
                        mollitia soluta distinctio praesentium nulla eos?
                      </span>
                    </div>
                    <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                      <span className="font-semibold cursor-pointer">Like</span>
                      <span>.</span>
                      <span className="font-semibold cursor-pointer">
                        Reply
                      </span>
                      <span>.</span>
                      10m
                    </div>
                    {/* COMMENT */}
                    <div className="flex space-x-2">
                      <img
                        src="./images/avt-7.jpg"
                        alt="Profile picture"
                        className="w-9 h-9 rounded-full"
                      />
                      <div>
                        <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                          <span className="font-semibold block">John Doe</span>
                          <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </span>
                        </div>
                        <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                          <span className="font-semibold cursor-pointer">
                            Like
                          </span>
                          <span>.</span>
                          <span className="font-semibold cursor-pointer">
                            Reply
                          </span>
                          <span>.</span>
                          10m
                        </div>
                      </div>
                    </div>
                    {/* END COMMENT */}
                  </div>
                </div>
                {/* END COMMENT */}
              </div>
              {/* END LIST COMMENT */}
              {/* COMMENT FORM */}
              <div className="py-2 px-4">
                <div className="flex space-x-2">
                  <img
                    src="./images/tuat.jpg"
                    alt="Profile picture"
                    className="w-9 h-9 rounded-full"
                  />
                  <div className="flex-1 flex bg-gray-100 dark:bg-dark-third rounded-full items-center justify-between px-3">
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      className="outline-none bg-transparent flex-1"
                    />
                    <div className="flex space-x-0 items-center justify-center">
                      <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                        <i className="bx bx-smile" />
                      </span>
                      <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                        <i className="bx bx-camera" />
                      </span>
                      <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                        <i className="bx bxs-file-gif" />
                      </span>
                      <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                        <i className="bx bx-happy-heart-eyes" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* END COMMENT FORM */}
            </div>
            {/* END POST */}
            {/* POST */}
            <div className="shadow bg-white dark:bg-dark-second dark:text-dark-txt mt-4 rounded-lg">
              {/* POST AUTHOR */}
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex space-x-2 items-center">
                  <div className="relative">
                    <img
                      src="./images/avt-2.jpg"
                      alt="Profile picture"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <div className="font-semibold">John Doe</div>
                    <span className="text-sm text-gray-500">38m</span>
                  </div>
                </div>
                <div className="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third rounded-full cursor-pointer">
                  <i className="bx bx-dots-horizontal-rounded" />
                </div>
              </div>
              {/* END POST AUTHOR */}
              {/* POST CONTENT */}
              <div className="text-justify px-4 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, autem earum cum ullam odio, molestias maxime aperiam
                in id aspernatur vel ratione odit molestiae minus ipsa obcaecati
                quia! Doloribus, illum.
              </div>
              {/* END POST CONTENT */}
              {/* POST IMAGE */}
              <div className="py-2">
                <div className="grid grid-cols-2 gap-1">
                  <img src="./images/post-2 (1).jpg" alt="Post image" />
                  <img src="./images/post-2 (2).jpg" alt="Post image" />
                  <img src="./images/post-2 (3).jpg" alt="Post image" />
                  <img src="./images/post-2 (4).jpg" alt="Post image" />
                </div>
              </div>
              {/* END POST IMAGE */}
              {/* POST REACT */}
              <div className="px-4 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex flex-row-reverse items-center">
                    <span className="ml-2 text-gray-500 dark:text-dark-txt">
                      999
                    </span>
                    <span className="rounded-full grid place-items-center text-2xl -ml-1 text-red-800">
                      <i className="bx bxs-angry" />
                    </span>
                    <span className="rounded-full grid place-items-center text-2xl -ml-1 text-red-500">
                      <i className="bx bxs-heart-circle" />
                    </span>
                    <span className="rounded-full grid place-items-center text-2xl -ml-1 text-yellow-500">
                      <i className="bx bx-happy-alt" />
                    </span>
                  </div>
                  <div className="text-gray-500 dark:text-dark-txt">
                    <span>90 comments</span>
                    <span>66 Shares</span>
                  </div>
                </div>
              </div>
              {/* END POST REACT */}
              {/* POST ACTION */}
              <div className="py-2 px-4">
                <div className="border border-gray-200 dark:border-dark-third border-l-0 border-r-0 py-1">
                  <div className="flex space-x-2">
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                      <i className="bx bx-like" />
                      <span className="text-sm font-semibold">Like</span>
                    </div>
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                      <i className="bx bx-comment" />
                      <span className="text-sm font-semibold">Comment</span>
                    </div>
                    <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                      <i className="bx bx-share bx-flip-horizontal" />
                      <span className="text-sm font-semibold">Share</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* END POST ACTION */}
              {/* LIST COMMENT */}
              <div className="py-2 px-4">
                {/* COMMENT */}
                <div className="flex space-x-2">
                  <img
                    src="./images/avt-5.jpg"
                    alt="Profile picture"
                    className="w-9 h-9 rounded-full"
                  />
                  <div>
                    <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                      <span className="font-semibold block">John Doe</span>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </span>
                    </div>
                    <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                      <span className="font-semibold cursor-pointer">Like</span>
                      <span>.</span>
                      <span className="font-semibold cursor-pointer">
                        Reply
                      </span>
                      <span>.</span>
                      10m
                    </div>
                    {/* COMMENT */}
                    <div className="flex space-x-2">
                      <img
                        src="./images/avt-7.jpg"
                        alt="Profile picture"
                        className="w-9 h-9 rounded-full"
                      />
                      <div>
                        <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                          <span className="font-semibold block">John Doe</span>
                          <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </span>
                        </div>
                        <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                          <span className="font-semibold cursor-pointer">
                            Like
                          </span>
                          <span>.</span>
                          <span className="font-semibold cursor-pointer">
                            Reply
                          </span>
                          <span>.</span>
                          10m
                        </div>
                      </div>
                    </div>
                    {/* END COMMENT */}
                  </div>
                </div>
                {/* END COMMENT */}
                {/* COMMENT */}
                <div className="flex space-x-2">
                  <img
                    src="./images/avt-5.jpg"
                    alt="Profile picture"
                    className="w-9 h-9 rounded-full"
                  />
                  <div>
                    <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                      <span className="font-semibold block">John Doe</span>
                      <span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. In voluptate ipsa animi corrupti unde,
                        voluptatibus expedita suscipit, itaque, laudantium
                        accusantium aspernatur officia repellendus nihil
                        mollitia soluta distinctio praesentium nulla eos?
                      </span>
                    </div>
                    <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                      <span className="font-semibold cursor-pointer">Like</span>
                      <span>.</span>
                      <span className="font-semibold cursor-pointer">
                        Reply
                      </span>
                      <span>.</span>
                      10m
                    </div>
                    {/* COMMENT */}
                    <div className="flex space-x-2">
                      <img
                        src="./images/avt-7.jpg"
                        alt="Profile picture"
                        className="w-9 h-9 rounded-full"
                      />
                      <div>
                        <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                          <span className="font-semibold block">John Doe</span>
                          <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </span>
                        </div>
                        <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                          <span className="font-semibold cursor-pointer">
                            Like
                          </span>
                          <span>.</span>
                          <span className="font-semibold cursor-pointer">
                            Reply
                          </span>
                          <span>.</span>
                          10m
                        </div>
                      </div>
                    </div>
                    {/* END COMMENT */}
                  </div>
                </div>
                {/* END COMMENT */}
              </div>
              {/* END LIST COMMENT */}
              {/* COMMENT FORM */}
              <div className="py-2 px-4">
                <div className="flex space-x-2">
                  <img
                    src="./images/tuat.jpg"
                    alt="Profile picture"
                    className="w-9 h-9 rounded-full"
                  />
                  <div className="flex-1 flex bg-gray-100 dark:bg-dark-third rounded-full items-center justify-between px-3">
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      className="outline-none bg-transparent flex-1"
                    />
                    <div className="flex space-x-0 items-center justify-center">
                      <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                        <i className="bx bx-smile" />
                      </span>
                      <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                        <i className="bx bx-camera" />
                      </span>
                      <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                        <i className="bx bxs-file-gif" />
                      </span>
                      <span className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">
                        <i className="bx bx-happy-heart-eyes" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* END COMMENT FORM */}
            </div>
            {/* END POST */}
          </div>
          {/* END LIST POST */}
        </div>
        {/* END MAIN CONTENT */}
        {/* RIGHT MENU */}
        <div className="w-1/5 pt-16 h-full hidden xl:block px-4 fixed top-0 right-0">
          <div className="h-full">
            <div className="flex justify-between items-center px-4 pt-4">
              <span className="font-semibold text-gray-500 text-lg dark:text-dark-txt">
                Firend requests
              </span>
              <span className="text-blue-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third p-2 rounded-md">
                See All
              </span>
            </div>
            <div className="p-2">
              <a
                href="#"
                className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third rounded-lg transition-all"
              >
                <img
                  src="./images/avt.jpg"
                  alt="Profile picture"
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1 h-full">
                  <div className="dark:text-dark-txt">
                    <span className="font-semibold">Sakura Hinata</span>
                    <span className="float-right">6d</span>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <div className="w-1/2 bg-blue-500 cursor-pointer py-1 text-center font-semibold text-white rounded-lg">
                      Confirm
                    </div>
                    <div className="w-1/2 bg-gray-300 cursor-pointer py-1 text-center font-semibold text-black rounded-lg">
                      Delete
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="border-b border-gray-200 dark:border-dark-third mt-6" />
            {/* CONTACTS */}
            <div className="flex justify-between items-center px-4 pt-4 text-gray-500 dark:text-dark-txt">
              <span className="font-semibold text-lg">Contacts</span>
              <div className="flex space-x-1">
                <div className="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer">
                  <i className="bx bx-search-alt-2" />
                </div>
                <div className="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer">
                  <i className="bx bx-dots-horizontal-rounded" />
                </div>
              </div>
            </div>
            <ul className="p-2">
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="./images/avt-3.jpg"
                      alt="Friends profile picture"
                      className="rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">Chin Chin</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="./images/avt-2.jpg"
                      alt="Friends profile picture"
                      className="rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">Tuat TA</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="./images/avt-4.jpg"
                      alt="Friends profile picture"
                      className="rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">John Doe</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="./images/avt-5.jpg"
                      alt="Friends profile picture"
                      className="rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">Ivan Lorem</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="./images/avt-6.png"
                      alt="Friends profile picture"
                      className="rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">Shiba san</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="./images/avt-4.jpg"
                      alt="Friends profile picture"
                      className="rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">John Doe</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="./images/avt-5.jpg"
                      alt="Friends profile picture"
                      className="rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">Ivan Lorem</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="./images/avt-6.png"
                      alt="Friends profile picture"
                      className="rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">Shiba san</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="./images/avt-4.jpg"
                      alt="Friends profile picture"
                      className="rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">John Doe</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="./images/avt-5.jpg"
                      alt="Friends profile picture"
                      className="rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">Ivan Lorem</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="./images/avt-6.png"
                      alt="Friends profile picture"
                      className="rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">Shiba san</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="./images/avt-4.jpg"
                      alt="Friends profile picture"
                      className="rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">John Doe</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
                  <div className="relative">
                    <img
                      src="./images/avt-5.jpg"
                      alt="Friends profile picture"
                      className="rounded-full"
                    />
                    <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
                  </div>
                  <div>
                    <span className="font-semibold">Ivan Lorem</span>
                  </div>
                </div>
              </li>
            </ul>
            {/* END CONTACTS */}
          </div>
        </div>
        {/* END RIGHT MENU */}
      </div>
      {/* END MAIN */}
    </div>
  );
};

export default page;
