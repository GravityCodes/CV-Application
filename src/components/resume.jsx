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

export default function  Resume(){
    const [generalInfo, setGeneralInfo] = useState({name: "", email: "", phone: ""});
    const [address, setAddress] = useState({city: "", state: "",  country: "", zip: ""});
    const [educationContainer, setEducationContainer] = useState([]);
    const [skillContainer, setSkillContainer] = useState([]);
    const [dutiesContainer, setDutiesContainer] = useState([]);
    const [workContainer, setWorkContainer] = useState([]);

    // Turn the address object to a list of value to display it to resume
    let addressArray = Object.values(address);


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

    return (
        <>
            <DropDown name={"General Infomation"} info={<General generalInfo={generalInfo} changeHandler={generalInfoHandler} />}/>

            <DropDown name={"Address"} info={<Address address={address} changeHandler={addressHandler}/>}/>

            <DropDown name={"Education"} info={<Education educationCardArray={educationContainer} 
                                                          handleSubmit={educationSubmitHandler}
                                                          handleRemove={removeBtnHandler}
                                                          handleUpdate={updateCardHandler} />}/>
            
            <DropDown name={"Skills"} info={<Skills skillContainer={skillContainer} 
                                                    addHandler={addNewSkill}
                                                    removeHandler={removeSkill} />}/>

            <DropDown name={"Work Experience"} info={<WorkExperience dutyContainer={dutiesContainer}
                                                                     addDutyHandler={addNewDuty}
                                                                     dutyRemoveHandler={removeDuty} />} />
            
            <div className="resume-wrapper">
                <div  style={{padding: "15px 10px"}} className="resume">
                    <h3>{generalInfo.name == "" ? "Your Name": generalInfo.name}</h3>
                    <div className="profile-info">
                        <p>{addressArray.some(e => e != "") ? [...addressArray].join(" ") : "Address"}</p>
                        <p>{generalInfo.phone == "" ? "Phone number" : generalInfo.phone}</p>
                        <p>{generalInfo.email == "" ? "Email" : generalInfo.email}</p>
                    </div>


                    <h4>Education</h4>
                    <hr />
                    {educationContainer.length != 0 && educationContainer.map(card  => {
                            return (<div className="resume-education-item" key={card.id}>
                                        <div className="education-item-top">
                                            <h5>{card.name}  <span> | {card.city}, {card.state} </span></h5>
                                            <p>{card.date}</p>
                                        </div>
                                        <p>{card.degree} in {card.major}</p>
                                    </div>)
                    })}
                    <h4>Skills</h4>
                    <hr />
                    <ul className="resume-skill-container">
                        {skillContainer.length != 0 && skillContainer.map(skill => {
                            return (
                                <li key={skill.id}>{skill.skillValue}</li>
                            )
                        })}
                    </ul>

                    <h4>Work  Experience</h4>
                    <hr />
                </div>
            </div>
        </>
    )
}