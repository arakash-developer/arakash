import DarkContext from "./contex/DarkContext";
import "./globals.css";
import "./app.css";
import Akash from "@/public/akash5.png";

export const metadata = {
  title: "ATIQUR RAHMAN AKASH",
  description: `Next.js Developer | Specializing in Fast & Scalable Web Apps..
  I am Atiqur Rahman Akash, a dedicated Next.js Developer with over 2.5 years of experience in designing and implementing fast, responsive, and scalable web applications. I specialize in creating innovative and efficient web solutions tailored to meet client needs.I possess a strong command of front-end technologies, including HTML, CSS, Bootstrap, Tailwind, JavaScript, jQuery, React.js, Redux, and Next.js. My skill set also includes crafting smooth animations using GSAP and collaborating on UI/UX designs with tools like Figma and Adobe XD. By leveraging GitHub for version control, I ensure seamless collaboration and effective code management across all my projects.I am committed to delivering high-quality, interactive user experiences. My problem-solving mindset and keen attention to detail empower me to tackle challenges efficiently and consistently meet project goals.I invite you to explore my portfolio to view examples of my work:https://arakash.vercel.app/#skills For inquiries, please contact me at arakash.developer@gmail.com.`,
  twitter:{
    card:"summary_large_image"
  },
  keywords: [
    "Frontend Developer",
    "Next.js Expert",
    "Next.js Developer",
    "React.js Developer",
    "Web Performance Optimization",
    "Responsive Web Design Expert",
    "UI/UX Collaboration ",
    "HTML/CSS Specialist",
    "JavaScript & jQuery Expert",
    "Redux State Management",
    "GSAP Animations Expert",
    "Figma & Adobe XD",
    "Bootstrap & Tailwind CSS",
    "User Experience (UX) Design",
    "Scalable Web Applications",
    "Innovative Web Solutions",
    "Frontend Architecture",
    "Interactive User Experiences",
    "Problem-Solving Mindset",
    "Cross-Functional Collaboration",
    "GitHub",
    "Agile Methodologies",
    "Continuous Integration (CI)",
    "Jest Testing",
    "TypeScript",
    "Web Accessibility (a11y)",
    "Performance Tuning",
    "Code Refactoring",
    "SASS & SCSS",
    "Mobile-First Design",
    "Cross-Browser Compatibility",
    "API Integration",
    "REST APIs",
    "GraphQL",
    "State Management (Redux/Context API)",
    "Single Page Applications (SPA)",
    "Progressive Web Apps (PWA)",
    "Server-Side Rendering (SSR)",
    "Client-Side Rendering (CSR)",
    "Code Splitting",
    "Lazy Loading",
    "SEO Best Practices",
    "Web Security Practices",
    "Cloud Computing (AWS, GCP)",
    "Version Control (Git)",
    "Git Workflow",
    "GitHub Actions",
    "CI/CD Pipelines",
    "Docker",
    "Microservices Architecture",
    "Automated Testing (Unit/Integration)",
    "UI Components",
    "Component Libraries",
    "Material UI",
    "Ant Design",
    "Styled Components",
    "CSS Grid & Flexbox",
    "UX Research",
    "User-Centered Design (UCD)",
    "Atomic Design",
    "Design Systems",
    "Figma Prototyping",
    "Adobe XD Prototyping",
    "Interaction Design",
    "Data Visualization",
    "Chart.js",
    "D3.js",
    "React Hooks",
    "React Context API",
    "React Router",
    "JavaScript ES6+",
    "ESLint & Prettier",
    "TDD (Test-Driven Development)",
    "Babel Configuration",
    "Webpack Configuration",
    "Parcel Bundler",
    "Vite.js",
    "Next.js APIs",
    "Serverless Functions",
    "React Native",
    "Cross-Platform Mobile Development",
    "JAMstack Development",
    "Headless CMS (Strapi, Contentful)",
    "Sanity CMS",
    "GraphQL APIs",
    "Apollo Client",
    "Apollo Server",
    "Micro Frontends",
    "Containerization (Docker)",
    "Kubernetes",
    "WebSockets",
    "Socket.io",
    "Real-Time Applications",
    "Cloud Databases (Firebase, MongoDB)",
    "SQL & NoSQL Databases",
    "Database Design",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "ElasticSearch",
    "Cloud Functions",
    "Serverless Architecture",
    "Node.js",
    "Express.js",
    "API Security",
    "OAuth 2.0",
    "JWT Authentication",
    "Data Structures & Algorithms",
    "Algorithm Optimization",
    "Event-Driven Architecture",
    "Service-Oriented Architecture (SOA)",
    "WebSockets API",
    "Content Delivery Network (CDN)",
    "Static Site Generation (SSG)",
    "Dynamic Rendering",
    "GraphQL Subscriptions",
    "API Gateway",
    "AWS Lambda",
    "Azure Functions",
    "Cloud Front-End Services",
    "Mobile-First Strategy",
    "Cross-Platform Web Design",
    "Microservices Communication",
    "Server-Side Caching",
    "WebAssembly",
    "Browser Rendering",
    "Mobile Optimization",
    "Image Optimization",
    "Lazy Image Loading",
    "Lazy Script Loading",
    "Critical CSS",
    "HTTP/2",
    "SEO Optimization",
    "Content Strategy",
    "A/B Testing",
    "User Testing",
    "Google Analytics",
    "Conversion Rate Optimization (CRO)",
    "SEO Audits",
    "Performance Audits",
    "Accessibility Testing",
    "Figma Design Systems",
    "Accessibility Features (WCAG)",
    "Cloud Storage Solutions",
    "Data Privacy Compliance (GDPR)",
    "Remote Work Tools",
    "Project Management Tools",
    "Team Collaboration Tools",
    "Asynchronous Programming",
    "Event Loop",
    "Task Queues",
    "Promises",
    "Async/Await",
    "Progressive Enhancement",
    "Web Components",
    "Service Workers",
    "Caching Strategies",
    "Offline Capabilities",
    "Browser APIs",
    "HTML5 APIs",
    "CSS3 Animations",
    "Web Fonts",
    "Icon Libraries",
    "SVG Graphics",
    "Custom Web Components",
    "Web Audio API",
    "Web Storage API",
    "Local Storage",
    "Session Storage",
    "IndexedDB",
    "Cookie Management",
    "Internationalization (i18n)",
    "Localization (l10n)",
    "Cross-Platform Compatibility",
    "Mobile App Design",
    "Mobile UI",
    "Mobile-Responsive Components",
    "Vector Graphics",
    "Scalable Vector Graphics (SVG)",
    "SVG Animations",
    "Mobile Web Performance",
    "Retina Display Optimization",
    "Web Design Trends",
    "UI Animation",
    "Motion Design",
    "Data Modeling",
    "Model-View-Controller (MVC)",
    "Component-Based Architecture",
    "Design Handoff",
    "Developer Handoff",
    "Design-Developer Collaboration",
    "Product Design",
    "Frontend Testing (Jest, Mocha)",
    "End-to-End Testing (Cypress, Selenium)",
    "Unit Testing",
    "Test Automation",
    "Component Testing",
    "User Interface Testing",
    "Test-Driven Development (TDD)",
    "Behavior-Driven Development (BDD)",
    "Scrum Framework",
    "Kanban Framework",
    "Versioning APIs",
    "API Documentation",
    "Swagger",
    "Postman",
    "Backend Integration",
    "Database Queries",
    "ORM (Object-Relational Mapping)",
    "Data Fetching Strategies",
    "Data Normalization",
    "API Error Handling",
    "Load Balancing",
    "Error Logging",
    "Monitoring Solutions",
    "Continuous Delivery (CD)",
    "Test Coverage",
    "Automation Scripts",
    "Code Linting",
    "Code Minification",
    "Bundling Tools",
    "Package Managers (npm, yarn)",
    "Monorepos",
    "Frontend Build Tools",
    "Asset Management",
    "Package Distribution",
    "PWA Caching",
    "Service Worker Caching",
    "Sitemap Generation",
    "Structured Data Markup",
    "JSON-LD",
    "Schema Markup",
    "HTML Templates",
    "Web Fonts",
    "Font Optimization",
    "Performance Metrics",
    "Performance Testing Tools",
    "WebPagetest",
    "Lighthouse Audits",
    "HTTP Request Optimization",
    "CDN Caching",
    "Lazy Loading Images",
    "Code Splitting Techniques",
    "API Rate Limiting",
    "File Compression",
    "Image Compression",
    "SEO Content Optimization",
    "SEO Metadata",
    "Rich Snippets",
    "Metadata Management",
    "Meta Tags",
    "Open Graph Protocol",
    "Structured Data Validation"
  ],
  image: "https://arakash.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fakash5.de7127fb.png&w=384&q=75",
  images: ["https://arakash.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fakash5.de7127fb.png&w=384&q=75"],
  openGraph: {
    type: 'website',
    url: "https://arakash.vercel.app",
    title: "ATIQUR RAHMAN AKASH",
    description: `Next.js Developer | Specializing in Fast & Scalable Web Apps..
I am a dedicated Next.js Developer with over 2.5 years of experience in designing and implementing fast, responsive, and scalable web applications. I specialize in creating innovative and efficient web solutions tailored to meet the unique needs of each client.I possess a strong command of front-end technologies, including HTML, CSS, Bootstrap, Tailwind, JavaScript, jQuery, React.js, Redux, and Next.js. Additionally, I excel in crafting smooth animations with GSAP and collaborating on UI/UX designs using tools such as Figma and Adobe XD. Leveraging GitHub for version control, I ensure seamless collaboration and efficient code management across all my projects.My focus is always on delivering high-quality, interactive user experiences. With a problem-solving mindset and keen attention to detail, I am driven to tackle challenges effectively and consistently achieve project goals.I invite you to explore my portfolio for examples of my work: arakash.vercel.app. For inquiries, please contact me at arakash.developer@gmail.com.`,
    images: ["https://arakash.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fakash5.de7127fb.png&w=384&q=75"],
    site_name: 'arakash',
    locale: 'en_US',
  }
};


export default function RootLayout({ children }) {

  return (
    <html lang="en" className=''>
      <head>
        <meta name="google-site-verification" content="j13FRaiJX0ckKou6S6sA4r2TMw4qsqA8oq3sjwgYnEc" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
