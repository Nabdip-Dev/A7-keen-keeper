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

    return (
        <div className='min-h-[70vh] max-w-[672px] flex flex-col mx-auto justify-center items-center px-8 md:px-0 md:py-6'>
            <h1 className="w-full text-left text-xl font-bold mb-6">
                Friendship Analytics
            </h1>
            <div className='bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-xl' style={{ width: '672px', height: '400px',paddingBottom: '24px'}}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie data={data} dataKey="value" innerRadius={80} outerRadius={120} />
                        <Legend />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Stats;