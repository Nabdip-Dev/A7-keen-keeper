import React from 'react';

const Bennar = () => {
    return (
        <div className="py-20 text-center">
           
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                Friends to keep close in your life
            </h1>

            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
                Your personal shelf of meaningful connections. Browse, tend, and nurture
                the relationships that matter most.
            </p>

            <button className="mt-6 px-6 py-2 bg-[#244D3F] text-white rounded shadow hover:bg-green-800 transition">
                + Add a Friend
            </button>
        </div>
    );
};

export default Bennar;