const CallToAction = () => {
    return (
      <section className="py-16 my-2 bg-black/90 relative">
        {/* Golden Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-yellow-500/20" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
            Start Your Quran Learning Journey Today
          </h2>
          <p className="text-lg mb-6 text-gray-300">
            Join hundreds of students already benefiting from our expert tutors. Try a free class now and see the difference.
          </p>
          <a
            href="/signup"
            className="inline-block bg-yellow-500 text-black hover:bg-yellow-600 font-semibold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-yellow-500/20"
          >
            Book Free Trial Class
          </a>
        </div>
      </section>
    );
  };
  
  export default CallToAction;
  