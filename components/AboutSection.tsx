
'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm a passionate software engineer with expertise in modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Journey</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                With years of experience in software development, I specialize in creating robust, 
                scalable applications using cutting-edge technologies. My passion lies in 
                solving complex problems and delivering exceptional user experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I enjoy working with both frontend and backend technologies, always staying 
                up-to-date with the latest industry trends and best practices. My goal is to 
                create solutions that are not only functional but also maintainable and efficient.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                  <i className="ri-code-s-slash-line text-xl text-blue-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                <p className="text-sm text-gray-600">React, Angular, Next.js, TypeScript</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mb-4">
                  <i className="ri-server-line text-xl text-green-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                <p className="text-sm text-gray-600">Node.js, Python, AWS</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg mb-4">
                  <i className="ri-database-2-line text-xl text-purple-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Database</h4>
                <p className="text-sm text-gray-600">MySQL, PostgreSQL</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg mb-4">
                  <i className="ri-palette-line text-xl text-orange-600"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Design</h4>
                <p className="text-sm text-gray-600">Tailwind CSS, Material-UI</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Modern%20developer%20workspace%20with%20multiple%20monitors%20displaying%20code%2C%20clean%20organized%20desk%20setup%2C%20programming%20environment%2C%20contemporary%20office%20space%2C%20professional%20coding%20station%2C%20ambient%20lighting%2C%20tech%20gadgets%2C%20minimalist%20design%20aesthetic&width=600&height=500&seq=workspace-about&orientation=landscape"
              alt="Developer Workspace"
              className="rounded-2xl shadow-lg object-cover w-full h-[400px] object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
