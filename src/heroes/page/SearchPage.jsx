import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from "query-string";
import { getHeroesByName } from '../helpers/getHeroesByName';
import { HeroCard } from '../components/HeroCard';
export const SearchPage = () => {
    const {searchText,onInputChange, onResetForm} = useForm({
        searchText: ''
    })
    const local = useLocation()
    const {q = ''} = queryString.parse(local.search)
    const heroes = getHeroesByName(q)
    const navigate = useNavigate()
    const inputSubmit = (e) => {
        e.preventDefault()
        
        navigate(`?q=${searchText}`)
        console.log(local);
        onResetForm()
    }
  return (
    <>
        <div className="row">
            <div className="col-5">
                <h1>Search hero</h1>
                <hr/>
                <form onSubmit={inputSubmit}>
                    <input
                        placeholder='Insert hero'
                        className='form-control'
                        type='text'
                        autoComplete='off'
                        name='searchText'
                        value={searchText}
                        onChange={onInputChange}
                    />
                    <button type='submit' className='btn btn-primary mt-3'>Search</button>
                </form>
            </div>
            <div className="col-7">
                <h1 className='text-center'>Results</h1>
                <hr/>
                {
                    q == ' ' ?
                    <p className='alert alert-primary'>Search a hero <b></b></p>
                    : (heroes.length === 0) && 
                    <p className='alert alert-danger'>Hero not valid<b></b></p>
                }

                {
                    heroes.map(hero => (
                        <HeroCard
                            key={hero.id}
                            {...hero}
                        />
                    ))
                }
            </div>
        </div>
    </>
  )
}
