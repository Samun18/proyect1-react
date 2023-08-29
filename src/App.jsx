import { useState } from 'react'
import './App.css'
import Change from './components/Change'
import Phrases from './components/Phrases'
import data from './utils/data.json'
import randomElement from './utils/randomElement'

function App() {
  
  const phrasesRandom = randomElement(data)
  const numberRandom = randomElement([1, 2, 3, 4])

  const [quote, setQuote] = useState(phrasesRandom)
  const [numberBg, setNumberBg] = useState(numberRandom)
  
  const bgStyle = {
    backgroundImage: `url(/fondo${numberBg}.png)`
  }
  return (
    <>
    <div className='container' style={bgStyle}>
      <h1 className='container__title'>Descubre tu fortuna.</h1>
      <Phrases frase={quote} />
      <Change 
        setQuote={setQuote}
        base={data}  
        setNumberBg={setNumberBg}/>
    </div>
    </>
  )
}
export default App
