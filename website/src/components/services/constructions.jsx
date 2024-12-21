// src/pages/ConstructionServices.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Ruler, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ConstructionServices = () => {
  const benefits = [
    'Licensed and insured contractors',
    'Project management expertise',
    'Quality materials and workmanship',
    'Timely project completion',
    'Safety compliance',
    'Transparent communication'
  ];

    const navigate = useNavigate();
    
  const services = [
    {
      title: 'New Construction',
      description: 'Complete new building construction services for residential and commercial projects.'
    },
    {
      title: 'Renovations',
      description: 'Comprehensive renovation and remodeling services for existing structures.'
    },
    {
      title: 'Extensions',
      description: 'Custom building extensions and additions to expand your space.'
    },
    {
      title: 'Project Management',
      description: 'Professional oversight and coordination of construction projects.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/p3.webp" 
            alt="Construction Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm" />
        </div>
        
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Construction Services</h1>
          <p className="text-xl max-w-2xl">Professional construction solutions for all your building needs.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Services Grid */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Construction Services</h2>
              <div className="grid gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-lg"
                  >
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Our Commitment</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg"
                  >
                    <Check className="text-primary" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Construction Project</h2>
          <p className="mb-8">Contact us to discuss your construction needs</p>
          <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full transition-colors" onClick={() => navigate("/contact")}>
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ConstructionServices;