import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          facilis voluptas soluta, dolorem animi aliquid optio? Numquam facere
          minima doloribus quasi aliquam veniam blanditiis exercitationem dolore
          doloremque alias, sunt odio.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod
          repellat esse ratione ex debitis exercitationem excepturi quisquam,
          sequi doloremque earum ipsam id tempore aliquam perferendis iste omnis
          libero provident.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          quasi natus, magni maxime recusandae sed eveniet necessitatibus quis
          molestias dolore debitis explicabo. Doloremque possimus ipsum
          voluptatibus atque delectus, necessitatibus accusantium!
        </p>
      </div>
    </div>
  )
}

export default About
