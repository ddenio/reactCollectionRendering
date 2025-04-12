import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Note from './Note'

function App({notes}) {
  //const { notes } = props
  console.log("the value of notes is", notes[0])
  const result = notes.map(note => note.id)
  console.log(result)
  return (
    <div>
      
      <h1>Notes</h1>
      <ul>
      {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>

      
      {/* Revised way*/}
        {/* <ul>
          {notes.map(note => <li>{note.content}</li>)}
        </ul> */}

      
      {/* Old static way */}
        {/* <ul>
          <li>{notes[0].content}</li>
          <li>{notes[1].content}</li>
          <li>{notes[2].content}</li>
        </ul> */}
    </div>
  )
}

export default App
