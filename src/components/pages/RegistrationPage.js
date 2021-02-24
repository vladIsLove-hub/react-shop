import React from 'react'
import styled from 'styled-components'
import RegForm from "../RegistrationForm/RegForm";
import { connect } from 'react-redux'

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

const RegistrationPage = ({ hasLogin }) => {
    if(hasLogin){
        return <h1>Вы успешно зарегистрировались!</h1>
    }

    return (
        <Wrapper className='bg-dark'>
            <Card className='card' >
                <div className="card-body">
                    <CardTitle>React Shop</CardTitle>
                    <h6 style={{textAlign: 'center'}} className="card-subtitle mb-2 text-muted">
                        Зарегистрируйся, чтобы получить возможность управлять всеми книгами
                    </h6>
                    <hr />
                    <RegForm />
                </div>
            </Card>
        </Wrapper>
    )
}

const mapStateToProps = ({authState}) => {
    return {
        hasLogin: authState.hasLogin
    }
}

export default  connect(mapStateToProps, {})(RegistrationPage)