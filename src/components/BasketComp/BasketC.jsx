import React from "react"
import './Basket.scss'
import { useSelector, useDispatch } from "react-redux"
import images from '../images'
import { AiOutlineClose } from "react-icons/ai";
import { deleteFromBasket } from "../../store/mySlise";

const ItemBasket = ({img, name, price, id}) => {

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
                <div></div>
            </div>
        </div>    
    )
}

const BasketC = () => {
    const basket = useSelector(state => state.shop.basket)

    return (
        <div>
            <div className="basketc">
                {
                    basket.map(bas => (
                        <ItemBasket
                            id={bas.id}
                            key={bas.id}
                            img={bas.img}
                            name={bas.name}
                            price={bas.price}
                        />
                    ))
                }
            </div>
        </div>    
    )
} 

export default BasketC
