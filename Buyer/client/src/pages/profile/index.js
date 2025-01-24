import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
    <div class="d-flex flex-row mb-3 align-items-center">
      <div class="link">
      <Link to={`../account`}>Your Account</Link>
      </div>
      <div class="greater">
        >
      </div>
      <div>
        Your Profile
      </div>
    </div>
    <div class="container">
      <div class="d-flex flex-column  mb-3">
        <div class="d-flex flex-row mb-3 align-items-center">
          <h3>Your Profile</h3>
        </div>
        <div class="d-flex flex-column  mb-3">
          <div><h5>First Name</h5></div>
          <div class='field'><h6>Aditya</h6></div>
        </div>
        <div class="d-flex flex-column  mb-3">
          <div><h5>Last Name</h5></div>
          <div class='field'><h6>Immaneni</h6></div>
        </div>
        <div class="d-flex flex-column  mb-3">
          <div><h5>Email</h5></div>
          <div class='field'><h6>cs19b019@iittp.ac.in</h6></div>
        </div>
        <div class="d-flex flex-column  mb-3">
          <div><h5>Mobile No</h5></div>
          <div class='field'><h6>9505937189</h6></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile