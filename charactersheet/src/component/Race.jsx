import React from "react";
import { useState } from "react";

function Race(){
    const [selectedRace, setSelectedRace]= useState("");
    const [raceDescription, setRaceDescription]= useState("");

    const raceDescriptions = {
        dwarf: "These short and stocky defenders of mountain fortresses are often seen as stern and humorless. Known for mining the earth's treasures and crafting magnificent items from ore and gemstones, they have an unrivaled affinity for the bounties of the deep earth. Dwarves also have a tendency toward traditionalism and isolation that sometimes manifests as xenophobia.",
        elf: "Tall, noble, and often haughty, elves are long-lived and subtle masters of the wilderness. Elves excel in the arcane arts. Often they use their intrinsic link to nature to forge new spells and create wondrous items that, like their creators, seem nearly impervious to the ravages of time. A private and often introverted race, elves can give the impression they are indifferent to the plights of others.",
        gnome:"Expatriates of the strange land of fey, these small folk have a reputation for flighty and eccentric behavior. Many gnomes are whimsical artisans and tinkers, creating strange devices powered by magic, alchemy, and their quirky imagination. Gnomes have an insatiable need for new experiences that often gets them in trouble.",
        "half-Elf":"Often caught between the worlds of their progenitor races, half-elves are a race of both grace and contradiction. Their dual heritage and natural gifts often create brilliant diplomats and peacemakers, but half-elves are often susceptible to an intense and even melancholic isolation, realizing that they are never truly part of elven or human society.",
        halfling:"Members of this diminutive race find strength in family, community, and their own innate and seemingly inexhaustible luck. While their fierce curiosity is sometimes at odds with their intrinsic common sense, halflings are eternal optimists and cunning opportunists with an incredible knack for getting out the worst situations.",
        "half-Orc":"Often fierce and savage, sometimes noble and resolute, half-orcs can manifest the best and worst qualities of their parent races. Many half-orcs struggle to keep their more bestial natures in check in order to epitomize the most heroic values of humanity. Unfortunately, many outsiders see half-orcs as hopeless abominations devoid of civility, if not monsters unworthy of pity or parley.",
        human: "Ambitious, sometimes heroic, and always confident, humans have an ability to work together toward common goals that makes them a force to be reckoned with. Though short-lived compared to other races, their boundless energy and drive allow them to accomplish much in their brief lifetimes."
    };

    const handleRaceChange =(event) => {
        const chosenRace = event.target.value;
        setSelectedRace(chosenRace);
        setRaceDescription(raceDescriptions[chosenRace]);
    };

    return(
        <div>
            <label htmlFor='race'>Race</label>
            <br />
            <select className='race' id="race" onChange={handleRaceChange}>
                <option value="dwarf">Dwarf</option>
                <option value="elf">Elf</option>
                <option value="gnome">Gnome</option>
                <option value="half-Elf">Half-Elf</option>
                <option value="halfling">Halfling</option>
                <option value="half-Orc">Half-Orc</option>
                <option value="human">Human</option>
            </select>
            <p>{raceDescription}</p>
        </div>
    )
}

export default Race