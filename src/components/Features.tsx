import React from 'react';
import { motion } from 'framer-motion';
import { Bot, BarChart3, Calendar, Mail } from 'lucide-react';

const features = [
  {
    icon: <Mail className="w-8 h-8" />,
    title: 'Automated Lead Generation',
    description: 'AI-powered email sending & personalization that helps you reach more prospects with less effort.'
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: 'Content Creation Automation',
    description: 'Generate personalized email sequences and social posts using advanced AI technology.'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Analytics Dashboard',
    description: 'Get real-time insights and actionable recommendations to optimize your campaigns.'
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'CRM & Scheduling',
    description: 'Seamlessly manage leads and automate appointment scheduling in one place.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-[#1E2226]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Powerful Features for Modern Outreach
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to automate your email outreach and scale your business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#2A3439] p-6 rounded-xl hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;