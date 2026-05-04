
'use client';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const techStack = ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS'];

  return (
    <section
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://readdy.ai/api/search-image?query=Modern%20minimalist%20workspace%20setup%20with%20clean%20desk%2C%20laptop%20computer%2C%20coding%20environment%2C%20soft%20natural%20lighting%2C%20professional%20developer%20workspace%2C%20calm%20productivity%20atmosphere%2C%20neutral%20colors%2C%20contemporary%20design%2C%20spacious%20room%20with%20large%20windows&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
      }}
    >
      {/* Color tint overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-transparent to-violet-900/20 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div>
              <p className="text-base text-blue-400 font-medium mb-3 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-blue-400"></span>
                Hi, I&apos;m
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                Jayson Custodio
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-blue-400 mb-6">
                Software Engineer
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Passionate about creating innovative web applications with modern technologies.
                I build scalable solutions from frontend to backend with a focus on user experience and performance.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm text-gray-200 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 cursor-pointer shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-white/40 text-white hover:bg-white hover:text-gray-900 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 cursor-pointer backdrop-blur-sm hover:-translate-y-0.5"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 opacity-25 blur-2xl"></div>
              <img
                src="https://static.readdy.ai/image/4ddd4ebf0302badd347866c16496ddd6/47b20d33dca33ae89a65e19245c19b9c.jfif"
                alt="Jayson Custodio - Software Engineer"
                className="relative rounded-2xl shadow-2xl object-cover w-full h-[500px] object-top ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/90 transition-colors cursor-pointer animate-bounce"
      >
        <i className="ri-arrow-down-line text-2xl"></i>
      </button>
    </section>
  );
}
