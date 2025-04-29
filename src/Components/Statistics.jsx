import React from 'react';

const Statistics = () => {
    const stats = [
        {
            number: '1000+',
            label: 'Happy Students',
            icon: '👨‍🎓'
        },
        {
            number: '10+',
            label: 'Years of Experience',
            icon: '📅'
        },
        {
            number: '25+',
            label: 'Countries Worldwide',
            icon: '🌍'
        },
        {
            number: '100+',
            label: 'Qualified Teachers',
            icon: '👨‍🏫'
        }
    ];

    return (
        <section className="py-16 bg-black/90 relative">
            <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl font-bold text-yellow-400 mb-4">Our Impact</h2>
                <p className="text-gray-200 mb-12">Join our growing community of learners worldwide</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            className="bg-black/80 backdrop-blur-sm shadow-lg rounded-2xl p-8 hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20"
                        >
                            <div className="text-4xl mb-4">{stat.icon}</div>
                            <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                            <div className="text-lg text-gray-300">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics; 