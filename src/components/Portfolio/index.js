import './index.scss'
import Loader from 'react-loaders'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import RenderPortfolio from './RenderPortfolio'
import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from '../../firebase.config'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    getPortfolio()
  }, [])

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'portfolio'))
    console.log(querySnapshot)

    //querySnapshot.docs è un array, mappiamo l'array andando a creare un altro array con ciò che vogliamo
    setPortfolio(querySnapshot._docs.map(doc => doc.data()))
    //array di oggetti, ogni oggetto rappresenta un progetto con {cover: ... , name: ... , description: ... , url: ... }
  }
  console.log(portfolio)

  return (
    <>
      <div className='container portfolio-page'>
        <h1 className='page-title'>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>
          <RenderPortfolio portfolio={portfolio} />
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Portfolio
