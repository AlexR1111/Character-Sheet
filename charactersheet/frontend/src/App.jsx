import React from 'react'
import CharacterForm from './component/CharacterForm'
import Race from './component/Race'
import AbilityScore from './component/AbilityScore'
import CharacterDescript from './component/CharacterDescript'
import './App.css'


function App() {
  
  return (
    <>
      <div>
        <h1>Charactersheet 0.2</h1>
        <CharacterForm/>
        <Race/>
        <CharacterDescript/>
        <AbilityScore/>
      </div>
    </>
  )
}

export default App
