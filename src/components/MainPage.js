
import '../css/mainPage.css'
import Items from './Items'
import ProductItem from './ProductItem'
import ShopCartBtn from './ShopCartBtn'

export default function MainPage({ isCartActive, toggleCart, addToCart }) {
    return (
        <div className='items' style={{ width: isCartActive ? '60%' : '80%' }}>
            {Items.map(item => (
                <ProductItem 
                    key={item.id}
                    id={item.id}
                    image={`/img/product/${item.img}`}
                    name={item.name}
                    price={item.price}
                    desc={item.desc}
                    addToCart={addToCart}
                />
            ))}
            <ShopCartBtn toggleCart={toggleCart} />
        </div>
    );
}
