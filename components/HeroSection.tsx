
'use client';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=Modern%20minimalist%20workspace%20setup%20with%20clean%20desk%2C%20laptop%20computer%2C%20coding%20environment%2C%20soft%20natural%20lighting%2C%20professional%20developer%20workspace%2C%20calm%20productivity%20atmosphere%2C%20neutral%20colors%2C%20contemporary%20design%2C%20spacious%20room%20with%20large%20windows&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
      }}

    >
      <div className="w-full max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div>
              <p className="text-xl text-blue-400 font-medium mb-2">Hi, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Jayson Custodio
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-blue-400 mb-6">
                Software Engineer
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Passionate about creating innovative web applications with modern technologies.
                I build scalable solutions from frontend to backend with a focus on user experience and performance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <img
                src="https://static.readdy.ai/image/4ddd4ebf0302badd347866c16496ddd6/47b20d33dca33ae89a65e19245c19b9c.jfif"
                alt="Jayson Custodio - Software Engineer"
                className="rounded-2xl shadow-2xl object-cover w-full h-[500px] object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
