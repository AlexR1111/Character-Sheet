import React from 'react'
import Name from './component/Name'
import Alignment from './component/Alignment'
import Race from './component/Race'
import AbilityScore from './component/AbilityScore'
import CharacterDescript from './component/CharacterDescript'
import './App.css'


function App() {
  
  return (
    <>
      <div>
        <h1>Charactersheet 0.2</h1>
        <Name />
        <Alignment/>
        <Race/>
        <CharacterDescript/>
        <AbilityScore/>
      </div>
    </>
  )
}

export default App
