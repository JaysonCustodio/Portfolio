
'use client';

export default function SkillsSection() {
  const skills = [
    { name: 'Angular', level: 90, icon: 'ri-angular-fill', color: 'bg-red-500' },
    { name: 'React', level: 95, icon: 'ri-reactjs-line', color: 'bg-blue-500' },
    { name: 'Node.js', level: 88, icon: 'ri-nodejs-line', color: 'bg-green-500' },
    { name: 'AWS', level: 82, icon: 'ri-cloud-line', color: 'bg-orange-500' },
    { name: 'Python', level: 85, icon: 'ri-file-code-line', color: 'bg-yellow-500' },
    { name: 'Tailwind CSS', level: 92, icon: 'ri-css3-line', color: 'bg-cyan-500' },
    { name: 'Material-UI', level: 88, icon: 'ri-palette-line', color: 'bg-blue-600' },
    { name: 'Next.js', level: 90, icon: 'ri-nextjs-line', color: 'bg-gray-800' },
    { name: 'MySQL', level: 85, icon: 'ri-database-2-line', color: 'bg-blue-700' },
    { name: 'PostgreSQL', level: 83, icon: 'ri-database-line', color: 'bg-blue-800' },
    { name: 'TypeScript', level: 93, icon: 'ri-code-s-slash-line', color: 'bg-blue-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 flex items-center justify-center ${skill.color} rounded-lg mr-4`}>
                  <i className={`${skill.icon} text-xl text-white`}></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Always Learning</h3>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying current with the latest developments. 
              I regularly explore new frameworks, attend conferences, and contribute to open-source projects 
              to continuously improve my skills and knowledge.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                GraphQL
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                Docker
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                Kubernetes
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                Redis
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
