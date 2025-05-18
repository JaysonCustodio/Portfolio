import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const experienceData = [
  {
    company: 'DNA Micro Services',
    period: '2020 – 2021',
    description:
      'Developed a web application using React and Next.js, leveraging server-side rendering, dynamic routing, and optimized performance for a seamless user experience.'
  },
  {
    company: 'OSL International',
    period: '2021 – 2023',
    description:
      'Developed a full-stack application using Angular, .NET Core, and SQL database, implementing backend services, database management, and frontend development for a complete web solution.'
  },
  {
    company: 'RCG Global Services',
    period: '2023 – 2024',
    description:
      'Enhanced an existing web application and developed new features to improve functionality and user experience.'
  },
  {
    company: 'Automancers',
    period: '2024 – Current',
    description:
      'Developed a web application using React and Next.js, leveraging server-side rendering, dynamic routing, and optimized performance for a seamless user experience.'
  }
];

export default function AboutMePage() {
  return (
    <main className="min-h-screen h-[100dvh] overflow-y-auto bg-gradient-to-br from-black to-gray-800 text-white py-20 px-6">
      <section className="max-w-4xl mx-auto text-center overflow-y-auto mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          Hi, I’m a Creative Web Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl max-w-xl mx-auto text-gray-300"
        >
          I build delightful web experiences that merge functionality, performance, and visual elegance. Whether it&apos;s architecting full-stack platforms or crafting seamless frontend flows. I&apos;m all about turning ideas into usable beauty.
        </motion.p>
        <div className="text-center my-5">
          <Link
            href="/"
            className="flex mx-auto w-fit px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-blue-400 hover:text-blue-300 hover:bg-white/20 transition-all shadow-md hover:shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">💼 Experience</h2>
        <div className="w-52 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto mb-10 rounded-full"></div>

        <div className="space-y-10">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-2xl transition-all group overflow-hidden"
            >
              {/* Decorative Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <h3 className="text-2xl font-semibold text-white z-10 relative">
                {exp.company}
                <span className="block text-sm text-gray-400 mt-1">{exp.period}</span>
              </h3>
              <p className="text-gray-300 mt-4 z-10 relative">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
