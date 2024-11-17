import { useState } from "react"

export default function Education({educationCardArray, handleSubmit, handleRemove, handleEdit}) {
        
    return (
        <>
        <div  className="card-wrapper">
            {educationCardArray.length != 0 && educationCardArray.map(card  => {
                return (<div className="education-card" key={card.id} >
                            <h5>{card.name}</h5>
                            <p>{card.city}, {card.state}</p>
                            <p>{card.degree} in {card.major}</p>
                            <div className="btn-wrapper">
                                <button type="button" className="remove" onClick={() => handleRemove(card.id)} ></button>
                                <button type="button" className="edit" onClick={() => }></button>
                            </div>
                        </div>)
            })}
        </div>
        <form onSubmit={handleSubmit}>
            <div className="input-field">
                <label htmlFor="school">School Name</label>
                <input type="text" id="school" />
            </div>
            <div className="input-field">
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" />
            </div>
            <div className="input-field">
                <label htmlFor="major">Major</label>
                <input type="text" id="major" />
            </div>
            <div className="input-field">
                <label htmlFor="city">City</label>
                <input type="text" id="city" />
            </div>
            <div className="input-field">
                <label htmlFor="state">State</label>
                <input type="text" id="state" />
            </div>
            <div className="edu-btn-wrapper">
                <button type="submit">Add</button>
            </div>
        </form>

        
        
        </>
    )
}

function Dialog (updateHandler, card) {
    return (
        <dialog>
            <form onSubmit={updateHandler}>
                <div className="input-field">
                    <label htmlFor="school">School Name</label>
                    <input type="text" id="school" value={card.name} />
                </div>
                <div className="input-field">
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id="degree" value={card.degree} />
                </div>
                <div className="input-field">
                    <label htmlFor="major">Major</label>
                    <input type="text" id="major" value={card.major} />
                </div>
                <div className="input-field">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" value={card.city} />
                </div>
                <div className="input-field">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" value={card.state} />
                </div>
                <div className="edu-btn-wrapper">
                    <button type="submit">Add</button>
                </div>
            </form>
        </dialog>
    )
}