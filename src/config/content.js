import {
  SiReact,
  SiAngular,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiDotnet,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiPostman,
  SiSwagger,
} from 'react-icons/si'
import { FaCode, FaDatabase, FaAws, FaDocker, FaMicrosoft } from 'react-icons/fa'

export const hero = {
  name: 'Rishab Sharma',
  title: 'Full-Stack Developer',
  headline: 'Building solid web and cloud products with React, Angular, .NET, and Node.js.',
  summary: 'I ship reliable releases with clean UX, steady APIs, and cloud-first delivery.',
  resumePath: '/resume.pdf',
}

// Navbar name cycling - add more languages here if needed
export const navbarNames = [
  'Rishab Sharma', // English
  'रिशब शर्मा', // Hindi
  'ਰਿਸ਼ਬ ਸ਼ਰਮਾ', // Punjabi
]

export const snapshotItems = [
  { title: 'Frontend', desc: 'Reliable UI flows with clean components and fast loads.' },
  { title: 'APIs & Cloud', desc: '.NET / Node services with monitoring and clear alerts.' },
  { title: 'Delivery', desc: 'Ship on time, review carefully, keep releases stable.' },
  { title: 'DevOps & CI/CD', desc: 'Pipelines, deployments, and monitoring that stay green.' },
]

export const education = {
  school: 'Chitkara University, Rajpura (Punjab, India)',
  degree: 'B.E. in Computer Science',
  cgpa: '9.37 CGPA',
  year: '2025',
  degreePdf: '/degree.pdf',
  schoolImage: 'https://www.chitkara.edu.in/blogs/wp-content/uploads/2022/03/CUB4-Top-10-reasons-why-Chitkara-University-is-the-best-University-in-North-India.jpg',
  location: 'Rajpura, Punjab, India',
  mapLink: 'https://maps.app.goo.gl/YsP5o1uhn7hzE92a7',
  logo: 'https://www.bing.com/th/id/OIP.jXxRFSJMz3To-3jkIdykrAHaEl?w=283&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1',
}

export const contact = {
  email: 'rishab2110991157@gmail.com',
  linkedin: 'https://www.linkedin.com',
  github: 'https://github.com',
}

export const experiences = [
  // {
  //   company: 'Company Name',
  //   position: 'Full-Stack Developer',
  //   duration: 'Jan 2022 - Present',
  //   location: 'Bengaluru, India',
  //   linkedin: 'https://www.linkedin.com/company/example',
  //   logo: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=200&q=80',
  //   leftLogo: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=200&q=80',
  //   rightLogo: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=200&q=80',
  //   mapLink: 'https://www.google.com/maps',
  //   certificates: [
  //     { name: 'Architecture & Cloud Certification', url: '/docs/architecture-cert.pdf' },
  //     { name: 'Full-Stack Delivery Playbook', url: '/docs/fullstack-playbook.pdf' },
  //   ],
  //   description: [
  //     'Built and maintained web apps with React, Angular, and .NET.',
  //     'Created REST APIs in C# .NET Web API and Node.js/Express.js.',
  //     'Designed and tuned data models for MSSQL and MongoDB.',
  //     'Worked with teams to deliver stable releases on time.',
  //     'Set up CI/CD and shipped on AWS.',
  //     'Reviewed code and coached junior devs.',
  //   ],
  //   technologies: ['React', 'Angular', '.NET', 'Node.js', 'MSSQL', 'MongoDB', 'AWS'],
  // },
  {
    company: 'TestingXperts',
    position: 'Associate Software Developer',
    duration: 'Jul 2025 - Present',
    location: 'Site 13-A, Rajiv Gandhi IT Park, Chandigarh 160101, India',
    linkedin: 'https://in.linkedin.com/company/testingxperts',
    logo: 'https://tse4.mm.bing.net/th/id/OIP.mVzTV3E7YlUaB7tJ7SIlKgHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=179&h=179&c=7&dpr=1.3&o=7&rm=3',
    leftLogo: 'https://tse4.mm.bing.net/th/id/OIP.mVzTV3E7YlUaB7tJ7SIlKgHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=179&h=179&c=7&dpr=1.3&o=7&rm=3',
    rightLogo: 'https://media.glassdoor.com/l/0a/16/2f/52/testingxperts-chandigarh-office.jpg',
    mapLink: 'https://maps.app.goo.gl/SwC6hM754yUykXoB6',
    certificates: [
      { name: 'Offer Letter', url: '/docs/offer-letter.pdf' },
      { name: 'Star Team Award Finals 2025 (S&S Activewear)', url: '/docs/star-team-award-finalist-Q3-2025.pdf' },
      { name: 'SPOT Award December 2025', url: '/docs/spot-award-2025.pdf' }
    ],
    description: [
      'Built dynamic front-end applications using React and Angular.',
      'Developed backend APIs with Node.js and Express.js.',
      'Utilized AWS services within project workflows.',
      'Created C# Xunit tests for VB-to-C# code validation.',
    ],
    technologies: ['React', 'Angular', 'Node.js', 'Express.js', 'AWS', 'Xunit'],
  },
  {
    company: 'Tech Internship',
    position: 'Software Development Trainee',
    duration: 'Jan 2025 - Jul 2025',
    location: 'Site 13-A, Rajiv Gandhi IT Park, Chandigarh 160101, India',
    linkedin: 'https://in.linkedin.com/company/testingxperts',
    logo: 'https://tse4.mm.bing.net/th/id/OIP.mVzTV3E7YlUaB7tJ7SIlKgHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=179&h=179&c=7&dpr=1.3&o=7&rm=3',
    leftLogo: 'https://tse4.mm.bing.net/th/id/OIP.mVzTV3E7YlUaB7tJ7SIlKgHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=179&h=179&c=7&dpr=1.3&o=7&rm=3',
    rightLogo: 'https://media.glassdoor.com/l/0a/16/2f/52/testingxperts-chandigarh-office.jpg',
    mapLink: 'https://maps.app.goo.gl/SwC6hM754yUykXoB6',
    certificates: [{ name: 'Internship Completion Letter', url: '/docs/internship-completion.pdf' }],
    description: [
      'Built web apps with C# ASP.NET MVC and Web API.',
      'Implemented MVC components (models, views, controllers, routing).',
      'Created CRUD features using Entity Framework and SQL Server.'
    ],
    technologies: ['C#', 'ASP.NET MVC', 'ASP.NET Web API', 'Entity Framework','MSSQL Server'],
  },
]

