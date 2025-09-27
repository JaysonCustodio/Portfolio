
'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent from your portfolio contact form.
      `);

      const mailtoUrl = `mailto:custodiojay123@gmail.com?subject=${subject}&body=${body}`;

      // Open default email client
      window.open(mailtoUrl, '_blank');

      setSubmitStatus('Email client opened! Please send the message from your email app.');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    } catch (error) {
      setSubmitStatus('Error opening email client. Please try again.');
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                I'm always interested in new opportunities and challenging projects. 
                Whether you have a question about my work, want to collaborate, or just 
                want to say hello, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mr-4">
                  <i className="ri-mail-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">custodiojay123@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mr-4">
                  <i className="ri-phone-line text-xl text-green-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+639225994182</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg mr-4">
                  <i className="ri-map-pin-line text-xl text-purple-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Cebu City, Philippines</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="https://github.com/JaysonCustodio" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer">
                  <i className="ri-github-line text-xl text-gray-600 hover:text-blue-600"></i>
                </a>
                <a href="https://linkedin.com/in/jayson-custodio-7167511a3" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer">
                  <i className="ri-linkedin-line text-xl text-gray-600 hover:text-blue-600"></i>
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer">
                  <i className="ri-twitter-line text-xl text-gray-600 hover:text-blue-600"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
                <div className="text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus && (
                <div className={`text-center p-4 rounded-lg ${submitStatus.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {submitStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
