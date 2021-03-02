import * as yup from 'yup'

export const authInitialValues = {
    email: '',
    password: '',
}

export const authValidationSchema = yup.object().shape({
    email: yup.string()
        .email('Неверный формат')
        .required('*Укажите email')
        .trim(),
    password: yup.string()
        .required('*Укажите пароль')
        .min(6, 'Слишком короткий пароль')
        .trim(),
})