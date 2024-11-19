import {useState} from 'react'

export default function DropDown({name, info, handleClick, activeIndex, index}){

    let isActive = activeIndex == index;

    const classes = `dropdown ${isActive ? "active" : "disable"}`;

    
    return (
        <>
            <div className={classes}
                 onClick={() => handleClick(index)}>
                <h2>{name}</h2>
            </div>
            <div className="form" hidden={!isActive}>
                    {info}
            </div>
        </>

    )
}

export function DutyDropDown({name, info}){
    const [isActive, setIsActive] = useState(false);
    const classes = `dropdown ${isActive ? "active": "disable"}`;
    
    function handleClick() {setIsActive(!isActive)}

    return (
        <>
        <div className={classes}
             onClick={handleClick}>
            <h2>{name}</h2>
        </div>
        <div className="form" hidden={!isActive}>
                {info}
        </div>
    </>
    )
}