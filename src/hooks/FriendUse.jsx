import React, { useEffect, useState } from 'react';

const FriendUse = () => {

    const [fends, setFends] = useState([]);
    const [loading, setLoding] = useState(true)
    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();
            // console.log(data)
            setTimeout(() => {
                setFends(data)
                setLoding(false)
            }, 500)
        }
        fetchData()
    }, [])
    console.log(fends)
    return { fends, loading };
};

export default FriendUse;