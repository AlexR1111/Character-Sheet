import React from "react";

function Race(){
    return(
        <div>
            <label for='race'>Race</label>
            <br />
            <select class='race'>
                <option value="dwarf">Dwarf</option>
                <option value="elf">Elf</option>
                <option value="gnome">Gnome</option>
                <option value="half-Elf">Half-Elf</option>
                <option value="halfling">Halfling</option>
                <option value="half-Orc">Half-Orc</option>
                <option value="human">Human</option>
            </select>
        </div>
    )
}

export default Race