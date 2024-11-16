export default function General() {
    return (
            <div>
                <div className="input-field">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" />
                </div>
                <div className="input-field">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />
                </div>
                
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" />
                </div>
    
                <div className="input-field">
                    <label htmlFor="phone-number">Phone Number</label>
                    <input type="tel" id="phone-number" />
                </div>
            </div>
            )

}