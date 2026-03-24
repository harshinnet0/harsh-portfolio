import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-zinc-900/30">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-violet-400">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full"></div>
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-4 bg-violet-500/10 text-violet-400 rounded-xl">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                <a href="mailto:info.harsh.innet@gmail.com" className="text-zinc-400 hover:text-violet-400 transition-colors">
                  info.harsh.innet@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-4 bg-fuchsia-500/10 text-fuchsia-400 rounded-xl">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                <a href="tel:8210700949" className="text-zinc-400 hover:text-fuchsia-400 transition-colors">
                  +91 8210700949
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="p-4 bg-orange-500/10 text-orange-400 rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Location</h4>
                <p className="text-zinc-400">
                  Vivekananda Global University<br/>Jaipur, India
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 glass-card p-8 md:p-10"
          >
            <form action="https://formsubmit.co/info.harsh.innet@gmail.com" method="POST" className="space-y-6">
              {/* FormSubmit Config elements */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all placeholder:text-zinc-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-300">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all placeholder:text-zinc-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-zinc-300">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="_subject"
                  required
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all placeholder:text-zinc-600"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all placeholder:text-zinc-600 resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-4 px-6 rounded-xl transition-all shadow-lg shadow-violet-600/25 flex items-center justify-center gap-2 group"
              >
                Send Message <Send size={18} className="group-hover:-tranzinc-y-1 group-hover:tranzinc-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
