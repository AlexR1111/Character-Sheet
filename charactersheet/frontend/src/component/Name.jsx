import React from "react";

function Name({name,setName, handleSubmit}) {
    
    return (
        <div>
            <label htmlFor="Cname">Character Name:</label>
            <br />
            <input id="Cname" type="text" placeholder="Name" value= {name} onChange={(e) => setName(e.target.value)}/>
            
        </div>
    );
}

export default Name