"use client";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "7+", label: "Projects Completed" },
  { value: "11+", label: "Technologies" },
  { value: "100%", label: "Commitment" },
];

const cards = [
  {
    icon: "ri-code-s-slash-line",
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    title: "Frontend",
    desc: "React, Angular, Next.js, TypeScript",
  },
  {
    icon: "ri-server-line",
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-100",
    title: "Backend",
    desc: "Node.js, Python, AWS",
  },
  {
    icon: "ri-database-2-line",
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-100",
    title: "Database",
    desc: "MySQL, PostgreSQL",
  },
  {
    icon: "ri-palette-line",
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-100",
    title: "Design",
    desc: "Tailwind CSS, Material-UI",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
            About Me
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Who I Am</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full mx-auto mb-5"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A passionate software engineer with expertise in modern web
            technologies
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                My Journey
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                With years of experience in software development, I specialize
                in creating robust, scalable applications using cutting-edge
                technologies. My passion lies in solving complex problems and
                delivering exceptional user experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I enjoy working with both frontend and backend technologies,
                always staying up-to-date with the latest industry trends and
                best practices. My goal is to create solutions that are not only
                functional but also maintainable and efficient.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className={`bg-white p-5 rounded-xl border ${card.border} hover:shadow-md transition-all duration-200`}
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-lg mb-3 ${card.bg}`}
                  >
                    <i className={`${card.icon} text-lg ${card.text}`}></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {card.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-100 to-violet-100 opacity-70 -z-10 blur-sm"></div>
            <img
              src="https://readdy.ai/api/search-image?query=Modern%20developer%20workspace%20with%20multiple%20monitors%20displaying%20code%2C%20clean%20organized%20desk%20setup%2C%20programming%20environment%2C%20contemporary%20office%20space%2C%20professional%20coding%20station%2C%20ambient%20lighting%2C%20tech%20gadgets%2C%20minimalist%20design%20aesthetic&width=600&height=500&seq=workspace-about&orientation=landscape"
              alt="Developer Workspace"
              className="rounded-2xl shadow-xl object-cover w-full h-[400px] object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
