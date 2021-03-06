import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = async (e) => {
    e.preventDefault()
    try {
      const result = await emailjs.sendForm(
        'service_zhlwd6o',
        'template_etvnj09',
        refForm.current,
        'rlh-yaQqP7Lc3iTn0'
      )
      console.log(result)
      window.location.reload(false)
    } catch (error) {
      console.log(error)
    }
   
  }

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
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
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    required
                  />
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
                  <textarea
                    name='message'
                    id='message'
                    placeholder='Message'
                    required
                  ></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Alessandro Parrilla,
          <br />
          Italia,
          <br />
          Via Odino Braglia 8, 46023 <br />
          Gonzaga 46023 MN <br />
          <span>alessandro.parrilla.dev@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[44.951681, 10.819714]} zoom={13}>
            <TileLayer
              url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
            />
            <Marker position={[44.951681, 10.819714]}>
              <Popup>Alessandro lives here :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Contact
