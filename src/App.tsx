/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#E0F7FF] flex flex-items-center justify-center p-6 font-sans selection:bg-cyan-200">
      {/* Background Gradient Effect */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#E0F7FF] via-[#F0FDFF] to-[#E0F7FF] -z-10" />
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-200/30 blur-[120px] rounded-full -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/30 blur-[120px] rounded-full -z-10" />

      <main className="max-w-3xl w-full text-center space-y-8">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#22D3EE] to-[#0EA5E9] rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Mail className="text-white w-8 h-8 sm:w-10 sm:h-10" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-2"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#111827] tracking-tight">
            Something Amazing
          </h1>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#0EA5E9] to-[#22D3EE] bg-clip-text text-transparent tracking-tight">
            Is Coming Soon
          </h2>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          We're crafting an exceptional experience just for you. Join our
          waitlist to be the first to know when we launch.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white shadow-xl shadow-cyan-500/5"
            >
              <p className="text-cyan-600 font-semibold text-lg">
                Thanks for joining! We'll be in touch soon.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 p-2 bg-white/80 backdrop-blur-md rounded-[2rem] sm:rounded-full border border-white shadow-xl shadow-cyan-500/5"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-lg"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-[#0EA5E9] to-[#22D3EE] text-white font-semibold rounded-[1.5rem] sm:rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 active:scale-95"
              >
                Notify Me
              </button>
            </form>
          )}
        </motion.div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-sm text-gray-500"
        >
          No spam, ever. Unsubscribe at any time.
        </motion.p>
      </main>
    </div>
  );
}
