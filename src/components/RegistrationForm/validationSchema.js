import * as yup from 'yup'

export const regInitialValues = {
    email: '',
    password: '',
    confirmPassword: ''
}

export const validationSchema = yup.object().shape({
    email: yup.string()
        .email('Неверный формат')
        .required('*Укажите email')
        .trim(),
    password: yup.string()
        .required('*Укажите пароль')
        .min(6, 'Слишком короткий пароль')
        .trim(),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), ''], 'Пароли должны совпадать')
        .required('*Подтвердите пароль')
})