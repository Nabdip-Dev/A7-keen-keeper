import React from 'react';
import FriendUse from '../../hooks/FriendUse';
import { useParams } from 'react-router';
import { RingLoader } from 'react-spinners';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineTextsms } from 'react-icons/md';
import { LuVideo } from 'react-icons/lu';
import { toast } from 'react-toastify';
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { FaArchive } from 'react-icons/fa';

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
            date: new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
            })
        };

        const oldData = JSON.parse(sessionStorage.getItem("timeline")) || [];
        const updatedData = [...oldData, newEvent];

        sessionStorage.setItem("timeline", JSON.stringify(updatedData));
        toast.success(`${type} saved successfully!`);
    };

    return (
        <div className="p-6 min-h-[80vh] w-[1110px] mx-auto flex items-center">

            <div className="grid grid-rows md:grid-cols-4 gap-4">

                {/* ================= LEFT ================= */}
                <div className="col-span-1 space-y-4">

                    <div className="flex flex-col bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] p-5 rounded-xl text-center items-center">
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

                        <button className="w-full cursor-pointer flex gap-1 font-bold justify-center items-center text-center bg-white border border-[#E9E9E9] py-2 rounded"><RiNotificationSnoozeLine />Snooze 2 Weeks</button>

                        <button className="w-full cursor-pointer flex gap-1 font-bold justify-center items-center text-center bg-white border border-[#E9E9E9] py-2 rounded"><FaArchive />Archive</button>

                        <button className="w-full cursor-pointer flex gap-1 font-bold justify-center items-center text-center bg-red-100 border border-[#E9E9E9] text-red-500 py-3 rounded"><RiDeleteBin6Line />Delete</button>
                        
                    </div>

                </div>

                {/* ================= RIGHT ================= */}
                <div className="col-span-3 space-y-4">

                    {/* STATS */}
                    <div className="grid grid-cols-3 gap-4">

                        <div className="bg-white py-8 px-5 rounded-xl text-center shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
                            <h1 className="text-2xl font-bold">{friend.days_since_contact}</h1>
                            <p className="text-gray-400 text-sm">Days Since Contact</p>
                        </div>

                        <div className="bg-white py-8 px-5 rounded-xl text-center shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
                            <h1 className="text-2xl font-bold">{friend.goal}</h1>
                            <p className="text-gray-400 text-sm">Goal (Days)</p>
                        </div>

                        <div className="bg-white py-8 px-5 rounded-xl text-center shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
                            <h1 className="text-2xl font-bold">
                                {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                })}
                            </h1>
                            <p className="text-gray-400 text-sm">Next Due</p>
                        </div>

                    </div>

                    {/* RELATIONSHIP GOAL */}
                    <div className="bg-white py-8 px-5 rounded-xl flex justify-between items-center shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
                        <div>
                            <h3 className="font-semibold">Relationship Goal</h3>
                            <p className="text-gray-400 text-sm">
                                Connect every <b>{friend.goal} days</b>
                            </p>
                        </div>
                        <button className="btn bg-gray-100  rounded text-sm">
                            Edit
                        </button>
                    </div>

                    {/* QUICK CHECK IN */}
                    <div className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] p-5 rounded-xl">
                        <h3 className="font-semibold mb-3">Quick Check-In</h3>

                        <div className="grid grid-cols-3 gap-3">

                            <button
                                onClick={() => handleAction("Call")}
                                className="flex flex-col cursor-pointer border border-[#E9E9E9] items-center bg-gray-100 py-3 rounded transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 hover:border-gray-300"
                            >
                                <FiPhoneCall />
                                Call
                            </button>

                            <button
                                onClick={() => handleAction("Text")}
                                className="flex flex-col cursor-pointer border border-[#E9E9E9] items-center bg-gray-100 py-3 rounded transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 hover:border-gray-300"
                            >
                                <MdOutlineTextsms />
                                Text
                            </button>

                            <button
                                onClick={() => handleAction("Video")}
                                className="flex flex-col cursor-pointer border border-[#E9E9E9] items-center bg-gray-100 py-3 rounded transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 hover:border-gray-300"
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