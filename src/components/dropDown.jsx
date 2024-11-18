/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
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