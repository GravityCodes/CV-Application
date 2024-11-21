export default function Skills({skillContainer, addHandler, removeHandler}){
    return (
        <div className="skill-field">
            <ul className="skill-container">
                {skillContainer.length != 0 && skillContainer.map(skill => {
                    return (
                        
                        <li key={skill.id} onClick={() => removeHandler(skill.id)}>{skill.skillValue}</li>
                    )
                })}
            </ul>

            <label htmlFor="skills">Add Skill</label>
            <form className="form-input-wrapper" onSubmit={addHandler}>
                <input type="text" name="skill" id="skills" maxLength={40} />
                <button type="submit" className="add-btn"></button>
            </form>
            
        </div>
    )
}