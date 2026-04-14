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
    const friend = fends.find((fnd) => String(fnd.id) === id)
    if (loading) {
        return (
            <div className='flex justify-center items-center'><RingLoader /></div>
        )
    }
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-4  gap-4">


                <div className="col-span-1 space-y-4">

                    <div className="flex flex-col bg-white p-5 rounded-xl text-center justify-center items-center">
                        <img src={friend.picture} className="w-16 h-16 rounded-full mx-auto mb-2" />
                        <h2 className="font-semibold">{friend.name}</h2>

                        <span className="bg-red-400 text-white text-xs px-3 py-1 rounded-full block w-22 mt-2">
                            {friend.status}
                        </span>

                        <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full mt-2 inline-block">
                            {friend.tags[0]}
                        </span>

                        <p className="text-gray-400 text-xs mt-2">{friend.bio}</p>
                    </div>

                    {/* Buttons */}
                    <div className=" rounded-xl space-y-5 text-sm">
                        <button className="w-full bg-white py-2 rounded">Snooze 2 Weeks</button>
                        <button className="w-full bg-white py-2 rounded">Archive</button>
                        <button className="w-full bg-red-100 text-red-500 py-2 rounded">Delete</button>
                    </div>
                </div>

                <div className="col-span-3 space-y-4">

                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

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

                    <div className="bg-white p-5 rounded-xl h-33 flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold">Relationship Goal</h3>
                            <p className="text-gray-400 text-sm">
                                Connect every <span className='font-bold text-black'><b>{friend.goal} days</b></span>
                            </p>
                        </div>
                        <button className="bg-gray-100 px-3 py-1 rounded text-sm">Edit</button>
                    </div>
            
                    <div className="bg-white p-5 rounded-xl">
                        <h3 className="font-semibold mb-3">Quick Check-In</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            <button className="flex flex-col gap-1 bg-gray-100 py-3 cursor-pointer rounded text-center items-center justify-center border border-[#E9E9E9]"><FiPhoneCall /> Call</button>
                            <button className="flex flex-col gap-1 bg-gray-100 py-3 cursor-pointer rounded text-center items-center justify-center border border-[#E9E9E9]"><MdOutlineTextsms /> Text</button>
                            <button className="flex flex-col gap-1 bg-gray-100 py-3 cursor-pointer rounded text-center items-center justify-center border border-[#E9E9E9]"><LuVideo /> Video</button>
                           
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FriendDetiles;