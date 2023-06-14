import { useSelector, useDispatch } from 'react-redux'
import { addItemToBasket, addSizeItem, updateEntrySize } from '../../store/mySlise';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../images'
import './Product.scss'


const ProductItems = ({id, name, img, price, size, entrySize}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateEntrySize());
    }, [dispatch]);

    return (
        <div className="product-item">
            <Link to={`/${id}`}>
                <img className='img-items' src={images[img[0]]} alt='1'></img>
            </Link>
            <div className='info-items'>
                <Link to={`/${id}`}>
                    <p className='name-items'>{name}</p>
                </Link>
                <div className='size-cont'>
                    {size.map((i) => (
                        <span 
                            key={i} 
                            className={`size-item ${entrySize === i ? 'active' : ''}`}
                            onClick={() => dispatch(addSizeItem({id, i}))}>{i}</span>
                    ))}
                </div>
                <h2 className='price-items'>{price}</h2>
            </div>
            <div>
                <button className='btn-add-to-backet' onClick={() => dispatch(addItemToBasket({id, entrySize}))}>Купить</button>
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
                        size={prod.size}
                        entrySize={prod.entrySize}
                        price={`${prod.price} UAH`}/>
                ))
            }
        </div>    
    )
} 

export default Product
