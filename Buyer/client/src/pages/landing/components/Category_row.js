import React from 'react'
import './Category_row.css'
export default function Category_row({ image, caption }) {
  return (
    <div>
      <div class="container_card">
        <div class="d-flex flex-column bd-highlight mb-3">
          <div>
            <img src={image} width = {64} height = {64}></img>
          </div>
          <div className='caption'>
            <p class="text-body">{caption}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
