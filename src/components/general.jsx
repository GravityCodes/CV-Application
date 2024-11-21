

export default function General({generalInfo, changeHandler}) { 
    return (
            <div>
                <div className="input-field">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" value={generalInfo.name} onChange={changeHandler} maxLength={70} />
                </div>                
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={generalInfo.email} onChange={changeHandler} />
                </div>
    
                <div className="input-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" value={generalInfo.phone} onChange={changeHandler}  />
                </div>
            </div>
            )

}
