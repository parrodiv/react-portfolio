import { faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react'
import Loader from 'react-loaders';
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
  <>
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

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color="#DD0031" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faBootstrap} color="#653D7C" />
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
  </>
  )
}

export default About
