import React from 'react'
import Category_row from './Category_row'
import './Second_row.css'
import { Link } from 'react-router-dom'

export default function Second_row() {

const Click_fashion = () => {
    window.location = "./search?q=fashion"
}

const Click_grocery = () => {
    window.location = "./search?q=grocery"
}

    return (
        <>
            <div className='second_row'>
                <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
                    
                    <Category_row
                        image="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
                        caption="Top Offers"
                    >
                    </Category_row>
                    <Category_row
                        image="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
                        caption="Grocery"
                    >

                    </Category_row>
                    <Category_row
                        image="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
                        caption="Mobiles"
                    >
                    </Category_row>
                    <Category_row
                        image="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"
                        caption="Fashion"
                    >
                    </Category_row>
                    <Category_row
                        image="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
                        caption="Electronics"
                    >
                    </Category_row>
                    <Category_row
                        image="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
                        caption="  Home"
                    >
                    </Category_row>
                    <Category_row
                        image="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
                        caption="Appliances"
                    >
                    </Category_row>
                    <Category_row
                        image="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
                        caption="Travel"
                    >
                    </Category_row>
                    <Category_row
                        image="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
                        caption="Beauty, Toys"
                    >
                    </Category_row>
                </div>

            </div>


        </>
    )
}
