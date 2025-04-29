const Banner = () => {
    const features = [
      { icon: "📖", title: "Qualified Instructors" },
      { icon: "📅", title: "Flexible Timings" },
      { icon: "🎓", title: "Free Trial Classes" },
      { icon: "💰", title: "Affordable Pricing" }
    ];
  
    return (
      <div className="bg-gradient-to-r from-black/90 to-black/80 p-4 sm:p-6 md:p-8 m-2 rounded-sm flex flex-wrap justify-around gap-6 sm:gap-8 md:gap-12 items-center shadow-xl relative overflow-hidden">
        {/* Golden Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-yellow-500/20" />
        
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 sm:space-y-3 relative z-10 min-w-[120px] sm:min-w-[140px]">
            <span className="text-3xl sm:text-4xl">{feature.icon}</span>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-[#fff] text-center">{feature.title}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Banner;
  