export default function WorkExperience() {
    return (
        <div>
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
            <input type="date" id="start-date" />
        </div>
        <div className="input-field">
            <label htmlFor="end-date">End Date</label>
            <input type="date" id="end-date" />
        </div>

        <div className="input-field">
            <label htmlFor="task">Responsibilities / Achievements</label>
            <input type="text" id="task" />
        </div>
    </div>
    )
}