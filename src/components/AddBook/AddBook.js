import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    margin-top: 1.1rem;
    font-size: 16px;
    margin-bottom: 5px;
`

const AddBook = () => {
    return (
        <>
            <form>
                <div className="form-group">
                    <Label htmlFor="book-title">Название:</Label>
                    <input type="text" placeholder='Введите название' className="form-control" id="book-title"></input>

                    <Label htmlFor="book-author">Автор:</Label>
                    <input type="text" placeholder='Укажите автора' className="form-control" id="book-author"></input>

                    <Label htmlFor="book-price">Стоимость (р.):</Label>
                    <input type="number" className="form-control" id="book-price"></input>

                    <Label htmlFor="book-rating">Рейтинг:</Label>
                    <input type="number" placeholder='От 0 до 5' className="form-control" id="book-rating"></input>

                    <Label htmlFor="book-image">Ссылка на обложку:</Label>
                    <input type="text" placeholder='URL' className="form-control" id="book-image"></input>

                    <button style={{marginTop: '1.2rem'}} className="btn btn-outline-success w-100">Добавить</button>
                </div>
            </form>
        </>
    )
}

export default AddBook