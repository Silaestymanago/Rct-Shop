import { useState } from "react"

export default function ShopCartBtn({toggleCart}){
    return(
        <button className="shop-cart-btn" onClick={toggleCart}><i className="fa-solid fa-cart-flatbed"></i></button>
    )
}