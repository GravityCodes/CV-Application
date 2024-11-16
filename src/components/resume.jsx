import { useState } from 'react'
import DropDown from './dropDown'
import General from './general'
import Address from './address'
import Education from './education'
import WorkExperience from './workExp'

export default function  Resume(){
    const [generalInfo, setGeneralInfo] = useState({name: "", email: "", phone: ""});
    
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
    
    
    const resumeStyle = {
        padding: "15px 10px"
    }

    return (
        <>
            <DropDown name={"General Infomation"} info={<General generalInfo={generalInfo} changeHandler={generalInfoHandler} />}/>
            <DropDown name={"Address"} info={<Address />}/>
            <DropDown name={"Education"} info={<Education />}/>
            <DropDown name={"Work Experience"} info={<WorkExperience />} />
            <div className="resume-wrapper">
                <div  style={resumeStyle} className="resume">
                    <h3>{generalInfo.name == "" ? "Your Name": generalInfo.name}</h3>
                    <div className="profile-info">
                        <p>Boston MA 02121</p>
                        <p>857-930-1820</p>
                        <p>Johan.mesa2001@gmail.com</p>
                    </div>


                    <h4>Education</h4>
                    <hr />

                    <h4>Skills</h4>
                    <hr />

                    <h4>Work  Experience</h4>
                    <hr />
                </div>
            </div>
        </>
    )
}