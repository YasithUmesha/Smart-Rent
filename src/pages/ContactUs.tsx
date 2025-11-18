import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-white to-[#4ECDC4]  bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help! Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-neutral-900 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <MessageSquare className="text-[#4ECDC4]" />
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="Saman Kumara"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="yourname@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-6 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 shadow-lg"
              >
                {submitted ? (
                  <>Sent Successfully! ✓</>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="bg-neutral-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:border-[#4ECDC4] transition duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 p-3 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-400 mb-2">Send us an email anytime</p>
                  <a href="mailto:support@smartrent.com" className="text-[#4ECDC4] hover:text-[#73f5ec] transition">
                    support@smartrent.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:border-[#4ECDC4] transition duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 p-3 rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-400 mb-2">Monday-Friday from 8am to 6pm</p>
                  <a href="tel:+94 711 118 599" className="text-[#4ECDC4] hover:text-[#73f5ec] transition">
                    +94 711 118 599
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:border-[#4ECDC4] transition duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 p-3 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-400 mb-2">Come say hello</p>
                  <p className="text-[#4ECDC4]">
                    Walawwaththa Road,<br />
                    Pambahinna, Sri Lanka.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:border-[#4ECDC4] transition duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 p-3 rounded-lg">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Business Hours</h3>
                  <p className="text-gray-400 mb-2">When we're available</p>
                  <div className="text-[#4ECDC4] space-y-1">
                    <p>Monday - Friday: 8am - 6pm</p>
                    <p>Saturday: 9am - 4pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-gradient-to-r from-[#a7ebe6]/10 to-[#73f5ec]/10 border border-[#4ECDC4]/30 rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-2">Quick Answers</h3>
              <p className="text-gray-400 mb-4">
                Looking for instant help? Check out our FAQ section for answers to common questions.
              </p>
              <a
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-[#4ECDC4] hover:text-[#73f5ec] font-medium transition"
              >
                Visit FAQ →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;