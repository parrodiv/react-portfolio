import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <>
      {strArray.map((char, index) => (
        <span key={char + index} className={`${letterClass} _${index + idx}`}>
          {char}
        </span>
      ))}
    </>
    
  )
  //<span class="text-animate _15">l</span>
  //<span class="text-animate _16">l</span> ecc.
}

export default AnimatedLetters
