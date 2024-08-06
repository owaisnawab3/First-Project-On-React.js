import React from 'react'
import './App.css'

function App() {

  const greyBackground = (e) => {
    const body = document.querySelector('body');
    body.style.background = "grey"
  }

  const redBackground = (e) => {
    const body = document.querySelector('body');
    body.style.background = "red"
  }

  const greenBackground = (e) => {
    const body = document.querySelector('body');
    body.style.background = 'greenyellow'
  }

  const blueBackground = (e) => {
    const body = document.querySelector('body');
    body.style.background = 'skyblue'
  }

  const orangeBackground = () => {
    const body = document.querySelector('body');
    body.style.background = 'orange'
  }

  return (
    <>
    <div className='container'>
      <h1 class="rainbow-text">Changing Background Color!</h1>
    </div>
    <div className='color'>
          <h4 className='grey' onClick={greyBackground}>Grey</h4>
          <h4 className='red' onClick={redBackground}>Red</h4>
          <h4 className='green' onClick={greenBackground}>Green</h4>
          <h4 className='blue' onClick={blueBackground}>Blue</h4>
          <h4 className='orange' onClick={orangeBackground}>Orange</h4>
    </div>
    </>
  )
}

export default App
