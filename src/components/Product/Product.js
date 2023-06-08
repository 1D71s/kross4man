import { useSelector, useDispatch } from 'react-redux'
import './Product.scss'
import images from '../images'
import { addItemToBasket } from '../../store/mySlise'

const ProductItems = ({id, name, img, price}) => {

    const dispatch = useDispatch()

    return (
        <div className="product-item">
            <img className='img-items' src={images[img]} alt='1'></img>
            <div className='info-items'>
                <p className='name-items'>{name}</p>
                <h2 className='price-items'>{price}</h2>
            </div>
            <div>
                <div className='btn-add-to-backet' onClick={() => dispatch(addItemToBasket({id}))}>Купить</div>
            </div>
        </div>    
    )
} 


const Product = () => {
    const product = useSelector(state => state.shop.product)
    
    return (
        <div className="product">
            {
                product.map(prod => (
                    <ProductItems 
                        id={prod.id}
                        key={prod.id}
                        img={prod.img}
                        name={prod.name}
                        price={`${prod.price} UAH`}/>
                ))
            }
        </div>    
    )
} 

export default Product
