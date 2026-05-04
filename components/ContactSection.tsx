
'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent from portfolio contact form.`
    );

    window.open(`mailto:custodiojay123@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setSubmitStatus('Email client opened! Please send the message from your email app.');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  const contactInfo = [
    { icon: 'ri-mail-line', bg: 'bg-blue-50', text: 'text-blue-600', label: 'Email', value: 'custodiojay123@gmail.com' },
    { icon: 'ri-phone-line', bg: 'bg-green-50', text: 'text-green-600', label: 'Phone', value: '+63 922 599 4182' },
    { icon: 'ri-map-pin-line', bg: 'bg-purple-50', text: 'text-purple-600', label: 'Location', value: 'Cebu City, Philippines' },
  ];

  const inputClass = "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-400 outline-none";

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Contact</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full mx-auto mb-5"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Let&apos;s discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Let&apos;s Connect</h3>
              <p className="text-gray-600 leading-relaxed">
                I&apos;m always interested in new opportunities and challenging projects.
                Whether you have a question about my work, want to collaborate, or just
                want to say hello, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all">
                  <div className={`w-11 h-11 flex items-center justify-center ${item.bg} rounded-xl flex-shrink-0`}>
                    <i className={`${item.icon} text-lg ${item.text}`}></i>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">{item.label}</p>
                    <p className="text-gray-800 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/JaysonCustodio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center bg-gray-100 hover:bg-blue-600 hover:text-white rounded-xl transition-all text-gray-600"
              >
                <i className="ri-github-line text-lg"></i>
              </a>
              <a
                href="https://linkedin.com/in/jayson-custodio-7167511a3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center bg-gray-100 hover:bg-blue-600 hover:text-white rounded-xl transition-all text-gray-600"
              >
                <i className="ri-linkedin-line text-lg"></i>
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project..."
                ></textarea>
                <p className="text-xs text-gray-400 mt-1 text-right">{formData.message.length}/500</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
              >
                {isSubmitting ? 'Opening email...' : 'Send Message'}
              </button>

              {submitStatus && (
                <div className={`text-center p-4 rounded-xl text-sm font-medium ${
                  submitStatus.includes('Error') ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-green-50 text-green-700 border border-green-100'
                }`}>
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
