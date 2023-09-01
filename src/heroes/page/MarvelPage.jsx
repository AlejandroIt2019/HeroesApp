import React from 'react'
import { HeroList } from '../components/HeroList'

export const MarvelPage = () => {
  return (
    <>
      <h1 className='text-center'>Marvel Page</h1>
      
      <HeroList publisher='Marvel Comics' />
    </>
  )
}
