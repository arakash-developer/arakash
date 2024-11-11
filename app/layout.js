import DarkContext from "./contex/DarkContext";
import "./globals.css";
import "./app.css";

export const metadata = {
  title: "ATIQUR RAHMAN AKASH",
  description: `Next.js Developer | Specializing in Fast & Scalable Web Apps..
  I am Atiqur Rahman Akash, a dedicated Next.js Developer with over 2.5 years of experience in designing and implementing fast, responsive, and scalable web applications. I specialize in creating innovative and efficient web solutions tailored to meet client needs.I possess a strong command of front-end technologies, including HTML, CSS, Bootstrap, Tailwind, JavaScript, jQuery, React.js, Redux, and Next.js. My skill set also includes crafting smooth animations using GSAP and collaborating on UI/UX designs with tools like Figma and Adobe XD. By leveraging GitHub for version control, I ensure seamless collaboration and effective code management across all my projects.I am committed to delivering high-quality, interactive user experiences. My problem-solving mindset and keen attention to detail empower me to tackle challenges efficiently and consistently meet project goals.I invite you to explore my portfolio to view examples of my work:https://arakash.vercel.app/#skills For inquiries, please contact me at arakash.developer@gmail.com.
  `,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=''>
      <head>
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <DarkContext>
          {children}
        </DarkContext>
      </body>
    </html>
  );
}
