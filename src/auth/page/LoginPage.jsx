import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const LoginPage = () => {
  const {login} = useContext(AuthContext)
  const lastPath = localStorage.getItem('lastPath') || '/'
  const navigate = useNavigate()
  const onLogin = () => {
    login('Alejandro it')
    
    navigate(lastPath, {
      replace: true
    })
  }
  return (
    <>
    <div className='page'> 

      <div className="container">
        <div className='text-center'>
        <h1 className='text-white'>Login page</h1>
        <hr />
        <button onClick={onLogin} className='btn btn-primary'>Login</button>

        </div>
      </div>
    </div>
    </>
  )
}
