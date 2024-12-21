import React from 'react';

const PaintedCTA = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Paint splash background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              45deg,
              #ff0000 0%,
              #ff8800 20%,
              #ffff00 30%,
              #00ff00 45%,
              #00ffff 60%,
              #0000ff 75%,
              #8800ff 90%,
              #ff00ff 100%
            )
          `
        }}
      >
        {/* Paint drip overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 0%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 25%),
            radial-gradient(circle at 70% 20%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 20%),
            radial-gradient(circle at 40% 60%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 30%),
            radial-gradient(circle at 80% 90%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 25%)
          `
        }} />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <div className="inline-block relative">
          <div className="absolute inset-0 bg-black/40 blur-xl -m-4" />
          <h2 className="relative text-4xl font-bold mb-6 text-white p-4">
            Ready to Transform Your Space?
          </h2>
        </div>
        
        <div className="relative inline-block max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-black/40 blur-lg -m-2" />
          <p className="relative mb-8 text-white text-lg p-2">
            Contact us today for a free consultation and quote.
          </p>
        </div>
        
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-white/10 blur-lg -m-2" />
          <button 
            className="relative bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            onClick={() => window.location.href = '/contact'}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaintedCTA;