import React from 'react'
import './Category_row.css'
import { useState } from 'react'
export default function Category_row({ image, caption }) {
  const [quer, change_quer] = useState('')
  if (caption == "Grocery")
    change_quer('grocery')
  else if (caption == "Fashion")
    change_quer('fashion')
  else
    change_quer('all')
  const OnClick_Handler = () => {
    window.location = "./search?q=" + quer
    console.log('clicked')
  }
  return (
    <div>
      <div class="container_card" onClick={OnClick_Handler}>
        <div class="d-flex flex-column bd-highlight mb-3">
          <div>
            <img src={image} width={64} height={64}></img>
          </div>
          <div className='caption'>
            <p class="text-body">{caption}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
