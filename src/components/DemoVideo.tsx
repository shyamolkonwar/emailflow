import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const DemoVideo = () => {
  return (
    <section className="py-20 bg-deepslate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            See EmailFlow in Action
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch how EmailFlow can transform your outreach strategy
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
            alt="EmailFlow Dashboard Preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors">
            <div className="bg-white/20 backdrop-blur-sm p-5 rounded-full group-hover:scale-110 transition-transform">
              <Play className="w-12 h-12 text-white" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoVideo;