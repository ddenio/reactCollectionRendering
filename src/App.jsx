import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({notes}) {
  //const { notes } = props
  //console.log({notes})
  return (
    <div>
      
      <h1>Notes</h1>
      
      <ul>
        {notes.map(note => <li>{note.content}</li>)}
      </ul>
      {/* <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul> */}
    </div>
  )
}

export default App
