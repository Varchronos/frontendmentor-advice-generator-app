import React, { useEffect, useState } from 'react'
import './App.css'
import dice from './assets/icon-dice.svg'
import divider from './assets/pattern-divider-desktop.svg'

const App = () => {

  const [advice, setAdvice] = useState('');
  const [adviceNumber, setAdviceNumber] = useState(null)
  const buttonHandeler = async()=>{
    const randomNum = Math.floor(Math.random() * (100 - 1) + 1);
    const response = await fetch('https://api.adviceslip.com/advice/'+randomNum);
    const {slip:data} = await response.json()
    setAdviceNumber(randomNum)
    setAdvice(data.advice)
  }


  return (
    <>

      <div className="container">
        <main>
        <p>ADVICE #{adviceNumber?adviceNumber:''}</p>
        <h1>{advice===''?'click to get advice':advice}</h1>
        <div className="container_foot">
          <img src={divider} alt="" />
        </div>
        </main>
      </div>
      <button type='button' className='round_button' onClick={buttonHandeler}>
          <img src={dice} alt="Dice" />
        </button>
    </>
  )
}

export default App