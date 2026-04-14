import React, { } from 'react';
import FriendUse from '../../hooks/FriendUse';
import { RingLoader } from 'react-spinners';
import FriendCard from '../ui/FriendCard';

const TrandingFriend = () => {
    const { fends, loading } = FriendUse();

    return (

        <div className='mx-auto container bg-[#F8FAFC] w-[1110px] mb-10'>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 container mb-10'>

                <div className='flex flex-col justify-center items-center text-center bg-white py-5 rounded'>
                    <h1 className='font-bold text-2xl'>{fends.length}</h1>
                    <p className='text-[#64748B]'>Total Friends</p>
                </div>

                <div className='flex flex-col justify-center items-center text-center bg-white py-5 rounded'>
                    <h1 className='font-bold text-2xl'>{fends.filter(f => f.status === "on-track").length}</h1>
                    <p className='text-[#64748B]'>On Track</p>
                </div>

                <div className='flex flex-col justify-center items-center text-center bg-white py-5 rounded'>
                    <h1 className='font-bold text-2xl'>{fends.filter(f => f.status === "overdue" || f.status === "almost due").length}</h1>
                    <p className='text-[#64748B]'>Need Attention</p>
                </div>

                <div className='flex flex-col justify-center items-center text-center bg-white py-5 rounded'>
                    <h1 className='font-bold text-2xl'>{fends.filter(f => f.days_since_contact <= 14).length}</h1>
                    <p className='text-[#64748B]'>Interactions This Month</p>
                </div>

            </div>

            <div>
                {loading == true ? <div className='flex justify-center items-center'><RingLoader /></div> : <div className='grid grid-cols-4 gap-8 container mx-auto justify-items-center'>
                    {
                        fends.map((fnd, index) => {
                            return (
                               <FriendCard fnd={fnd} key={index}/>
                            )
                        })
                    }
                </div>}
            </div>
        </div>
    );
};

export default TrandingFriend;