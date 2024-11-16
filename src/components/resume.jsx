export default function  Resume(){
    
    const resumeStyle = {
        padding: "15px 10px"
    }

    return (
        <div className="resume-wrapper">
            <div  style={resumeStyle} className="resume">
                <h3>Your Name</h3>
                <div className="profile-info">
                    <p>Address</p>
                    <p>Phone #</p>
                    <p>Email</p>
                </div>


                <h4>Education</h4>
                <hr />

                <h4>Skills</h4>
                <hr />

                <h4>Work  Experience</h4>
                <hr />
            </div>
        </div>
    )
}