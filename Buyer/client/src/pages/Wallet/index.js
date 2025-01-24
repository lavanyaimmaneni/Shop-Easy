import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Wallet = () => {
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
                    Wallet
                </div>
            </div>
            <div class="container_1">
                <div class="header_1">
                    <div class="d-flex flex-row mb-3 justify-content-between">
                        <div><h5>Wallet Balance</h5></div>
                        <div><h6>Rs 5000</h6></div>
                    </div>
                    <hr></hr>
                </div>
                <div class="content">
                    <div class="d-flex flex-column mb-3">
                        <div class="d-flex flex-row mb-3">
                            <div><i class="fa-solid fa-circle-plus blue-color fa-xl"></i></div>
                            <div><h5>Add Money</h5></div>
                        </div>
                        <div class="d-flex flex-row mb-3">
                            <div><i class="fa-solid fa-gift fa-xl"></i></div>
                            <div><h5>Add Gift Card</h5></div>
                        </div>
                        <div class="d-flex flex-row mb-3">
                            <div><i class="fa-brands fa-cc-amazon-pay fa-xl"></i></div>
                            <div><h5>Transactions</h5></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wallet;