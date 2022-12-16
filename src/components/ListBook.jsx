import React from 'react'
import { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import Book from './Book'

const ListBook = () => {
  const {books, setBooks} = useContext(BookContext)
  console.log(books);
  //function to remove a book
  const handleRemoveBook = (id) => {
    const filteredBooks = books.filter(book => book.id !== id)
    setBooks(filteredBooks)

  }
  return (
    <div className='listBook'>
      {
        
        books.length ? books.map(book =>(
          <Book book={book} key={book.id} handleRemoveBook={handleRemoveBook}/>
        )): (<h1 className='noData'>No Books read yet, add some books!</h1>)
      }
    </div>
  )
}

export default ListBook