import '../css/shopCartBlock.css'


export default function ShopCartBlock({isActive,cartItems}){
  
   return(
    <aside className={`shop-cart-block ${isActive? 'active':''}`}>
        <h4>Cart(<span>{cartItems.length}</span>)<i className="fa-solid fa-cart-flatbed"></i></h4>
        <div className="titles">
        <span>Goods</span>
        <span>Price</span>
        <span>Number</span>
        </div>
        <div className="shop-cart">
        {cartItems.map((item,index)=>(
            <div key ={index} className='shop-item'>
            <div className='info'>
           <img src={item.img} alt={item.name} />
            <span>{item.name}</span>
            </div>
           <span>{item.price}$</span>
           <div className='count'>
           <button className='minus'>-</button>
           <input value={1}/>
           <button className='plus'>+</button>
           <button className='delete'><i class="fa-regular fa-trash-can"></i></button>
           </div>
         
            </div>
        ))}
            <button className="go-shop-btn">Remove all</button>
            <button className="go-shop">Amount - <b>0.00$</b></button>
        </div>
     
    </aside>
      
   )
 
}



