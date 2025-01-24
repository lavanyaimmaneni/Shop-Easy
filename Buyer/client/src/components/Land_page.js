
import Nav_bar from './Nav_bar';
import Category_row from './Category_row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {-cart-shopping} from '@fortawesome/free-solid-svg-icons';
import Second_row from './Second_row';
import Third_row from './Third_row';
import Fourth_row from './Fourth_row';
import Last_row from './Last_row';

import React from 'react'

export default function Land_page() {
  return (
    <>
      {/* <Nav_bar/> */}
      <Second_row/>
      <Third_row/>
      <Fourth_row/>
      <Last_row/>
    </>
  )
}
