
import React from 'react'
import '../styles/Counter.css';

export const Counter = ({ clicksCount }) => {
  return (
    <div
      className="counter-container">
      { clicksCount }
    </div>
  )
}
