import React from 'react';
import Navbar from '../Components/Navbar';
import FeeChartHome from '../Components/FeeChartHome';
import Footer from '../Components/Footer';
const feeData = [
  {
    plan: '3 Days / Week',
    duration: '30 mins / session',
    monthly: '$50',
    quarterly: '$150',
    yearly: '$500'
  },
  {
    plan: '5 Days / Week',
    duration: '30 mins / session',
    monthly: '$50',
    quarterly: '$200',
    yearly: '$500'
  },
  {
    plan: 'Weekend Only',
    duration: '30 mins / session', 
    monthly: '$50',
    quarterly: '$200',
    yearly: '$500'
  },
  
];

const FeeChart = () => {
  return (
    <div className="">
        <Navbar/>
        {/* fee-hero-section */}
        <FeeChartHome/>
      <div className="max-w-5xl mx-auto my-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Fee Structure</h2>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 font-semibold">Plan</th>
                <th className="px-6 py-3 font-semibold">Session Duration</th>
                <th className="px-6 py-3 font-semibold">Monthly</th>
                <th className="px-6 py-3 font-semibold">Quarterly</th>
                <th className="px-6 py-3 font-semibold">Yearly</th>
              </tr>
            </thead>
            <tbody>
              {feeData.map((item, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{item.plan}</td>
                  <td className="px-6 py-4">{item.duration}</td>
                  <td className="px-6 py-4">{item.monthly}</td>
                  <td className="px-6 py-4">{item.quarterly}</td>
                  <td className="px-6 py-4">{item.yearly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-500 text-center mt-6">
          * All fees are in USD. Discounts available for siblings & long-term enrollments.
        </p>
      </div>
      {/* footer */}
      <Footer/>
    </div>
  );
};

export default FeeChart;
