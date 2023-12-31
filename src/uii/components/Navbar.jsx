import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { authReducer } from '../../auth/context/authReducer'
import { AuthContext } from '../../auth/context/AuthContext'

export const Navbar = () => {
    const navigate = useNavigate()
    const {logout} = useContext(AuthContext)
    const {user} = useContext(AuthContext)
    const onLogout = () => {
        logout()
        navigate('/login', {
            replace: true
        })
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

                <Link
                    className="navbar-brand"
                    to="/marvel"
                >
                    Asociaciones
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            className="nav-item nav-link"
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            className="nav-item nav-link"
                            to="/dc"
                        >
                            DC
                        </NavLink>
                        <NavLink
                            className="nav-item nav-link"
                            to="/search"
                        >
                            Search
                        </NavLink>
                        
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <NavLink
                            className="nav-item nav-link"
                            to="/login"

                        >
                            <span className='text-primary m-2'>{user?.name}</span>
                            <button onClick={onLogout} className='btn btn-danger'>Logout</button>
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </>
    )
}