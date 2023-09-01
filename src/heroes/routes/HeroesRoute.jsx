import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DcPage } from '../page/DcPage'
import { Navbar } from '../../uii/components/Navbar'
import { MarvelPage } from '../page/MarvelPage'
import { HeroPage } from '../page/HeroPage'
import { SearchPage } from '../page/SearchPage'

export const HeroesRoute = () => {
    return (
        <>
            <Navbar />
            <div className="container">

                <Routes>
                    <Route path='dc' element={<DcPage />} />
                    <Route path='marvel' element={<MarvelPage />} />
                    <Route path='hero/:id' element={<HeroPage/>} />
                    <Route path='search' element={<SearchPage/>} />
                </Routes>

            </div>
        </>
    )
}
