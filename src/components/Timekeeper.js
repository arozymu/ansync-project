import React, { useState } from 'react'
import Timekeeper from "react-timekeeper";


/* eslint-disable no-unused-vars */
const MyTimekeeper = () => {
    const [time, setTime] = useState('12:34pm')
    

    return (
        <div>
            <Timekeeper
                time={time}
                onChange={(newTime) => setTime(newTime.formatted12)}
                doneButton={(newTime) => (
                    <div
                        style={{ textAlign: 'center', padding: '10px 0' }}
                        onClick={() => alert('new time is now', newTime.formatted12)}
                    >
                        Close
                    </div>
                )}
            />
            <span>Time is {time}</span>
        </div>
    )

}




export default Timekeeper

/* eslint-disable no-unused-vars */