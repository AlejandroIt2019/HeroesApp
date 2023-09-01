import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ id, superhero, alter_ego, characters, publisher, first_appearance}) => {
    const getImageUrl = `./assets/heroes/${id}.jpg`
    return (
        <>
            <div className="col">
                <div className="card">
                    <div className="row">
                        <div className="col-4">
                            <img className='card-img' src={getImageUrl} alt={superhero} />
                        </div>
                        <div className="col-8">
                            <h5>{superhero}</h5>
                            <p>{alter_ego}</p>
                            <p>{publisher}</p>
                            {
                                (alter_ego === characters) && <p className='text-card'>{characters}</p>
                            }

                            <Link
                                to={`/hero/${id}`}
                            >
                                ...More
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
