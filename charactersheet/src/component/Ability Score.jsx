import React from "react";

function AbilityScore(){
    return(
        <div className="scoreAbility">
            <h2>Stats</h2>
            <label htmlFor="sc1">Strength</label>
            <input className="sc1" type="number" min={6} max={30} ></input><input readOnly></input>
            <br />
            <label htmlFor="sc2">Dexterity</label>
            <input className="sc2" type="number" min={6} max={30} ></input><input readOnly></input>
            <br />
            <label htmlFor="sc3">Constitution</label>
            <input className="sc3" type="number" min={6} max={30} ></input><input readOnly></input>
            <br />
            <label htmlFor="sc4">Intelligence</label>
            <input className="sc4" type="number" min={6} max={30}></input><input readOnly></input>
            <br />
            <label htmlFor="sc5">Widsom</label>
            <input className="sc5" type="number" min={6} max={30} ></input><input readOnly></input>
            <br />
            <label htmlFor="sc6">Charisma</label>
            <input className="sc6" type="number" min={6} max={30} ></input><input readOnly></input>
            
        </div>
    )
}

export default AbilityScore