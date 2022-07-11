import { useRef } from "react"
import { auth } from "../../firebase.config"

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

    console.log(name, description, url, image);
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