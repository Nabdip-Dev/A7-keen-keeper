import React from 'react';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const Stats = () => {
    const timeline = JSON.parse(sessionStorage.getItem("timeline")) || [];

    const call = timeline.filter(item => item.type === "Call").length;
    const text = timeline.filter(item => item.type === "Text").length;
    const video = timeline.filter(item => item.type === "Video").length;

    const data = [
        { name: 'Call', value: call, fill: '#0088FE' },
        { name: 'Text', value: text, fill: '#00C49F' },
        { name: 'Video', value: video, fill: '#FF8042' },
    ];
    const hasData = data.some(item => item.value > 0);

    return (
        <div className='min-h-[70vh] w-full max-w-[672px] flex flex-col mx-auto justify-center items-center px-4 md:px-0 md:py-6'>

            <h1 className="w-full text-left text-2xl md:text-5xl font-bold mb-6">
                Friendship Analytics
            </h1>

            <div className='bg-white w-full shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-xl px-4 md:px-8 py-6'>

                <h1 className='text-xl font-semibold'>By Interaction Type</h1>
                <div className="w-full h-[300px] sm:h-[350px] md:h-[300px]">
                    {hasData ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    innerRadius="60%"
                                    outerRadius="80%"
                                    stroke="none"
                                />
                                <Legend />
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="w-full h-full flex flex-col justify-center items-center text-gray-400">
                            <p className="text-lg font-semibold">No Data Available</p>
                            <p className="text-sm">Add some activity to see chart</p>
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
};

export default Stats;