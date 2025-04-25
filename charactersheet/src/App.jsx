import React from 'react'
import Name from './component/name'
import Aligment from './component/Aligment'
import Race from './component/Race'
import AbilityScore from './component/Ability Score'
import CharacterDescript from './component/CharacterDescript'
import './App.css'


function App() {
  
  return (
    <>
      <div>
        <h1>Charactersheet 0.2</h1>
        <Name />
        <Aligment/>
        <Race/>
        <CharacterDescript/>
        <AbilityScore/>
      </div>
    </>
  )
}

export default App
