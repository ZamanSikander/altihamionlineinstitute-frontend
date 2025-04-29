import { FaUserPlus, FaBook, FaChalkboardTeacher, FaChartLine } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus className="text-xl text-yellow-400" />,
    title: "Sign Up",
    desc: "Register on our website and book a free trial class.",
  },
  {
    icon: <FaBook className="text-xl text-yellow-400" />,
    title: "Choose a Course",
    desc: "Select a course that matches your learning needs.",
  },
  {
    icon: <FaChalkboardTeacher className="text-xl text-yellow-400" />,
    title: "Start Learning",
    desc: "Attend live one-on-one or group sessions with our expert tutors.",
  },
  {
    icon: <FaChartLine className="text-xl text-yellow-400" />,
    title: "Track Progress",
    desc: "Receive regular feedback and assessments for improvement.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 my-2 bg-black/90 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-12">
          How It Works?
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/80 backdrop-blur-sm border border-yellow-500/20 shadow-lg hover:shadow-yellow-500/20 transition duration-300 cursor-pointer">
                {step.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-400">{step.title}</h3>
                <p className="text-gray-300 mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
