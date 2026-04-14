import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({ fnd, index }) => {
    return (
        <Link to={`/friend/${fnd.id}`} key={index} className="bg-gray-100 p-5 rounded-xl w-full text-center shadow">

            <img
                src={fnd.picture}
                alt={fnd.name}
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
            />

            <h3 className="font-semibold">{fnd.name}</h3>

            <p className="text-gray-500 text-sm mb-2">
                {fnd.days_since_contact} days ago
            </p>

            <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                {fnd.tags[0]}
            </span>

            {/* Status Button */}
            <div className="mt-3">
                <button className={`text-white text-xs px-4 py-1 rounded-full ${fnd.status === "overdue" ? "bg-red-400" : fnd.status === "almost due" ? "bg-yellow-400" : "bg-green-400"}`}>
                    {fnd.status === "overdue" ? "Overdue" : fnd.status === "almost due" ? "Almost Due" : "On Track"}
                </button>
            </div>

        </Link>
    );
};

export default FriendCard;