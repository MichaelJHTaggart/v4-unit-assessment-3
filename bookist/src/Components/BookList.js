import React from 'react'
import Books from './Books';

function BookList(props) {
    const mappedBooks = props.books.map((element, index) => {
        return <Books key={element.id} product={element} index={index} />
    })
    return <div className="book-section">{mappedBooks}</div>
}
export default BookList 