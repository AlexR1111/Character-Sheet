import React, { useState } from "react";
import Name from "./Name";
import Alignment from "./Alignment";

function CharacterForm() {
    const [name, setName] = useState("");
    const [selectedAlignment, setSelectedAlignment] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/characters", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, alignment: selectedAlignment }),
            });
            if (response.ok) {
                alert("Character saved!");
                setName("");
                setSelectedAlignment("");
            } else {
                alert("Could not save character.");
            }
        } catch (error) {
            console.error("Failed to save Character:", error);
        }
    };

    return (
        <div>
            <h2>Creation</h2>
            <Name name={name} setName={setName} />
            <Alignment selectedAlignment={selectedAlignment} setSelectedAlignment={setSelectedAlignment} />
            <button onClick={handleSubmit}>Save Character</button>
        </div>
    );
}

export default CharacterForm;