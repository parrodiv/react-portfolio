import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Login from '../Login'
import Home from './home'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  })

  return <div>{user ? <Home /> : <Login />}</div>
}

export default Dashboard
