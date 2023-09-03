import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { MarvelPage } from '../heroes/page/MarvelPage'
import { DcPage } from '../heroes/page/DcPage'
import { Navbar } from '../uii/components/Navbar'
import { LoginPage } from '../auth/page/LoginPage'
import { HeroesApp } from '../HeroesApp'
import { HeroesRoute } from '../heroes/routes/HeroesRoute'
import { PrivateRoute } from '../heroes/routes/PrivateRoute'
import { PublicRoute } from '../heroes/routes/PublicRoute'

export const AppRouter = () => {
  return (
    <>

      <Routes>

        <Route path='/login' element={<PublicRoute>
          <LoginPage/>
        </PublicRoute>}/>

        <Route path='/*' element={<PrivateRoute>
          <HeroesRoute />
        </PrivateRoute>}
        />

      </Routes>

    </>
  )
}
