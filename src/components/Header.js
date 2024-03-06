import React from 'react'
import './Home.css'

// here we are getting props data from mapStateToProps() from HeaderContainer
const Header = (props) => {
    console.log("header", props.data);
  return (
    <div>
        <div className='add-to-cart-header-wrapper'>
            <img className='add-to-cart-image' src='https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-add-to-cart--icon-design-png-image_1013293.jpg'/>
           <div className='add-to-cart-count-text'> {props.data.length} </div>
        </div>
    </div>
  )
}

export default Header
