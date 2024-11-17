export default function Address({address, changeHandler}) {
    return (
        <div>
            <div className="input-field">
                <label htmlFor="city">City</label>
                <input type="text" id="city" value={address.city} onChange={changeHandler} />
            </div>
            <div className="input-field">
                <label htmlFor="state">State/province</label>
                <input type="text" id="state" value={address.state} onChange={changeHandler} />
            </div>
            <div className="input-field">
                <label htmlFor="country">Country</label>
                <input type="text" id="country" value={address.country} onChange={changeHandler} />
            </div>
            <div className="input-field">
                <label htmlFor="zip">Zip/postal code</label>
                <input type="text" id="zip" value={address.zip} onChange={changeHandler}/>
            </div>
        </div>
    );
}