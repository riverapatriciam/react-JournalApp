import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div className='journal__entry-picture' style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg)'
          }}>
        </div>

        <div className='journal__entry-body'>
          <p className='journla__entry-title'>
            Un nuevo dia
          </p>
          <p className='journal-entry-content'>
            Irure cupidatat ex nisi sit anim commodo elit ad nisi laboris.
          </p>
        </div>

        <div className='journal_entry-date-box'>
            <span>Monday</span>
            <h4>28</h4>
        </div>
    </div>
  )
}
