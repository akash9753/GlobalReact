import React, { useState } from 'react';

const ProfilerEx1 = () => {
    let [count, setCount] = useState(0);
    const Increase=(()=>{
         setCount(count++)
    })
    return (

        <>
            <div>{count}</div>
            <button onClick={()=>Increase()}>Increase</button>
        </>
    );
};

export default ProfilerEx1;