export default function Address() {
    return (
        <div>
            <div className="input-field">
                <label htmlFor="Address">Address</label>
                <input type="text" id="Address" />
            </div>
            <div className="input-field">
                <label htmlFor="city">City</label>
                <input type="text" id="city" />
            </div>
            <div className="input-field">
                <label htmlFor="state">State/province</label>
                <input type="text" id="state" />
            </div>
            <div className="input-field">
                <label htmlFor="country">Country</label>
                <input type="text" id="country" />
            </div>
            <div className="input-field">
                <label htmlFor="zip">Zip/postal code</label>
                <input type="text" id="zip" />
            </div>
        </div>
    );
}