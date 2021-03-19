import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { booksError } from '../../actions/actions'

const ErrorWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 72%;
    padding: 5px 10px;
    z-index: 20;
    position: fixed;
    background: #f33636f0;
    color: #fff;
    border-radius: 3px;
`

const ErrorWithBooks = ({ error, booksError }) => {
    if(error) {
        return (
            <ErrorWrap>
                <span>Для выполнения операции необходимо авторизоваться</span>
                <button onClick={() => booksError(false)} className='btn'>&times;</button> 
            </ErrorWrap>
        )
    }

    return null
}

const mapStateToProps = ({ bookState }) => {
    return {
        error: bookState.error
    }
}

const mapDispatchToProps = {
    booksError
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorWithBooks)