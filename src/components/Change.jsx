import randomElement from '../utils/randomElement'

const Change = ({ setQuote, base, setNumberBg }) => {

  const handleRandomPh = () => {
    setQuote(randomElement(base))
    setNumberBg(randomElement([1, 2, 3, 4]))
  }

  return (
    <button className='container__btn' onClick={handleRandomPh}>Next</button>
  )
}

export default Change