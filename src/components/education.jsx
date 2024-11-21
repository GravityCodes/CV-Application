import { useState, useRef } from "react"

export default function Education({educationCardArray, handleSubmit, handleRemove, handleUpdate, toggleForm, formStatus}) {
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
        <div className="add-eduCard-wrapper">
            <button className="add-eduCard-btn"
                 onClick={toggleForm}
                 hidden={formStatus}>
                    Add New Education
            </button>
        </div>
        <form onSubmit={handleSubmit} hidden={!formStatus}>
            <div className="input-field">
                <label htmlFor="school">School Name</label>
                <input type="text" id="school" />
            </div>
            <div className="input-field">
                <label htmlFor="degree">Degree</label>
                <select  id="degree" name="degree">
                        <option value="" >-- select one --</option>
                        <option value="GED">GED</option>
                        <option value="Vocational qualification">Vocational qualification</option>
                        <option value="Associate's degree">Associate's degree</option>
                        <option value="Bachelor's degree">Bachelor's degree</option>
                        <option value="Master's degree">Master's degree</option>
                        <option value="Doctorate or higher">Doctorate</option>
                    </select>
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
                <select name="state" id="state" >
                    <option value="">Select a State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
            </div>
            <div className="input-field">
                <label htmlFor="date">Graduation Date</label>
                <input type="month" id="date" />
            </div>
            <div className="edu-btn-wrapper">
                <button type="submit" className="add-btn">Submit</button>
                <button type="reset" className="cancel-btn" onClick={toggleForm}>Remove</button>
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
                    <select  id="degree" name="degree" value={currentCard[0].degree} onChange={dialogChangeHandler}>
                        <option value="" >-- select one --</option>
                        <option value="GED">GED</option>
                        <option value="Vocational qualification">Vocational qualification</option>
                        <option value="Associate's degree">Associate's degree</option>
                        <option value="Bachelor's degree">Bachelor's degree</option>
                        <option value="Master's degree">Master's degree</option>
                        <option value="Doctorate or higher">Doctorate</option>
                    </select>
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
                    <select name="state" id="state" value={currentCard[0].state} onChange={dialogChangeHandler}>
                        <option value="" >Select a State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>   
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