import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AuthForm from "../AuthForm/AuthForm";

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

const AuthPage = () => {
    return (
        <Wrapper className='bg-dark'>
            <Card className='card' >
                <div className="card-body">
                    <Link title='React Shop' style={{textDecoration: 'none'}} to='/'>
                        <CardTitle>React Shop</CardTitle>
                    </Link>
                    <h6 style={{textAlign: 'center'}} className="card-subtitle mb-2 text-muted">
                        Войдите, чтобы получить возможность манипулировать книгами в магазине
                    </h6>
                    <hr />
                    <AuthForm />
                </div>
            </Card>
        </Wrapper>
    )
}

export default AuthPage