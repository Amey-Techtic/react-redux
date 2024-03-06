import {ADD_TO_CART, REMOVE_FROM_CART} from "../constants"

export const addToCart = (data) =>{
    // console.log("action ",data);
    return{
        type: ADD_TO_CART,
        data: data
    } 
}


export const removeFromCart = (n,mbn) =>{
    console.log("action ");
    return{
        type: REMOVE_FROM_CART,
    } 
}
