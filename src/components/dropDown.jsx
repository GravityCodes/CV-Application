import { useState } from "react";

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
export default function DropDown({name, info}){
    const [showStatus, setShowStatus] = useState(false);
    const classes = `dropdown ${showStatus ? "active" : "disable"}`;


    const handleClick = () => setShowStatus(!showStatus);
    
    return (
        <>
            <div className={classes}
                 onClick={handleClick}>
                <h2>{name}</h2>
            </div>
            <div className="form" hidden={!showStatus}>
                    {info}
            </div>
        </>

    )
}