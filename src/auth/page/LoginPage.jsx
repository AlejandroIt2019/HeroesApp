import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const navigate = useNavigate()
  const onLogin = () => {
    navigate('/*', {
      replace: true
    })
  }
  return (
    <>
      <div className="container">

        <h1>Login page</h1>
        <hr />
        <button onClick={onLogin} className='btn btn-primary'>Login</button>
      </div>
    </>
  )
}
