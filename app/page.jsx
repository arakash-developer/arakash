import Container from "./component/layers/Container";
import LeftSide from "./component/layers/LeftSide";
import Navbar from "./component/layers/Navbar";
import Profile from "./component/layers/Profile";
import Home from "./component/pages/Home";

export async function generateMetadata() {
  let brand = "ATIQUR RAHMAN AKASH";
  let mainurl = "https://arakash.com";
  let keywords = ["arakash", "ATIQUR RAHMAN AKASH"];
  let description = `
I am Atiqur Rahman Akash, a Full-Stack Web & Mobile Developer passionate about building fast, scalable, and high-performance applications. I work with modern technologies like React,Redux,Next.js, React Native, and JavaScript to craft seamless digital experiences.
On the backend, I build robust APIs and systems using Node.js and Express.js, managing data with MongoDB, PostgreSQL, and MySQL via Prisma ORM. I also leverage Kafka for event streaming and Redis for caching to optimize performance.
Skilled in CI/CD with GitHub Actions and automation using n8n, I thrive in collaborative environments, using tools like Asana, ClickUp, Jira, and Slack to deliver projects efficiently. I focus on clean, maintainable code and solutions that scale with real-world demands.
Portfolio: arakash.com
Portfolio: arakash.vercel.app
Email: arakash.developer@gmail.com`;
  return {
    title: brand,
    description: description,
    keywords: keywords,
    openGraph: {
      type: "website",
      url: mainurl,
      title: brand,
      description: description,
      // images: newdata.images,
      site_name: "arakash",
      locale: "en_US",
    },
  };
}

export default function Root() {
  return (
    <>
      <div className="w-full h-full bg-[url('../public/bg.png')] bg-center bg-cover overflow-hidden relative">
        <Container className="pt-5 lg:pt-[70px]">
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
