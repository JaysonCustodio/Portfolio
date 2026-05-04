"use client";

import React, { useEffect, useRef, useState } from "react";

const ANGULAR_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-5 h-5 fill-white">
    <path d="M281.7 332.1L357.9 332.1L319.8 240.5L281.7 332.1zM319.8 96L112 170.4L143.8 446.1L319.8 544L495.8 446.1L527.6 170.4L319.8 96zM450 437.8L401.4 437.8L375.2 372.4L264.6 372.4L238.4 437.8L189.7 437.8L319.8 145.5L450 437.8z" />
  </svg>
);

const skills: { name: string; level: number; icon?: string; text?: string; svg?: React.ReactNode; color: string }[] = [
  { name: "Angular", level: 90, svg: ANGULAR_SVG, color: "bg-red-500" },
  { name: "React", level: 95, icon: "ri-reactjs-line", color: "bg-blue-500" },
  { name: "Node.js", level: 88, icon: "ri-nodejs-line", color: "bg-green-500" },
  { name: "AWS", level: 82, icon: "ri-cloud-line", color: "bg-orange-500" },
  {
    name: "Python",
    level: 85,
    icon: "ri-file-code-line",
    color: "bg-yellow-500",
  },
  {
    name: "Tailwind CSS",
    level: 92,
    icon: "ri-css3-line",
    color: "bg-cyan-500",
  },
  {
    name: "Material-UI",
    level: 88,
    icon: "ri-palette-line",
    color: "bg-blue-600",
  },
  { name: "Next.js", level: 90, icon: "ri-nextjs-line", color: "bg-gray-800" },
  {
    name: "MySQL",
    level: 85,
    icon: "ri-database-2-line",
    color: "bg-blue-700",
  },
  {
    name: "PostgreSQL",
    level: 83,
    icon: "ri-database-line",
    color: "bg-indigo-700",
  },
  {
    name: "TypeScript",
    level: 93,
    icon: "ri-code-s-slash-line",
    color: "bg-blue-600",
  },
];

const learningBadges = ["GraphQL", "Docker", "Kubernetes", "Redis", "MongoDB"];

export default function SkillsSection() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Expertise
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full mx-auto mb-5"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 flex items-center justify-center ${skill.color} rounded-lg`}
                  >
                    {skill.svg ?? (skill.text
                      ? <span className="text-sm font-bold text-white leading-none">{skill.text}</span>
                      : <i className={`${skill.icon} text-lg text-white`}></i>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                </div>
                <span className="text-sm font-medium text-gray-500">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: animated ? `${skill.level}%` : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-violet-50 rounded-2xl p-8 border border-blue-100/50">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Always Learning
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and I&apos;m committed to staying
              current with the latest developments. I regularly explore new
              frameworks and contribute to open-source projects to continuously
              improve.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {learningBadges.map((badge) => (
                <span
                  key={badge}
                  className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-blue-200 hover:text-blue-600 transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
