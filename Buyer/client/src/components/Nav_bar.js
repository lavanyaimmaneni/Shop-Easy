import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './Nav_bar.css'

export default function Nav_bar() {

    const [searched_content, setSearchedContent] = useState('');

    const Change_Handler = (event) => {
        setSearchedContent(event.target.value);

    }

    const clickHandler = () => {
        console.log(searched_content)
        window.location = searched_content
    }

    const cart_handler = () => {
        window.location = "/cart";
    }

    const on_logo_click = () => {
        window.location = "/home";
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top w-500">

            <div class="container-fluid">
                <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
                    <div className='brand_logo'>
                        <a class="navbar-brand" onClick={on_logo_click}>ShopEasy</a>
                    </div>

                    <div class="col-xs-9">
                        <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
                            <form class="d-flex">
                                <input class="form-control me-3" type="search" placeholder="Search for products, brands and more" aria-label="Search" onChange={Change_Handler} />
                            </form>
                            <button type="button" class="btn btn-outline-light mr-3" onClick={clickHandler}><i class="fa-solid fa-magnifying-glass"></i></button>

                        </div>
                    </div>
                    <div class="col-xs-9">
                        <Link to="/login"><button type="button" class="btn btn-outline-light mr-3" >Login</button></Link>

                    </div>
                    <div>
                        <Link to={'/seller'}><button type="button" class="btn btn-outline-light">Become a Seller</button></Link>

                    </div>

                    <div className='Cart_icon'>
                        <i class="fa-solid fa-cart-shopping" onClick={cart_handler}></i>


                    </div>
                </div>

            </div>


        </nav>
    )
}
