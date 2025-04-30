'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import Link from 'next/link'

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            await emailjs.send(
                'service_m5s6g9o',
                'template_mr1w6jb',
                {
                    from_name: form.name,
                    reply_to: form.email,
                    message: form.message,
                    to_email: 'custodiojay123@gmail.com' // Replace with the actual recipient email if needed
                },
                'O6tQfAqxP4PBvxhU-'
            )
            alert('✅ Message sent successfully!')
            setForm({ name: '', email: '', message: '' })
        } catch (error) {
            console.error('EmailJS Error:', error)
            alert('❌ Failed to send message. Please try again later.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] via-[#1b1b2f] to-[#0d0d18] text-white flex items-center justify-center px-4 py-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-2xl bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl p-8"
            >
                <motion.h1
                    className="text-4xl font-bold text-center text-white mb-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Get In Touch 💬
                </motion.h1>
                <p className="text-center text-gray-400 mb-8">
                    Drop your thoughts below. I’ll get back to you shortly!
                </p>
                <Link href="/" className="text-blue-400 flex mx-auto w-fit underline hover:text-blue-300 transition-colors">
                    ← Back to Home
                </Link>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="text-sm block mb-1">Your Name</label>
                        <input
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-2 rounded-lg bg-[#1f1f2e] border border-gray-600 focus:ring-2 focus:ring-purple-600 focus:outline-none text-white placeholder-gray-400"
                        />
                    </div>

                    <div>
                        <label className="text-sm block mb-1">Your Email</label>
                        <input
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@email.com"
                            className="w-full px-4 py-2 rounded-lg bg-[#1f1f2e] border border-gray-600 focus:ring-2 focus:ring-blue-600 focus:outline-none text-white placeholder-gray-400"
                        />
                    </div>

                    <div>
                        <label className="text-sm block mb-1">Your Message</label>
                        <textarea
                            name="message"
                            rows={5}
                            required
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Type your message here..."
                            className="w-full px-4 py-2 rounded-lg bg-[#1f1f2e] border border-gray-600 focus:ring-2 focus:ring-pink-600 focus:outline-none text-white placeholder-gray-400"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 rounded-xl hover:shadow-[0_0_10px_rgba(147,51,234,0.8)] transition-all duration-300 font-semibold tracking-wide disabled:opacity-50"
                    >
                        {isLoading ? 'Sending...' : '✉️ Send Message'}
                    </button>
                </form>

                <div className="mt-10 text-center text-gray-300">
                    <p className="mb-1">📞 <span className="font-semibold">09225994182</span></p>
                    <p>📧 <span className="font-semibold">custodiojay123@gmail.com</span></p>
                </div>
            </motion.div>
        </div>
    )
}
