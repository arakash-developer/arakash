import Image from "next/image";
import Container from "./component/layers/Container";
import Navbar from "./component/layers/Navbar";
import Profile from "./component/layers/Profile";
import Check from "./component/layers/Check";
import Home from "./component/pages/Home";
import LeftSide from "./component/layers/LeftSide";


export async function generateMetadata() {
  let brand = "ATIQUR RAHMAN AKASH"
  let mainurl = "https://arakash.vercel.app"
  let keywords = ["arakash", "ATIQUR RAHMAN AKASH"]
  let description = `Next.js Developer | Specializing in Fast & Scalable Web Apps..
I am Atiqur Rahman Akash, a dedicated Next.js Developer with over 2.5 years of experience in designing and implementing fast, responsive, and scalable web applications. I specialize in creating innovative and efficient web solutions tailored to meet client needs.I possess a strong command of front-end technologies, including HTML, CSS, Bootstrap, Tailwind, JavaScript, jQuery, React.js, Redux, and Next.js. My skill set also includes crafting smooth animations using GSAP and collaborating on UI/UX designs with tools like Figma and Adobe XD. By leveraging GitHub for version control, I ensure seamless collaboration and effective code management across all my projects.I am committed to delivering high-quality, interactive user experiences. My problem-solving mindset and keen attention to detail empower me to tackle challenges efficiently and consistently meet project goals.I invite you to explore my portfolio to view examples of my work:https://arakash.vercel.app/#skills For inquiries, please contact me at arakash.developer@gmail.com.`
  return {
    title: brand,
    description: description,
    keywords: keywords,
    openGraph: {
      type: 'website',
      url: mainurl,
      title: brand,
      description: description,
      // images: newdata.images,
      site_name: 'arakash',
      locale: 'en_US',
    }
  }
}

export default function Root() {

  return (
    <>
      <div className="w-full h-full bg-[url('../public/bg.png')] bg-center bg-cover overflow-hidden relative">
        <Container className='pt-5 lg:pt-[70px]'>
          <div className="flex gap-1 sm:gap-3 items-start">
            <Navbar />
            <div className="flex flex-col lg:flex-row gap-3 h-[100vh] overflow-scroll no-scrollbar">
              <Profile />
              <Home />
            </div>
          </div>
        </Container>
      </div>
        <LeftSide />
    </>
  );
}
