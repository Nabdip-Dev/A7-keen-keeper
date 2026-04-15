import React from 'react';
import FriendUse from '../../hooks/FriendUse';
import { useParams } from 'react-router';
import { RingLoader } from 'react-spinners';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineTextsms } from 'react-icons/md';
import { LuVideo } from 'react-icons/lu';

const FriendDetiles = () => {
    const { id } = useParams();
    const { fends, loading } = FriendUse();

    const friend = fends.find((fnd) => String(fnd.id) === id);

    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <RingLoader />
            </div>
        );
    }

    const handleAction = (type) => {
        const newEvent = {
            type,
            name: friend.name,
            date: new Date().toLocaleDateString()
        };

        // 👉 always array as base
        const oldData = JSON.parse(localStorage.getItem("timeline")) || [];

        const updatedData = [...oldData, newEvent];

        localStorage.setItem("timeline", JSON.stringify(updatedData));

        console.log("Saved:", updatedData); // debug
    };
    
    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            <div className="grid grid-cols-4 gap-4">

                {/* ================= LEFT ================= */}
                <div className="col-span-1 space-y-4">

                    <div className="flex flex-col bg-white p-5 rounded-xl text-center items-center">
                        <img src={friend.picture} className="w-16 h-16 rounded-full mb-2" />
                        <h2 className="font-semibold">{friend.name}</h2>

                        <span className="bg-red-400 text-white text-xs px-3 py-1 rounded-full mt-2">
                            {friend.status}
                        </span>

                        <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full mt-2">
                            {friend.tags[0]}
                        </span>

                        <p className="text-gray-400 text-xs mt-2">
                            {friend.bio}
                        </p>
                    </div>

                    <div className="space-y-3 text-sm">
                        <button className="w-full bg-white py-2 rounded">Snooze 2 Weeks</button>
                        <button className="w-full bg-white py-2 rounded">Archive</button>
                        <button className="w-full bg-red-100 text-red-500 py-2 rounded">Delete</button>
                    </div>

                </div>

                {/* ================= RIGHT ================= */}
                <div className="col-span-3 space-y-4">

                    {/* STATS */}
                    <div className="grid grid-cols-3 gap-4">

                        <div className="bg-white p-5 rounded-xl text-center">
                            <h1 className="text-2xl font-bold">{friend.days_since_contact}</h1>
                            <p className="text-gray-400 text-sm">Days Since Contact</p>
                        </div>

                        <div className="bg-white p-5 rounded-xl text-center">
                            <h1 className="text-2xl font-bold">{friend.goal}</h1>
                            <p className="text-gray-400 text-sm">Goal (Days)</p>
                        </div>

                        <div className="bg-white p-5 rounded-xl text-center">
                            <h1 className="text-2xl font-bold">{friend.next_due_date}</h1>
                            <p className="text-gray-400 text-sm">Next Due</p>
                        </div>

                    </div>

                    {/* RELATIONSHIP GOAL */}
                    <div className="bg-white p-5 rounded-xl flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold">Relationship Goal</h3>
                            <p className="text-gray-400 text-sm">
                                Connect every <b>{friend.goal} days</b>
                            </p>
                        </div>
                        <button className="bg-gray-100 px-3 py-1 rounded text-sm">
                            Edit
                        </button>
                    </div>

                    {/* QUICK CHECK IN */}
                    <div className="bg-white p-5 rounded-xl">
                        <h3 className="font-semibold mb-3">Quick Check-In</h3>

                        <div className="grid grid-cols-3 gap-3">

                            <button
                                onClick={() => handleAction("Call")}
                                className="flex flex-col items-center bg-gray-100 py-3 rounded"
                            >
                                <FiPhoneCall />
                                Call
                            </button>

                            <button
                                onClick={() => handleAction("Text")}
                                className="flex flex-col items-center bg-gray-100 py-3 rounded"
                            >
                                <MdOutlineTextsms />
                                Text
                            </button>

                            <button
                                onClick={() => handleAction("Video")}
                                className="flex flex-col items-center bg-gray-100 py-3 rounded"
                            >
                                <LuVideo />
                                Video
                            </button>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default FriendDetiles;