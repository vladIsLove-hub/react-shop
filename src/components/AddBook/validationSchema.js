import * as yup from 'yup'

export const initialValues = {
    title: '',
    author: '',
    price: '',
    rating: '',
    image: ''
}

export const validationSchema = yup.object().shape({
    title: yup.string()
        .typeError('Должно быть строкой')
        .trim('Укажите название')
        .min(3, 'Слишком короткое название')
        .max(30, 'Слишком длинное название!')
        .required('Обязательное поле!'),
    author: yup.string()
        .typeError('Должно быть строкой')
        .trim('Укажите автора')
        .max(30, 'Слишком длинное имя')
        .required('Обязательное поле!'),
    price: yup.number()
        .min(0, 'Не может быть отрицательной')
        .required('Обязательное поле!'),
    rating: yup.number()
        .typeError('Должно быть число')
        .min(0, 'Должно быть от 0 до 5')
        .max(5, 'Должно быть от 0 до 5')
        .required('Обязательное поле!'),
    image: yup.string()
        .required('Обязательное поле!')
        .trim('Укажите ссылку')
})