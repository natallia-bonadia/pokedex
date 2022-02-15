import React from 'react'

export default function Pokemon({ name, number, types }) {
  return (
    <>
      <li className={'card ' + types.join(' ')}>
        <div className="card-image-container">
          <img src={`/images/${number}.png`} alt={name} />
        </div>
        <div className="number">
          <span>#{number}</span>
        </div>
        <div className="name">
          <span>{name}</span>
        </div>
        <div className="types">
          <span>{types.join(' | ')}</span>
        </div>
      </li>
    </>
  )
}