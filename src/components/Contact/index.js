import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', , ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            corporis iste deleniti velit, ea nulla fuga non quis reprehenderit
            vero, sunt cumque dolorum id. Consectetur iste, ipsa itaque et
            laboriosam harum consequatur iure sapiente aut distinctio natus quos
            nesciunt fugit accusantium, blanditiis voluptas exercitationem
            incidunt alias cum neque laborum. Et.
          </p>
          <div className='contact-form'>
            <ul>
              <li className='half'>
                <input type='text' name='name' placeholder='Name' required />
              </li>
              <li className='half'>
                <input type='email' name='email' placeholder='Email' required />
              </li>
              <li>
                <input
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  required
                />
              </li>
              <li>
                <textarea name='message' id='message' placeholder='Message' required></textarea>
              </li>
              <li>
                <input type="submit" className='flat-button' value='SEND' />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Contact
