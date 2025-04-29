import { FaUserGraduate, FaClock, FaMoneyBillWave, FaChalkboardTeacher } from "react-icons/fa";

const reasons = [
  {
    icon: <FaChalkboardTeacher className="text-4xl text-yellow-500" />,
    title: "Qualified Instructors",
    desc: "Learn from experienced and certified Quran teachers.",
  },
  {
    icon: <FaClock className="text-4xl text-yellow-500" />,
    title: "Flexible Timings",
    desc: "Choose class schedules that fit your routine.",
  },
  {
    icon: <FaUserGraduate className="text-4xl text-yellow-500" />,
    title: "Free Trial Classes",
    desc: "Experience our teaching before enrolling.",
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-yellow-500" />,
    title: "Affordable Pricing",
    desc: "Quality Islamic education at budget-friendly rates.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-black/90 relative">
      {/* Golden Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-yellow-500/20" /> */}
      
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Why Choose Us?</h2>
        <p className="text-gray-200 mb-12">Empowering you with accessible, flexible, and affordable Quranic education.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-black/80 backdrop-blur-sm shadow-lg rounded-2xl p-6 hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20 cursor-pointer"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-400">{reason.title}</h3>
              <p className="text-gray-300 mt-2">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
