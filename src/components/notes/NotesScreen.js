import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {
  
    return (
      <div className='notes__main-content'>
          <NotesAppBar />

          <div className='notes__content'>
            <input
                type="text"
                placeholder='Some Awesome Title'
                className='notes__title-input'
                autoComplete='off'
            />
            <textarea
                placeholder='What happened today!'
                className='notes__textarea'
            ></textarea>

            <div className='note__image'>
                <img
                    src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                    alt='pictures'
                />
            </div>
          </div>
      </div>
    )
}
