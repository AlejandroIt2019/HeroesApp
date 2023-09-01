import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getHeroesById } from '../helpers/getHeroesById'

export const HeroPage = () => {
    const navigate = useNavigate()
    const onBack = () => {
        navigate(-1)
    }
    const {id} = useParams()
    const heroes = getHeroesById(id)
    return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img className='img-thumbnail animate__animated animate__fadeIn' src={`/assets/heroes/${id}.jpg`} alt={heroes.superhero} />
                </div>
                <div className="col-8">
                    <h1>{heroes.superhero}</h1>
                    <hr/>
                    <p>{heroes.alter_ego}</p>
                    <p>{heroes.publisher}</p>
                    <p>{heroes.first_appearance}</p>

                    <button onClick={onBack} className='btn btn-success'>Back</button>
                </div>
            </div>
        </div>
    </>
  )
}
