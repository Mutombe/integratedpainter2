// src/pages/CommercialPainting.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Building, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CommercialPainting = () => {
  const benefits = [
    'Minimal business disruption',
    'Industry-compliant coatings',
    'Flexible scheduling options',
    'Project management expertise',
    'Safety-first approach',
    'Commercial-grade materials'
    ];
    
  const navigate = useNavigate();

  const services = [
    {
      title: 'Office Spaces',
      description: 'Professional painting solutions for offices and corporate environments.'
    },
    {
      title: 'Retail Establishments',
      description: 'Custom painting services for retail stores and shopping centers.'
    },
    {
      title: 'Industrial Facilities',
      description: 'Specialized coatings and painting for industrial buildings.'
    },
    {
      title: 'Healthcare Facilities',
      description: 'Antimicrobial and hygienic painting solutions for healthcare environments.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/p4.jpg" 
            alt="Commercial Painting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm" />
        </div>
        
        <div className="relative container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Painting Services</h1>
          <p className="text-xl max-w-2xl">Professional painting solutions for businesses and commercial properties.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Services Grid */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Commercial Services</h2>
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
              <h2 className="text-3xl font-bold">The Commercial Advantage</h2>
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
          <h2 className="text-3xl font-bold mb-4">Enhance Your Commercial Space</h2>
          <p className="mb-8">Schedule a consultation to discuss your commercial project</p>
                  <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full transition-colors" onClick={() => navigate("/contact")}>
            Request Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default CommercialPainting;