export const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with React frontend and .NET backend.',
    image: '/images/project-1.jpg',
    techStack: ['React', '.NET', 'MSSQL', 'Stripe API'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    title: 'Task Management System',
    description:
      'A collaborative task management application with real-time updates, team collaboration features, and advanced filtering. Built with Angular and Node.js.',
    image: '/images/project-2.jpg',
    techStack: ['Angular', 'Node.js', 'MongoDB', 'Socket.io'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    title: 'Social Media Dashboard',
    description:
      'A comprehensive dashboard for managing social media accounts with analytics, scheduling, and content management features.',
    image: '/images/project-3.jpg',
    techStack: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    title: 'API Gateway Service',
    description:
      'A microservices API gateway built with .NET Core, handling authentication, rate limiting, and request routing for multiple backend services.',
    image: '/images/project-4.jpg',
    techStack: ['.NET', 'Docker', 'AWS', 'Redis'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    title: 'Real-Time Chat Application',
    description:'A real-time one-to-one chat application with image sharing, built using React, Node.js, and Socket.IO. It features secure user authentication, a theme-based UI, instant message delivery, and real-time online/offline user status.',
    image: '/images/project-5.png',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    githubLink: 'https://github.com/Rishab1157/Chat_Application_Backend',
    liveLink: 'https://rishabchatty-19-11-2003.netlify.app/',
  },
  {
    title: 'Blog Management Application',
    description:'A full-stack blog management application that allows users to create, edit, and manage blog posts with secure authentication. Built using React, Node.js, Express, and MongoDB, featuring JWT-based auth, image uploads, and a responsive UI.',
    image: '/images/project-6.png',
    techStack: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/Rishab1157/Blog_Management_Application',
    liveLink: 'https://rishabblog-19-11-2003.netlify.app/',
  },
]

export const skills = [
  { name: 'React.js', icon: SiReact, color: 'text-blue-500' },
  { name: 'Angular', icon: SiAngular, color: 'text-red-500' },
  { name: 'JavaScript (ES6+)', icon: SiJavascript, color: 'text-yellow-500' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-cyan-500' },
  { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: SiCss3, color: 'text-blue-400' },
  { name: 'C# .NET Web API', icon: SiDotnet, color: 'text-purple-600' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-700' },
  { name: 'MSSQL', icon: FaDatabase, color: 'text-red-600' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'Git & GitHub', icon: SiGithub, color: 'text-gray-800' },
  { name: 'AWS', icon: FaAws, color: 'text-orange-500' },
  { name: 'REST APIs', icon: FaCode, color: 'text-blue-600' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
  { name: 'Postman', icon: SiPostman, color: 'text-orange-600' },
  { name: 'xUnit Testing', icon: FaCode, color: 'text-emerald-600' },
  { name: 'AI Tools (ChatGPT, Cursor)', icon: FaCode, color: 'text-purple-500' },
]

export const tools = [
  { name: 'VS Code', icon: FaCode, color: 'text-blue-500' },
  { name: 'Visual Studio', icon: FaCode, color: 'text-purple-600' },
  { name: 'Postman', icon: SiPostman, color: 'text-orange-600' },
  { name: 'Swagger', icon: SiSwagger, color: 'text-green-500' },
  { name: 'GitHub', icon: SiGithub, color: 'text-gray-800' },
  { name: 'Azure DevOps', icon: FaMicrosoft, color: 'text-blue-600' },
]

