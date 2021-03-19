import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import RegForm from "../RegistrationForm/RegForm";
import { connect } from 'react-redux'
import AuthError from '../Errors/AuthError';
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

const RegistrationPage = ({ error }) => {
    return (
        <Wrapper className='bg-dark'>
            <Card className='card' >
                <div className="card-body">
                    <Link title='React Shop' style={{textDecoration: 'none'}} to='/'>
                        <CardTitle>React Shop</CardTitle>
                    </Link>
                    <h6 style={{textAlign: 'center'}} className="card-subtitle mb-2 text-muted">
                        Зарегистрируйся, чтобы получить возможность управлять всеми книгами
                    </h6>
                    <AuthError error={ error } />
                    <hr />
                    <RegForm />
                </div>
            </Card>
        </Wrapper>
    )
}

const mapStateToProps = ({ authState }) => {
    return {
        error: authState.error
    }
}

const mapDispatchToProps = {
    signInError
}

export default  connect(mapStateToProps, mapDispatchToProps)(RegistrationPage)