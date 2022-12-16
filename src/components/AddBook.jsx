import React from 'react'
import BookForm from './form/BookForm'
import { BookContext } from '../context/BookContext'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

const AddBook = () => {

  const navigate = useNavigate()
  const {books, setBooks} = useContext(BookContext)

  const handleOnSubmit = (book) => {
    setBooks([book, ...books])
    navigate('/')
  }
  return (
    <div className='addForm'>
      <BookForm handleSubmit={handleOnSubmit} />
    </div>
  )
}

export default AddBook