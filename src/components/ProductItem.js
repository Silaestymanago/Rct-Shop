
export default function ProductItem({id,image,name,price,desc,addToCart}){
  
    return(
        <div className="item">
        <img src={image} alt="{name}"/>
        <h4>{name}-{price}$</h4>
        <p>{desc}</p>
        <div className="add-to-cart" onClick={()=>addToCart(id)}>
        <i className="fa-solid fa-cart-plus"></i></div>
        </div>

    )
}


