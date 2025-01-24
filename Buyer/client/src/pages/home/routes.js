import React from 'react'
import Landing from '../landing'
import Search from '../search'
import Product from '../product'
import Cart from '../cart'
import PlaceOrder from '../placeorder'
const routes = [
    {
        path : "/",
        exact : true ,
        component : Landing
    },
    {
        path : "/search",
        exact : true ,
        component : Search
    },
    {
        path : "/product/:productID",
        exact : true ,
        component : Product
    },
    {
        path : "/cart",
        exact : true ,
        component : Cart
    },
    {
        path : "/placeorder/:orderID",
        exact : true,
        component : PlaceOrder

    }
]
export default routes