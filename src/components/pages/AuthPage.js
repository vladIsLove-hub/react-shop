import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AuthForm from "../AuthForm/AuthForm";
import AuthError from '../Errors/AuthError'
import { signInError } from '../../actions/authActions'

const Card = styled.div`
  width: 23rem;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardTitle = styled.h2`
  text-shadow: 0px 0px 4px #55ff52;
  text-align: center;
  color: #0c964a;
`

const AuthPage = ({ authError, signInError }) => {
    return (
        <Wrapper className='bg-dark'>
            <Card className='card' >
                <div className="card-body">
                    <Link onClick={() => signInError(null)} title='React Shop' style={{textDecoration: 'none'}} to='/'>
                        <CardTitle>React Shop</CardTitle>
                    </Link>
                    <h6 style={{textAlign: 'center'}} className="card-subtitle mb-2 text-muted">
                        Войдите, чтобы получить возможность манипулировать книгами в магазине
                    </h6>
                    <AuthError error={ authError } />
                    <hr />
                    <AuthForm />
                </div>
            </Card>
        </Wrapper>
    )
}

const mapStateToProps = ({ authState }) => {
    return {
        authError: authState.error
    }
}

const mapDispatchToProps = {
    signInError
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage)