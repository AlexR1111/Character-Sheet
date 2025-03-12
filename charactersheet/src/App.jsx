import React from 'react'
import Name from './component/name'
import Aligment from './component/Aligment'
import Race from './component/Race'
import AbilityScore from './component/Ability Score'
import './App.css'


function App() {
  
  return (
    <>
      <div>
        <h1>Charactersheet 0.1</h1>
        <Name />
        <Aligment/>
        <Race/>
        <AbilityScore/>
      </div>
    </>
  )
}

export default App
