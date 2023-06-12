import React from "react"
import './Basket.scss'
import { useSelector, useDispatch } from "react-redux"
import images from '../images'
import { AiOutlineClose } from "react-icons/ai";
import { deleteFromBasket } from "../../store/mySlise";
import { Link } from "react-router-dom";


const ItemBasket = ({img, name, price, id, count, entrySize}) => {

    const dispatch = useDispatch()

    return (
        <div className="basketc-item">
            <div>
                <img src={images[img]} alt="Щось пышло не так"/>
                <p className='name-items'>{name}</p>
            </div>
            <div>
                <div>
                    <AiOutlineClose className="delete-bas-item" onClick={() => dispatch(deleteFromBasket({id}))}/>
                </div>
                <h1 className="price-bas">{price} UAH</h1>
                <div> Розмір: {entrySize}</div>
                <div className="count-item">Кількість: {count}</div>
            </div>
        </div>    
    )
}

const BasketC = () => {
    const basket = useSelector(state => state.shop.basket)
    const totalPrice = basket.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <div className="basketc">
                <div className="noitem">{basket.length === 0 && 'Кошик порожній'}</div>
                {
                    basket.map(bas => (
                        <ItemBasket
                            id={bas.id}
                            key={bas.id}
                            img={bas.img}
                            name={bas.name}
                            price={bas.price}
                            count={bas.count}
                            entrySize={bas.entrySize}
                        />
                    ))
                }
                {totalPrice > 0 && <div className="order">
                    <Link to='/form'>
                        <div className="order-btn">Оформити замовлення</div>
                    </Link>
                    <div className="total-price">{totalPrice} UAH</div>
                </div>}
            </div>
        </div>    
    )
} 

export default BasketC
