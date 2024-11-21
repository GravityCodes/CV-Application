import { useState } from 'react'
import DropDown from './dropDown'
import General from './general'
import Address from './address'
import Education from './education'
import Skills from './skills'
import WorkExperience from './workExp'
import EducationObject from '../modules/educationObject'
import Skill from "../modules/skillObject"
import Duty from "../modules/dutyObject"
import Work from "../modules/workObject"
import createPDF from '../modules/jsToPdf'


export default function  Resume(){
    const [generalInfo, setGeneralInfo] = useState({name: "", email: "", phone: ""});

    const [address, setAddress] = useState({street: "", city: "", state: "",  country: "", zip: ""});
    const [educationContainer, setEducationContainer] = useState([]);
    const [skillContainer, setSkillContainer] = useState([]);
    const [dutiesContainer, setDutiesContainer] = useState([]);
    const [workContainer, setWorkContainer] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [eduFormStatus, setEduFormStatus] = useState(false);
    const [workFormStatus, setWorkFormStatus] = useState(false);

    // Turn the address object to a list of value to display it to resume
    let addressArray = Object.values(address);

    //dropdown handler

    function dropDownClickHandler (index) {
        if(activeIndex == index) {
            setActiveIndex(0)
        }
        else {
            setActiveIndex(index)
        }
        
    }


    //general information handlers
    function generalInfoHandler (e) {
        switch(e.target.id){
            case "name": 
                setGeneralInfo({...generalInfo, name: e.target.value});
                break;
            case "email": 
                setGeneralInfo({...generalInfo, email: e.target.value});
                break;
            case "phone": 
                setGeneralInfo({...generalInfo, phone: e.target.value});
                break;
        }
    }
    
    //address handlers
    function addressHandler (e) {
        switch(e.target.id){
            case "street":
                setAddress({...address, street: e.target.value});
                break;
            case "city": 
                setAddress({...address, city: e.target.value});
                break;
            case "state": 
                setAddress({...address, state: e.target.value});
                break;
            case "country": 
                setAddress({...address, country: e.target.value});
                break;
            case "zip": 
                setAddress({...address, zip: e.target.value});
                break;
        }
    }

    // education handlers
    function educationSubmitHandler(e) {
        e.preventDefault();
        

        let school = e.target[0].value;
        let degree = e.target[1].value;
        let major = e.target[2].value;
        let city = e.target[3].value;
        let state = e.target[4].value;
        let date = e.target[5].value;

        setEducationContainer([...educationContainer,new EducationObject(school, degree, major, city, state, date)]);
        e.target.reset();
        toggleEduForm();
    }

    function removeBtnHandler(id){
        confirm("This action can not be reversed. Are you sure you want to continue?") ? 
        setEducationContainer([...educationContainer].filter(card => card.id != id)) : 0;
        
    }

    function updateCardHandler(e, id){
        e.preventDefault();
        
        let cardId = id;
        let school = e.target[0].value;
        let degree = e.target[1].value;
        let major = e.target[2].value;
        let city = e.target[3].value;
        let state = e.target[4].value;
        let date = e.target[5].value;
        
        let newEducationContainer = educationContainer.filter(card => card.id != id);
        
        setEducationContainer([...newEducationContainer,new EducationObject(school, degree, major, city, state, date, cardId)]);
        e.target.reset();
    }

    //Skill handlers

    function addNewSkill(e){
        e.preventDefault();
        setSkillContainer([...skillContainer, new Skill(e.target[0].value)]);
        e.target.reset();
    }

    function removeSkill(id){
        setSkillContainer([...skillContainer].filter(skill => skill.id != id));
    }

    //Work handlers

    function addNewDuty(newDuty){
        setDutiesContainer([...dutiesContainer, new Duty(newDuty)]);
    }

    function removeDuty(id){
        setDutiesContainer([...dutiesContainer].filter(duty => duty.id != id));
    }

    function workSubmitHandler(e) {
        e.preventDefault();
        
        let name = e.target[0].value;
        let jobTitle = e.target[1].value;
        let city = e.target[2].value;
        let state = e.target[3].value;
        let startDate = e.target[4].value;
        let endDate = e.target[5].value;
        let duties = dutiesContainer;

        setWorkContainer([...workContainer,new Work(name,jobTitle,city,state,startDate,endDate,duties)]);
        e.target.reset();
        setDutiesContainer([]);
        toggleWorkForm();
        
    }

    function removeWorkItem(id) {
        confirm("This action can not be reversed. Are you sure you want to continue?") ? 
        setWorkContainer([...workContainer].filter(card => card.id != id)) : 0;
    }

    function workUpdateCardHandler(e, id, dutiesList){
        e.preventDefault();

        let cardId = id;
        let name = e.target[0].value;
        let jobTitle = e.target[1].value;
        let city = e.target[2].value;
        let state = e.target[3].value;
        let startDate = e.target[4].value;
        let endDate = e.target[5].value;

        let duties = dutiesList;

        let newWorkContainer = workContainer.filter(card => card.id != id);
        
        setWorkContainer([...newWorkContainer, new Work(name, jobTitle, city, state, startDate, endDate, duties, cardId)]);
        e.target.reset();
        
        
    }

    //form handlers
    function toggleEduForm () {
        setEduFormStatus(!eduFormStatus);
    }

    function toggleWorkForm () {
        setWorkFormStatus(!workFormStatus)
    }

    //download Button

    function downloadHandler () {
        createPDF(generalInfo, address, educationContainer, skillContainer, workContainer);

    }

    return (
        <div className='app-wrapper'>
        
            <div className="forms-wrapper">
                <DropDown name={"General Infomation"} 
                          info={<General generalInfo={generalInfo} changeHandler={generalInfoHandler}/>}
                          activeIndex={activeIndex}
                          handleClick={dropDownClickHandler}
                          index={1}/>
                          
                <DropDown name={"Address"} 
                          info={<Address address={address} 
                          changeHandler={addressHandler} />} 
                          activeIndex={activeIndex}
                          handleClick={dropDownClickHandler}
                          index={2} />

                <DropDown name={"Education"} 
                          info={<Education educationCardArray={educationContainer}
                                           handleSubmit={educationSubmitHandler}
                                           handleRemove={removeBtnHandler}
                                           handleUpdate={updateCardHandler}
                                           toggleForm={toggleEduForm} 
                                           formStatus={eduFormStatus} />}
                           activeIndex={activeIndex}
                           handleClick={dropDownClickHandler}
                           index={3}/>

                <DropDown name={"Skills"} 
                          info={<Skills skillContainer={skillContainer}
                                        addHandler={addNewSkill}
                                        removeHandler={removeSkill} />}
                          activeIndex={activeIndex}             
                          handleClick={dropDownClickHandler}
                          index={4}/>

                <DropDown name={"Work Experience"} 
                          info={<WorkExperience dutyContainer={dutiesContainer}
                                                addDutyHandler={addNewDuty}
                                                workSubmitHandler={workSubmitHandler}
                                                workContainer={workContainer}
                                                handleRemove={removeWorkItem}
                                                handleUpdate={workUpdateCardHandler} 
                                                dutyRemoveHandler={removeDuty}
                                                toggleForm={toggleWorkForm}
                                                formStatus={workFormStatus}/>}
                          activeIndex={activeIndex}
                          handleClick={dropDownClickHandler}
                          index={5}/>
            
                <div className='download-btn-wrapper'>
                        <button type='button' className='download-btn' onClick={downloadHandler}>Download Resume</button>
                </div>
            </div>




            
            <div className="resume-wrapper">
                <div className="resume">
                    <h3>{generalInfo.name}</h3>
                    <div className="profile-info">
                        <p>{addressArray.some(e => e != "") ? `${[...addressArray].join(" ")} | ` : ""}</p>
                        <p>{generalInfo.phone == "" ? "" : `${generalInfo.phone} | `}</p>
                        <p>{`${generalInfo.email}`}</p>
                    </div>

                    {educationContainer.length != 0 ? 
                        <>
                        <h4>Education</h4>
                        <hr />
                        {educationContainer.map(card  => {
                            return (
                                <>
                                    
                                    <div className="resume-education-item" key={card.id}>
                                        <div className="education-item-top">
                                            <h5>{card.name}  <span> | {card.city}, {card.state} </span></h5>
                                            <p>{card.date}</p>
                                        </div>
                                        <p><em>{card.degree} in {card.major}</em></p>
                                    </div>
                                </>)
                    })}
                        </> :
                        ""
                    }

                    {skillContainer.length != 0 ?
                        <>
                        <h4>Skills</h4>
                        <hr />
                        <ul className="resume-skill-container">
                            {skillContainer.map(skill => {
                                return (
                                    <li key={skill.id}>{skill.skillValue}</li>
                                )
                            })}
                        </ul>
                        </> :
                        ""
                    }
                    
                    {workContainer.length != 0 ?
                        <>
                        <h4>Work  Experience</h4>
                        <hr />
                        {workContainer.map(card  => {
                            return (<div className="resume-work-item" key={card.id}>
                                        <div className="work-item-top">
                                            <h5>{card.name}  <span> | {card.city}, {card.state} </span></h5>
                                            <p>{card.startDate} - {card.endDate}</p>
                                        </div>
                                        <p><em>{card.jobTitle}</em></p>
                                        <ul>
                                            {card.dutiesList.length !=0 && card.dutiesList.map(duty => {
                                                return (
                                                    <li key={duty.id}>{duty.duty}</li>
                                                        )
                                            })}
                                        </ul>
                                    </div>)
                        })}
                        </> :
                        ""
                    }

                </div>
            </div>
        </div>
    )
}