import React from 'react'
import Header from '../components/Header'
import {connect} from 'react-redux'

const mapStateToProps = state =>({
    //This function selects parts of the Redux state and passes it in as props to the component that connect() is applied to. 
    data: state.cartItems //this state will recieve cartData from reducer.js ADD_TO_CART case
})
const mapDispatchToProps = dispatch =>({
})
// The connect() function connects a React component to a Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(Header)
