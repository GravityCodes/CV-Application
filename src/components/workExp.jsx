import { useState } from "react"

export default function WorkExperience({dutyContainer, addDutyHandler, dutyRemoveHandler}) {
    const [dutyValue, setDutyValue] = useState("");

    function changeDutyHandler(e) {
        setDutyValue(e.target.value);
    }

    function addDutyBtnHandler(){
        addDutyHandler(dutyValue);
        setDutyValue("");
    }

    function addDutyKeyHandler(e){
        e.preventDefault();
        e.stopPropagation();

        if(e.key == "Enter"){
            addDutyBtnHandler();
        }
    }

    return (
        <form>
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
                <input type="text" id="state" />
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
                    <textarea type="text" id="task" value={dutyValue} onChange={changeDutyHandler} onKeyUp={addDutyKeyHandler}/>
                    <button type="button" className="add-btn" onClick={addDutyBtnHandler}></button>
                </div>
            </div>
            <div className="edu-btn-wrapper">
                <button type="submit" className="add-btn">Add</button>
            </div>
        </form>
    )
}