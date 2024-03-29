import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { signOut } from '../../actions/authActions'
import './nav.css'
import { removeItemsFromLocalStorage } from '../../utils/utils'

const CurrentItemsSpan = styled.span`
    position: absolute;
    top: -10px;
    right: -10px;
    color: #fff;
    border-radius: 40px;
    font-size: 12px;
    background: red;
    padding: 5px;
    width: 25px;
    text-align: center;
`

const signOutHandler = (signOut) => {
    const confirmAnswer = window.confirm('Вы действительно желаете выйти?')
    if(confirmAnswer) {
        signOut()
        removeItemsFromLocalStorage('token', 'email', 'refreshToken', 'expiresIn')
    }
}

const Account = ({ email, signOut }) => {
    if(email) {
        return (
            <>
                <button className="account nav-short">{ email }</button>
                <button onClick={() => signOutHandler(signOut)} className="btn btn-danger nav-short mar-left">Выход</button>
            </>
        )
    }

    return (
        <>
            <Link style={{textDecoration: 'none'}} to='/auth' className='btn btn-outline-success nav-short'>Вход</Link>
            <Link style={{textDecoration: 'none'}} to='/registration' className='btn btn-primary nav-short mar-left'>Регистрация</Link>
        </>
    )
}
 
const Nav = ({ email, signOut }) => {
    return (
        <nav style={{padding: '10px 1rem'}} className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
            <div className="container-fluid">
                <Link to='/' style={{marginRight: '2rem', color: '#0c964a', fontSize: '24px', textDecoration: 'none'}} className="navbar-brand mb-0 mr-2 h1" href="/">React Shop</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div  className="collapse navbar-collapse d-lg-flex justify-content-lg-between" id="navbarSupportedContent">
                    <input className="form-control mr-sm-2 nav-long nav-short" type="search" placeholder="Поиск..." aria-label="Search" />
                    <ul style={{display: 'flex', alignItems: 'center'}} className="navbar-nav">
                        <li className="nav-item nav-mr-20px nav-short">
                            <button style={{position: 'relative'}} className='btn btn-outline-light nav-short'>
                                <CurrentItemsSpan>12</CurrentItemsSpan>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                            </button>       
                        </li>
                        <li className="nav-item nav-short">
                            <Account signOut={signOut} email={email} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = ({ authState }) => {
    return {
        email: authState.email
    }
}

const mapDispatchToProps = {
    signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)