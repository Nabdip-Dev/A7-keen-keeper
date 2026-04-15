import React, { useEffect, useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineTextsms } from 'react-icons/md';
import { LuVideo } from 'react-icons/lu';

const Timeline = () => {
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("timeline")) || [];

        console.log("Loaded:", data); // debug

        setTimeline(data);
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            <div className="bg-white p-5 rounded-xl">
                <h2 className="text-xl font-bold mb-4">Timeline</h2>

                {timeline.length === 0 ? (
                    <p className="text-gray-400">No activity yet</p>
                ) : (
                    timeline.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 bg-gray-100 p-3 rounded mb-2">

                            {item.type === "Call" && <FiPhoneCall />}
                            {item.type === "Text" && <MdOutlineTextsms />}
                            {item.type === "Video" && <LuVideo />}

                            <div>
                                <p className="text-sm font-medium">
                                    {item.type} with {item.name}
                                </p>
                                <p className="text-xs text-gray-400">
                                    {item.date}
                                </p>
                            </div>

                        </div>
                    ))
                )}

            </div>

        </div>
    );
};

export default Timeline;