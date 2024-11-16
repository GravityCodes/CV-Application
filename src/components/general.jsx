

export default function General({generalInfo, changeHandler}) { 
    return (
            <div>
                <div className="input-field">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" value={generalInfo.name} onChange={changeHandler} />
                </div>                
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={generalInfo.email} onChange={changeHandler} />
                </div>
    
                <div className="input-field">
                    <label htmlFor="phone-number">Phone Number</label>
                    <input type="tel" id="phone-number" value={generalInfo.phone} onChange={changeHandler} />
                </div>
            </div>
            )

}
