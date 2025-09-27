
'use client';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <p className="text-gray-400 max-w-2xl">
            Thank you for visiting my portfolio. I'm always excited to work on new projects 
            and collaborate with talented individuals and teams.
          </p>

          <div className="flex space-x-6">
            <a href="https://github.com/JaysonCustodio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-colors cursor-pointer">
              <i className="ri-github-line text-lg"></i>
            </a>
            <a href="https://linkedin.com/in/jayson-custodio-7167511a3" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-colors cursor-pointer">
              <i className="ri-linkedin-line text-lg"></i>
            </a>
            <a href="mailto:custodiojay123@gmail.com" className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-colors cursor-pointer">
              <i className="ri-mail-line text-lg"></i>
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-12 h-12 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-full transition-colors cursor-pointer"
          >
            <i className="ri-arrow-up-line text-lg"></i>
          </button>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            @2025 Portfolio. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
