import Image from "next/image";
import Container from "./component/layers/layers/Container";
import Navbar from "./component/layers/layers/Navbar";
import Profile from "./component/layers/layers/Profile";
import Check from "./component/layers/layers/Check";
import Bannar from "./component/layers/layers/Bannar";
import Home from "./component/pages/Home";

export default function Home() {
  
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-[url('../public/bg.png')] bg-cover bg-center overflow-hidden">
        <Container className='pt-5 lg:pt-[70px]'>
          <div className="flex gap-3 items-start">
            <Navbar />
          <div className="flex flex-col lg:flex-row gap-3 h-[100vh] overflow-scroll no-scrollbar">
            <Profile />
            {/* <Bannar /> */}
            <Home />
          </div>
          </div>
        </Container>
      </div>
    </>
  );
}
