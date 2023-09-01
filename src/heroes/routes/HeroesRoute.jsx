import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DcPage } from '../page/DcPage'
import { Navbar } from '../../uii/components/Navbar'
import { MarvelPage } from '../page/MarvelPage'

export const HeroesRoute = () => {
    return (
        <>
            <Navbar />
            <div className="container">

                <Routes>
                    <Route path='dc' element={<DcPage />} />
                    <Route path='marvel' element={<MarvelPage />} />
                </Routes>

            </div>
        </>
    )
}
