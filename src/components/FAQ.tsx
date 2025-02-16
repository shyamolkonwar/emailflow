import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How does EmailFlow\'s AI personalization work?',
    answer: 'EmailFlow uses advanced machine learning algorithms to analyze prospect data and generate personalized email content. The AI considers factors like industry, role, company size, and recent news to create relevant, engaging messages.'
  },
  {
    question: 'What kind of analytics does EmailFlow provide?',
    answer: 'Our platform provides comprehensive analytics including open rates, click-through rates, response rates, and conversion tracking. You\'ll also get AI-powered insights and recommendations to optimize your campaigns.'
  },
  {
    question: 'Can I integrate EmailFlow with my existing CRM?',
    answer: 'Yes! EmailFlow integrates seamlessly with popular CRM platforms like Salesforce, HubSpot, and Pipedrive. We also offer API access for custom integrations.'
  },
  {
    question: 'Is there a limit to how many emails I can send?',
    answer: 'Our plans are designed to scale with your needs. Starting from 1,000 emails per month on the basic plan, up to unlimited sends on enterprise plans. All plans include our AI personalization features.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Everything you need to know about EmailFlow
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-gunmetal p-6 rounded-xl text-left hover:bg-opacity-80 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-400">{faq.answer}</p>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;