import React from "react";

function Race(){
    const [selectedRace, setSelectedRace] = useState("");

    const handleRaceChange = (event) => {
        setSelectedRace(event.target.value);
    };

    return(
        <div>
            <label htmlfor='race'>Race</label><br/>
            <select id='race' className='race' onChange={handleRaceChange}>
                <option value="dwarf">Dwarf</option>
                <option value="elf">Elf</option>
                <option value="gnome">Gnome</option>
                <option value="half-Elf">Half-Elf</option>
                <option value="halfling">Halfling</option>
                <option value="half-Orc">Half-Orc</option>
                <option value="human">Human</option>
            </select>
            <p option>You selected:{selectedRace}</p>
        </div>
    )
}

export default Race