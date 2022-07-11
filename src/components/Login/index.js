import { signInWithGoogle } from "../../firebase.config"

const Login = () => {
  return (
    <div className='dashboard'>
      <button onClick={signInWithGoogle}>
        Sign In with google
      </button>
    </div>
  )
}

export default Login
