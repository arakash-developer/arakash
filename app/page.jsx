import Image from "next/image";
import Container from "./component/layers/Container";
import Navbar from "./component/layers/Navbar";
import Profile from "./component/layers/Profile";
import Check from "./component/layers/Check";
import Home from "./component/pages/Home";
import LeftSide from "./component/layers/LeftSide";


export default function Root() {

  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-[url('../public/bg.png')] bg-center bg-cover overflow-hidden relative">
        <Container className='pt-5 lg:pt-[70px]'>
          <div className="flex gap-1 sm:gap-3 items-start">
            <Navbar />
            <div className="flex flex-col lg:flex-row gap-3 h-[100vh] overflow-scroll no-scrollbar">
              <Profile />
              <Home />
            </div>
          </div>
        </Container>
        <LeftSide />
      </div>
    </>
  );
}
