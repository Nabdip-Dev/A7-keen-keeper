import React, { useEffect, useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineTextsms } from 'react-icons/md';
import { LuVideo } from 'react-icons/lu';
import { FaRegFaceFrownOpen } from 'react-icons/fa6';
import { useNavigate } from 'react-router';

const Timeline = () => {
    const [timeline, setTimeline] = useState([]);
    const navigate = useNavigate();
    const [filter, setFilter] = useState("");

    const loadData = () => {
        const data = JSON.parse(sessionStorage.getItem("timeline")) || [];
        setTimeline(data);
    };
    const filteredTimeline = filter
        ? timeline.filter(item => item.type === filter)
        : timeline;

    useEffect(() => {
        loadData();

        const handleUnload = () => {
            sessionStorage.removeItem("timeline");
        };

        window.addEventListener("beforeunload", handleUnload);

        return () => {
            window.removeEventListener("beforeunload", handleUnload);
        };
    }, []);

    return (

        <div className="p-6 bg-gray-100 min-h-screen">

            <div className="p-5 rounded-xl">
                <div className='flex justify-between'>
                    <h2 className="text-xl font-bold mb-4">Timeline</h2>
                </div>

                {
                    timeline.length > 0 && (
                        <select
                            className="select max-w-[200px] mb-6 appearance-none outline-none ring-0 shadow-none focus:outline-none focus:ring-0 focus:shadow-none"
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="Call">Call</option>
                            <option value="Text">Text</option>
                            <option value="Video">Video</option>
                        </select>
                    )
                }

                {filteredTimeline.length === 0 ? (
                    <div className='min-h-[60vh] flex justify-center items-center text-center'>
                        <div className="flex flex-col justify-center items-center text-center py-10 px-6 border-white rounded-xl shadow-sm border-2">

                            <div className="text-5xl text-gray-300 mb-3">
                                <FaRegFaceFrownOpen />
                            </div>

                            <h2 className="text-xl font-semibold text-gray-700">
                                No activity yet
                            </h2>

                            <p className="text-gray-400 text-sm mt-1">
                                Start calling, texting or video chatting to see your timeline here
                            </p>

                            <button
                                onClick={() => navigate("/")}
                                className="mt-5 cursor-pointer px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition"
                            >
                                Go Home
                            </button>

                        </div>
                    </div>
                ) : (
                    filteredTimeline.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 border border-[#E9E9E9] bg-white p-3 rounded mb-2">

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