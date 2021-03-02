import React from 'react'
import { Form, Formik } from 'formik'
import { signIn } from '../../actions/authActions'
import { authInitialValues, authValidationSchema } from './validationSchema'
import { connect } from 'react-redux'
import compose from "../../utils/compose";
import hocFirebase from "../HOC_Firebase/hocFirebase";


const onSubmit = async (values, signInAction, myFirebase) => {
    const { email, password } = values
    await myFirebase.loginIn(email, password)
            .then(idToken => signInAction(idToken))
    for(let key in values){
        values[key] = ''
    }
}

const AuthForm = ({ myFirebase, signIn }) => {
    return (
        <Formik
            validateOnChange
            initialValues={authInitialValues}
            validationSchema={authValidationSchema}
            onSubmit={values => onSubmit(values, signIn, myFirebase)}
        >
            {
                ({ values, errors, touched, handleChange, isValid, handleSubmit, dirty }) => {
                    return (
                        <Form className='mui-form'>
                            <div className="mui-textfield mui-textfield--float-label">
                                <input
                                    style={{marginBottom: '1.1rem'}}
                                    type="text"
                                    id="email"
                                    name="email"
                                    onChange={ handleChange }
                                    value={ values.email }
                                />
                                { touched.email && errors.email && <span style={{color: 'red'}}>{errors.email}</span> }

                                <label>Введите email</label>
                            </div>

                            <div className="mui-textfield mui-textfield--float-label">
                                <input
                                    style={{marginBottom: '1.1rem'}}
                                    type="password"
                                    autoComplete='on'
                                    id="password"
                                    name="password"
                                    onChange={ handleChange }
                                    value={ values.password }
                                />
                                <label>Укажите пароль</label>
                            </div>
                            { touched.password && errors.password && <p style={{color: 'red'}}>{errors.password}</p> }

                            <button
                                type='submit'
                                onClick={handleSubmit}
                                style={{marginTop: '1.2rem'}}
                                className="btn btn-success w-100"
                                disabled={ isValid && !dirty && touched }
                            >
                                Войти
                            </button>
                        </Form>
                    )
                }

            }
        </Formik>
    )
}


const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = {
    signIn
}

export default compose(
    hocFirebase(),
    connect(mapStateToProps, mapDispatchToProps)
)(AuthForm)

