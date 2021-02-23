import React from 'react'
import TrashIcon from '../icons/trash'
import EditIcon from '../icons/edit'
import Star from '../icons/star'
import FillStar from '../icons/fillstar'

const BookListItem = ({ book }) => {
    return (
        <div className="card" style={{width: '18rem', margin: '1.1rem auto'}}>
            <img src={book.image} style={{height: '65%'}} className="card-img-top" alt="book" />
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-text">{book.author}</h6>
                <p className="card-text">Рейтинг: {getRating(book.rating)}</p>
                <strong className="card-text">Стоимость: {book.price}р</strong>
                <button className="btn btn-success w-100">Добавить</button>
                <button className="btn btn-outline-primary w-100 mt-2">Просмотреть</button>
                <button className="btn btn-outline-success w-100 mt-2"><EditIcon /></button>
                <button className="btn btn-outline-danger w-100 mt-2"><TrashIcon /></button>
            </div>
        </div>
    )
}

function getRating(valueOfStars){
    const result = []
    const difference = 5 - valueOfStars

    for(let i = 0; i < valueOfStars; i++){
        result.push(<FillStar />)
    }

    for(let i = 0; i < difference; i++){
        result.push(<Star />)
    }

    return result
}

export default BookListItem