import React from 'react'
import './SingleCard.css'

function SingleCard({ card }) {
  return (
    <div className='card'>
      <img
        src={card.src}
        alt='card front'
        className='front'
      />
      <img
        src='/img/cover.png'
        alt='card back'
        className='back'
      />
    </div>
  )
}

export default SingleCard
