import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart, removeFromCart} from '../Services/Actions/actions'



const mapStateToProps = state =>({
    data: state.cartItems //this state will recieve cartData from reducer.js ADD_TO_CART case
})

//dispatch to dispatch an action, the action will be dispatched on add to cart button click in Home component 
const mapDispatchToProps = dispatch =>({
    //this function will be called from Home component on add to cart button click 
    addToCartHandler: data=>dispatch(addToCart(data)),
    removeFromCartHandler: data=>dispatch(removeFromCart(data))

})
//so we have wrapped Home component with connect method that provide two methods mapStateToProps, mapDispatchToProps so that Home component can get the redux store data and also dispatch functions which will be dispatching the action in order to manipulate redux sstore data.  
export default connect(mapStateToProps, mapDispatchToProps)(Home)

