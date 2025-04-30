import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAngular, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiPostgresql, SiRedux, SiVite, SiFigma, SiAmazon, SiPython } from 'react-icons/si';

const techStack = [
  {
    name: 'AWS',
    icon: <SiAmazon size={50} />,
    color: 'text-orange-300',
    description: 'Utilized various AWS services like S3, Lambda, and CloudWatch to build scalable, serverless architectures and monitor applications.'
  },
  {
    name: 'Python',
    icon: <SiPython size={50} />,
    color: 'text-yellow-500',
    description: 'Used in automation scripts, data transformation, and backend services. Familiar with Flask and scripting for DevOps tasks.'
  },
  {
    name: 'React',
    icon: <FaReact size={50} />, 
    color: 'text-blue-400',
    description: 'Used extensively in frontend development for building modular and interactive UIs. Experienced with hooks, context API, and state management.'
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs size={50} />, 
    color: 'text-black',
    description: 'Utilized for building SSR applications, API routes, and static generation. Familiar with middleware and routing in production-ready apps.'
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss size={50} />, 
    color: 'text-cyan-400',
    description: 'Primary styling framework in my projects. Enables rapid, responsive UI development with utility-first classes.'
  },
  {
    name: 'Angular',
    icon: <FaAngular size={50} />, 
    color: 'text-red-500',
    description: 'Built scalable enterprise dashboards with Angular, applying services, dependency injection, and reactive forms.'
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={50} />, 
    color: 'text-blue-600',
    description: 'Used across all frontend and backend projects for static type safety and better developer tooling.'
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript size={50} />, 
    color: 'text-yellow-400',
    description: 'Core language for frontend logic and dynamic client-side behavior across projects.'
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs size={50} />, 
    color: 'text-green-600',
    description: 'Developed RESTful APIs, background jobs, and server-side logic using Express and Node.js.'
  },
  {
    name: 'SQL (PostgreSQL)',
    icon: <SiPostgresql size={50} />, 
    color: 'text-blue-800',
    description: 'Designed schemas and optimized queries in PostgreSQL for scalable relational data operations.'
  },
  {
    name: 'Redux',
    icon: <SiRedux size={50} />, 
    color: 'text-purple-500',
    description: 'Applied Redux for managing complex global state and async logic using Redux Thunk.'
  },
  {
    name: 'Vite',
    icon: <SiVite size={50} />, 
    color: 'text-purple-300',
    description: 'Fast build tool used in some projects for instant HMR and optimized local dev environments.'
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 size={50} />, 
    color: 'text-orange-500',
    description: 'Solid understanding of semantic HTML and its role in accessibility and SEO.'
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt size={50} />, 
    color: 'text-blue-500',
    description: 'Used in projects prior to Tailwind for responsive design and custom animations.'
  },
  {
    name: 'Git',
    icon: <FaGitAlt size={50} />, 
    color: 'text-orange-600',
    description: 'Proficient in Git workflows including feature branches, rebases, and CI/CD pipelines.'
  },
  {
    name: 'Figma',
    icon: <SiFigma size={50} />, 
    color: 'text-pink-500',
    description: 'Collaborated with designers using Figma to convert mockups into pixel-perfect UI components.'
  },
];

import Link from 'next/link';

export default function TechStackShowcase() {
  return (
    <div className="min-h-screen max-h-screen overflow-y-auto bg-gradient-to-b from-slate-900 to-slate-800 p-10 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-center mb-8"
      >
        🚀 My Tech Stack
      </motion.h1>

      <div className="text-center mb-8">
        <Link href="/" className="text-blue-400 underline hover:text-blue-300 transition-colors">
          ← Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="bg-slate-700 p-5 rounded-2xl hover:scale-[1.03] transition-transform duration-300 shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <div className="flex flex-col items-center gap-4">
              <div className={`mb-2 ${tech.color}`}>{tech.icon}</div>
              <div className={`text-2xl font-semibold ${tech.color}`}>{tech.name}</div>
              <div className="text-sm text-gray-300 text-center mt-2">{tech.description}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
