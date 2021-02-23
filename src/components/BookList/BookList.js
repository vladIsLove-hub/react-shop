import React from 'react'
import hocFirebase from '../HOC_Firebase/hocFirebase'
import BookListItem from '../BookListItem/BookListItem'
import compose from '../../utils/compose'
import { connect } from 'react-redux'
import Preloader from '../Preloader/Preloader'
import { requestBooks } from '../../actions/actions'

const BookList = ({ books }) => {
    return (
        <div  style={{height: 'calc(100vh - 3.8rem)', overflowY: 'auto'}}  className='flex-shrink-1'>
            <h3 className="text-center">Книги</h3>
            <div className='row d-flex '>
                { books.map((book, idx) => {
                    return <BookListItem book={book} key={idx}/>
                }) }
            </div>
        </div>
    )
}

class BookListContainer extends React.Component {

    componentDidMount(){
        this.props.requestBooks()
    }

    render() {
        const { books } = this.props

        if(!books.length){
            return <Preloader />
        }
       
        return (
            <BookList books={books} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { myFirebase } = ownProps
    return {
        requestBooks: requestBooks(dispatch, myFirebase)
    }
}

export default compose(
    hocFirebase(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)