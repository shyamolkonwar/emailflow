import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Target, BarChart3 } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Save 10+ Hours Weekly',
    description: 'Automate repetitive tasks and focus on what matters most - building relationships.',
    metric: '10+',
    unit: 'hours saved'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Boost Conversion Rates',
    description: 'AI-powered personalization helps you connect with prospects more effectively.',
    metric: '3x',
    unit: 'higher conversion'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Real-time Analytics',
    description: 'Make data-driven decisions with comprehensive campaign insights.',
    metric: '100%',
    unit: 'data visibility'
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose EmailFlow?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform your outreach strategy with powerful automation and insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-gunmetal rounded-xl p-8 h-full transform transition-transform group-hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg">
                    {benefit.icon}
                  </div>
                  <span className="text-3xl font-bold text-white">{benefit.metric}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 mb-4">{benefit.description}</p>
                <span className="text-sm text-purple-400">{benefit.unit}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;