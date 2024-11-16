export default function Education() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
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
                <label htmlFor="gpa">GPA</label>
                <input type="text" id="gpa" />
            </div>
            <div className="input-field">
                <label htmlFor="start-date">Start Date</label>
                <input type="date" id="start-date" />
            </div>
            <div className="input-field">
                <label htmlFor="end-date">End Date</label>
                <input type="date" id="end-date" />
            </div>
            <div className="edu-btn-wrapper">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}