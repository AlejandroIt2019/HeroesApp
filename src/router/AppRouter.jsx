import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { MarvelPage } from '../heroes/page/MarvelPage'
import { DcPage } from '../heroes/page/DcPage'
import { Navbar } from '../uii/components/Navbar'
import { LoginPage } from '../auth/page/LoginPage'
import { HeroesApp } from '../HeroesApp'
import { HeroesRoute } from '../heroes/routes/HeroesRoute'

export const AppRouter = () => {
  return (
    <>

        <Routes>  
          <Route path='login' element={<LoginPage />} />
          <Route path='/*' element={<HeroesRoute />} />
        </Routes> 
      
    </>
  )
}
