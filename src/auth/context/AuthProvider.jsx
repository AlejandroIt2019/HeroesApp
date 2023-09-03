import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { types } from '../types/types'
import { authReducer } from './authReducer'

export const AuthProvider = ({children}) => {
    const init = () => {
        return JSON.parse(localStorage.getItem('keys')) || []
    }
    const [authState, dispatch] = useReducer(authReducer, {}, init)
    useEffect(() => {
      localStorage.setItem('keys', JSON.stringify(authState))
    }, [authState])
    
    const login = (name = '') => {
        const action = {
            type: types.login,
            payload: {
                id: '123',
                name: name
            }
        }
        dispatch(action)
        
    }
    const logout = () => {
        localStorage.removeItem('keys')
        const action = {
            type: types.logout
        }
        dispatch(action)
        
    }
  return (
    <>
        <AuthContext.Provider value={{login, logout, ...authState}}>
            {children}
        </AuthContext.Provider>
    </>
  )
}
