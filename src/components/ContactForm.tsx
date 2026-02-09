'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL,
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      if (result.status === 200) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
        console.log('Email sent successfully');
      }
    } catch (err) {
      setError('Failed to send message. Please try again or contact directly.');
      console.error('Email error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Have a project in mind or just want to chat? I&apos;d love to hear from you!
          </p>
        </div>

        {submitted && (
          <div className="mb-6 p-4 bg-green-400/20 border-2 border-green-400 rounded-xl text-green-200 animate-scale-in flex items-center gap-3">
            <span className="text-2xl">✓</span>
            <p>Thank you for your message! I&apos;ll get back to you soon.</p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-400/20 border-2 border-red-400 rounded-xl text-red-200 animate-scale-in flex items-center gap-3">
            <span className="text-2xl">✕</span>
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in-up">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-semibold mb-2 group-focus-within:text-blue-400 transition-colors">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border-2 border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-white placeholder-gray-500 hover:border-slate-600"
                placeholder="Your name"
              />
            </div>
            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold mb-2 group-focus-within:text-blue-400 transition-colors">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border-2 border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-white placeholder-gray-500 hover:border-slate-600"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="group">
            <label htmlFor="subject" className="block text-sm font-semibold mb-2 group-focus-within:text-blue-400 transition-colors">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-800/50 border-2 border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-white placeholder-gray-500 hover:border-slate-600"
              placeholder="What is this about?"
            />
          </div>

          <div className="group">
            <label htmlFor="message" className="block text-sm font-semibold mb-2 group-focus-within:text-blue-400 transition-colors">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-slate-800/50 border-2 border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-white placeholder-gray-500 hover:border-slate-600 resize-none"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Contact Info Below Form */}
        <div className="mt-12 p-8 bg-slate-800/50 backdrop-blur-md border border-blue-400/20 rounded-2xl animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-center text-gray-300 mb-4">Or reach out directly:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
            <a href="mailto:jainilvyas1414@gmail.com" className="group">
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <p className="font-semibold text-blue-400 group-hover:text-blue-300 transition-colors link-underline">jainilvyas1414@gmail.com</p>
            </a>
            <a href="tel:+916359257718" className="group">
              <p className="text-sm text-gray-400 mb-1">Phone</p>
              <p className="font-semibold text-blue-400 group-hover:text-blue-300 transition-colors link-underline">+91-6359257718</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
