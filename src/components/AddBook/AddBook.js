import React from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './validationSchema'
import styled from 'styled-components'
import { booksAdded } from '../../actions/actions'
import compose from '../../utils/compose'
import hocFirebase from '../HOC_Firebase/hocFirebase'

const Label = styled.label`
    margin-top: 1.1rem;
    font-size: 16px;
    margin-bottom: 5px;
`

const AddBook = ({ booksAdded, token }) => {
    return (
        <Formik
            initialValues={ initialValues }
            validateOnChange
            validationSchema={ validationSchema }
            onSubmit={ async (values) => {
                await booksAdded(values, token)
                for(let key in values){
                    values[key] = ''
                }
            }}
        >
            {
                ({ values, errors, touched, handleChange, isValid, handleSubmit, dirty }) => {
                    return (
                        <div className="form-group">
                            <Label htmlFor="book-title">Название:</Label>
                            <input
                                type="text"
                                placeholder='Введите название'
                                className="form-control"
                                id="book-title"
                                name="title"
                                required
                                onChange={ handleChange }
                                value={ values.title }
                            />
                            { touched.title && errors.title && <p style={{color: 'red'}}>{errors.title}</p> }

                            <Label htmlFor="book-author">Автор:</Label>
                            <input
                                type="text"
                                placeholder='Укажите автора'
                                className="form-control"
                                id="book-author" 
                                name="author"
                                required
                                onChange={ handleChange }
                                value={ values.author }
                            />
                            { touched.author && errors.author && <p style={{color: 'red'}}>{errors.author}</p> }

                            <Label htmlFor="book-price">Стоимость (р.):</Label>
                            <input 
                                type="number"
                                placeholder='Укажите стоимость'
                                className="form-control"
                                name="price"
                                required
                                onChange={ handleChange }
                                value={ values.price }
                            />
                            { touched.price && errors.price && <p style={{color: 'red'}}>{errors.price}</p> }

                            <Label htmlFor="book-rating">Рейтинг:</Label>
                            <input 
                                type="number"
                                placeholder='От 0 до 5'
                                className="form-control"
                                name="rating"
                                required
                                onChange={ handleChange }
                                value={ values.rating }
                            />
                            { touched.rating && errors.rating && <p style={{color: 'red'}}>{errors.rating}</p> }
                            
                            <Label htmlFor="book-image">Ссылка на обложку:</Label>
                            <input
                                type="text"
                                placeholder='Ссылка на картинку'
                                className="form-control"
                                name="image"
                                required
                                onChange={ handleChange }
                                value={ values.image }
                            />
                            { touched.image && errors.image && <p style={{color: 'red'}}>{errors.image}</p> }

                            <button
                                type='submit'
                                style={{marginTop: '1.2rem'}}
                                className="btn btn-success w-100"
                                onClick={ handleSubmit }
                                disabled={ isValid && !dirty && touched }
                            >
                                  Добавить
                            </button>
                        </div>
                    )
                }
            }
        </Formik>        
    )
}

const mapStateToProps = ({ authState }) => {
    return {
        token: authState.token
    }
}

const mapDispatchToProps = {
    booksAdded
}

export default compose(
    hocFirebase(),
    connect(mapStateToProps, mapDispatchToProps)
)(AddBook)