import React from "react";

function AbilityScore(){
    return(
        <div class="scoreAbility">
            <h2>Stats</h2>
            <label for="sc1">Strength</label>
            <input class="sc1" type="number" min={6} max={30} ></input><input readOnly></input>
            <br />
            <label for="sc2">Dexterity</label>
            <input class="sc2" type="number" min={6} max={30} ></input><input readOnly></input>
            <br />
            <label for="sc3">Constitution</label>
            <input class="sc3" type="number" min={6} max={30} ></input><input readOnly></input>
            <br />
            <label for="sc4">Intelligence</label>
            <input class="sc4" type="number" min={6} max={30}></input><input readOnly></input>
            <br />
            <label for="sc5">Widsom</label>
            <input class="sc5" type="number" min={6} max={30} ></input><input readOnly></input>
            <br />
            <label for="sc6">Charisma</label>
            <input class="sc6" type="number" min={6} max={30} ></input><input readOnly></input>
            
        </div>
    )
}

export default AbilityScore