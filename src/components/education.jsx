import { useState, useRef } from "react"

export default function Education({educationCardArray, handleSubmit, handleRemove, handleUpdate}) {
    const [currentCard, setCurrentCard] = useState([{name: "", degree:"",major:"",city:"",state:""}]);


    const dialogRef = useRef(null);

    function  setCurrentCardId(id) {
        setCurrentCard(educationCardArray.filter(card => card.id == id));
    }

    function handleEdit(id){
        setCurrentCardId(id);
        toggleDialog();
    }

    function toggleDialog() {

        if(!dialogRef.current){
            return;
        }

        dialogRef.current.hasAttribute("open") ? dialogRef.current.close() : dialogRef.current.showModal();
    }

    function dialogChangeHandler(e){
        switch(e.target.id) {
            case "school": 
                setCurrentCard([{...currentCard[0], name: e.target.value}]);
                break;
            case 'degree':
                setCurrentCard([{...currentCard[0], degree: e.target.value}]);
                break;
            case 'major':
                setCurrentCard([{...currentCard[0], major: e.target.value}]);
                break;
            case 'city':
                setCurrentCard([{...currentCard[0], city: e.target.value}]);
                break;
            case 'state':
                setCurrentCard([{...currentCard[0], state: e.target.value}]);
                break;
            case 'date':
                setCurrentCard([{...currentCard[0], dateInput: e.target.value}]);
                break;

        }
        
    }


    return (
        <>
        <div  className="card-wrapper">
            {educationCardArray.length != 0 && educationCardArray.map(card  => {
                return (<div className="education-card" key={card.id} >
                            <h5>{card.name}</h5>
                            <p>{card.date}</p>
                            <p>{card.city}, {card.state}</p>
                            <p>{card.degree} in {card.major}</p>
                            <div className="btn-wrapper">
                                <button type="button" className="remove" onClick={() => handleRemove(card.id)} ></button>
                                <button type="button" className="edit" onClick={() => handleEdit(card.id)}></button>
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
            <div className="input-field">
                <label htmlFor="date">Graduation Date</label>
                <input type="month" id="date" />
            </div>
            <div className="edu-btn-wrapper">
                <button type="submit" className="add-btn">Add</button>
            </div>
        </form>

        <dialog ref={dialogRef}>
            <form onSubmit={(e) => handleUpdate(e,currentCard[0].id)} >
                <h2>Edit Education Information</h2>
                <div className="input-field">
                    <label htmlFor="school">School Name</label>
                    <input type="text" id="school" value={currentCard[0].name} onChange={dialogChangeHandler} />
                </div>
                <div className="input-field">
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id="degree" value={currentCard[0].degree} onChange={dialogChangeHandler} />
                </div>
                <div className="input-field">
                    <label htmlFor="major">Major</label>
                    <input type="text" id="major" value={currentCard[0].major} onChange={dialogChangeHandler} />
                </div>
                <div className="input-field">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" value={currentCard[0].city} onChange={dialogChangeHandler} />
                </div>
                <div className="input-field">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" value={currentCard[0].state} onChange={dialogChangeHandler} />
                </div>
                <div className="input-field">
                    <label htmlFor="date">Graduation Date</label>
                    <input type="month" id="date" value={currentCard[0].dateInput} onChange={dialogChangeHandler} />
                </div>
                <div className="edu-btn-wrapper">
                    <button type="submit" onClick={ toggleDialog}>Update</button>
                    <button type="button" onClick={toggleDialog} className="cancel-btn">Cancel</button>
                </div>
            </form>
        </dialog>
        
        </>
    )
}