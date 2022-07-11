import { useRef } from "react"
import { auth, db } from "../../firebase.config"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from "../../firebase.config"
import { addDoc } from "firebase/firestore/lite"
import { collection } from "firebase/firestore/lite"

const Home = () => {
  const form = useRef()

  const submitPortfolio = (e) => {
    e.preventDefault()
    // otteniamo gli input grazie al useRef, da tenere conto che l'ordine 
    // con cui vengono presi i dati dal form è quello presentato nel form (name, description, url, image)
    const name = form.current[0]?.value 
    //?. opt chaining operator per far in modo di non bloccare il codice nel caso in cui sia null o undefined restituendo direttamente undefined
    const description = form.current[1]?.value
    const url = form.current[2]?.value
    const image = form.current[3]?.files[0]

    const storageRef = ref(storage, `portfolio/${image.name}`)

    uploadBytes(storageRef, image).then(
      // successfull
      (snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadUrl) => {
          savePortfolio({
            name,
            description,
            url,
            image: downloadUrl,
          })
        })
      },
      // not successfull at all
      () => {
        savePortfolio({
          name,
          description,
          url,
          image: null,
        })
      },
      // if failed
      () => {
        savePortfolio({
          name,
          description,
          url,
          image: null,
        })
      }
    )
  }

  const savePortfolio = async (portfolio) => {
    //portfolio è il parametro che conterrà l'oggetto passato da uploadBytes
    console.log(portfolio)

    try {
      await addDoc(collection(db, 'portfolio'), portfolio)
      window.location.reload(true)
    } catch (error) {
      alert('Failed to add portfolio')
    }
  }

  return (
    <div className="dashboard">
      <form ref={form} onSubmit={submitPortfolio}>
        <p><input type="text" placeholder="Name" /></p>
        <p><textarea placeholder="Description" /></p>
        <p><input type="text" placeholder="Url" /></p>
        <p><input type="file" placeholder="Image" /></p>
        <button type="submit">Submit</button>
        <button onClick={() => auth.signOut()}>Sign Out</button>
        
      </form>
    </div>
  )
}
export default Home