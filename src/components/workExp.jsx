import { useState, useRef } from "react"
import {DutyDropDown} from "./dropDown";
import Duty from "../modules/dutyObject";

export default function WorkExperience({
                                        workSubmitHandler,
                                        dutyContainer,
                                        addDutyHandler, 
                                        dutyRemoveHandler, 
                                        workContainer, 
                                        handleRemove, 
                                        handleUpdate,
                                        toggleForm,
                                        formStatus
                                        }) {
    
    const [currentCard, setCurrentCard] = useState([{name: "", jobTitle:"", city:"", state:"", startDate:"", endDate:"", dutiesList:[]}]);
    const [dutyValue, setDutyValue] = useState("");
    const [updateDutyValue, setUpdateDutyValue] = useState("");
    const dialogRef = useRef(null);
    
    function changeDutyHandler(e) {
        setDutyValue(e.target.value);
    }

   
    function addDutyBtnHandler(){
        addDutyHandler(dutyValue);
        setDutyValue("");
    }

    function addDutyKeyHandler(e){
        if(e.key == "Enter"){
            e.preventDefault();
            e.stopPropagation();
            addDutyBtnHandler();
        }
    }

    function  setCurrentCardId(id) {
        setCurrentCard(workContainer.filter(card => card.id == id));
    }

    function handleEdit(id){
        setCurrentCardId(id);
        toggleDialog();
    }



    //Dialog form methods

    
    function toggleDialog() {

        if(!dialogRef.current){
            return;
        }

        dialogRef.current.hasAttribute("open") ? dialogRef.current.close() : dialogRef.current.showModal();
    }


    function changeUpdateDutyHandler(e) {
        setUpdateDutyValue(e.target.value);
    }

    function addUpdateDutyBtnHandler(){
        setCurrentCard([{...currentCard[0], dutiesList:[...currentCard[0].dutiesList, new Duty(updateDutyValue)]}]);    
        setUpdateDutyValue("");
    }

    function dutyUpdateRemoveHandler(id){
        setCurrentCard([{...currentCard[0], dutiesList:[...currentCard[0].dutiesList.filter(duty => duty.id != id)]}])
    }

    function dialogChangeHandler(e) {
        switch(e.target.id) {
            case "company": 
                setCurrentCard([{...currentCard[0], name: e.target.value}]);
                break;
            case 'job-title':
                setCurrentCard([{...currentCard[0], jobTitle: e.target.value}]);
                break;
            case 'city':
                setCurrentCard([{...currentCard[0], city: e.target.value}]);
                break;
            case 'state':
                setCurrentCard([{...currentCard[0], state: e.target.value}]);
                break;
            case 'start-date':
                setCurrentCard([{...currentCard[0], startDateInput: e.target.value}]);
                break;
            case 'end-date':
                setCurrentCard([{...currentCard[0], endDateInput: e.target.value}]);
                break;
        }
    }

    function addUpdateDutyKeyHandler(e){
        if(e.key == "Enter"){
            e.preventDefault();
            e.stopPropagation();
            addUpdateDutyBtnHandler();
        }
    }
    return (
        <>
         <div  className="card-wrapper">
            {workContainer.length != 0 && workContainer.map(card  => {
                return (<div className="work-card" key={card.id} >
                            <h5>{card.name}</h5>
                            <p>{card.startDate} - {card.endDate}</p>
                            <p>{card.city}, {card.state}</p>

                            <DutyDropDown name={"Responsibilities / Achivements"} info={ 
                                <ul>
                                    {card.dutiesList.length !=0 && card.dutiesList.map(duty => {
                                        return (
                                            <li key={duty.id}>{duty.duty}</li>
                                            )
                                    })}
                                </ul>
                            } />
                            
                            <div className="btn-wrapper">
                                <button aria-label="Remove" type="button" className="remove"  onClick={() => handleRemove(card.id)} ></button>
                                <button aria-label="Edit" type="button" className="edit" onClick={() => handleEdit(card.id)}></button>
                            </div>
                        </div>)
            })}
        </div>

        <div className="add-workCard-wrapper">
            <button className="add-workCard-btn"
                 onClick={toggleForm}
                 hidden={formStatus}>
                    Add New Job
            </button>
        </div>

        <form onSubmit={workSubmitHandler} hidden={!formStatus}>
            <div className="input-field">
                <label htmlFor="company">Company Name</label>
                <input type="text" id="company" />
            </div>
            <div className="input-field">
                <label htmlFor="job-title">Job  title</label>
                <input type="text" id="job-title"/>
            </div>
            <div className="input-field">
                <label htmlFor="city">City</label>
                <input type="text" id="city" />
            </div>
            <div className="input-field">
                <label htmlFor="state">State</label>
                <select name="state" id="state" >
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
                <label htmlFor="start-date">Start Date</label>
                <input type="month" id="start-date" />
            </div>
            <div className="input-field">
                <label htmlFor="end-date">End Date</label>
                <input type="month" id="end-date" />
            </div>

            <div className="duty-field">
                <ul className="duty-container">
                    {dutyContainer.length !=0 && dutyContainer.map(duty => {
                         return (
                
                            <li key={duty.id} onClick={() => dutyRemoveHandler(duty.id)}>{duty.duty}</li>
                        )
                    })}
                </ul>
            </div>

            <div className="input-field">
                <label htmlFor="task">Responsibilities / Achievements</label>
                <div className="form-input-wrapper">
                    <textarea type="text" id="task" value={dutyValue} onChange={changeDutyHandler} onKeyUp={addDutyKeyHandler}  maxLength={105}/>
                    <button type="button" className="add-btn" onClick={addDutyBtnHandler}></button>
                </div>
            </div>
            <div className="edu-btn-wrapper">
                <button type="submit" className="add-btn">Submit</button>
                <button type="reset" className="cancel-btn" onClick={toggleForm}>Remove</button>
            </div>
        </form>
        
        <dialog className="work-dialog" ref={dialogRef}>
            <form onSubmit={(e) => handleUpdate(e, currentCard[0].id, currentCard[0].dutiesList)}>
                <div className="input-field">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" value={currentCard[0].name} onChange={dialogChangeHandler} />
                </div>
                <div className="input-field">
                    <label htmlFor="job-title">Job  title</label>
                    <input type="text" id="job-title" value={currentCard[0].jobTitle} onChange={dialogChangeHandler}/>
                </div>
                <div className="input-field">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" value={currentCard[0].city} onChange={dialogChangeHandler} />
                </div>
                <div className="input-field">
                    <label htmlFor="state">State</label>
                    <select name="state" id="state" value={currentCard[0].state} onChange={dialogChangeHandler}>
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
                    <label htmlFor="start-date">Start Date</label>
                    <input type="month" id="start-date" value={currentCard[0].startDateInput} onChange={dialogChangeHandler}/>
                </div>
                <div className="input-field">
                    <label htmlFor="end-date">End Date</label>
                    <input type="month" id="end-date" value={currentCard[0].endDateInput} onChange={dialogChangeHandler} />
                </div>
                <div className="duty-field">
                    <ul className="duty-container">
                        {currentCard[0].dutiesList.length !=0 && currentCard[0].dutiesList.map(duty => {
                             return (
            
                                <li key={duty.id} onClick={() => dutyUpdateRemoveHandler(duty.id)}>{duty.duty}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="input-field">
                    <label htmlFor="task">Responsibilities / Achievements</label>
                    <div className="form-input-wrapper">
                        <textarea type="text" id="task" value={updateDutyValue} onChange={changeUpdateDutyHandler} onKeyUp={addUpdateDutyKeyHandler} maxLength={150}/>
                        <button type="button" className="add-btn" onClick={addUpdateDutyBtnHandler}></button>
                    </div>
                </div>
                <div className="edu-btn-wrapper">
                    <button type="submit" onClick={toggleDialog}>Update</button>
                    <button type="button" onClick={toggleDialog} className="cancel-btn">Cancel</button>
                </div>
            </form>
        </dialog>
        </>
    )
}

