import { useState } from 'react'
import './App.css'
import Popup from './popup'; // Doğru yolu kullanın
import Pet from './pet'

function App() {

  return (
    <>
      {/* <div>
        <Pet />
      </div> */}
      <div>
        <Popup />
      </div>
    </>

  )
}

export default App
