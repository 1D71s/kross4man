import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import ProductFn from '../ProductFn/ProductFn';
import images from '../images'
import './Product.scss'



const ProductItems = ({id, name, img, price, size, entrySize}) => {

    return (
        <div className="product-item">
            <Link to={`/${id}`}>
                <img className='img-items' src={images[img[0]]} alt='1'></img>
            </Link>
            <div className='info-items'>
                <Link to={`/${id}`}>
                    <p className='name-items'>{name}</p>
                </Link>
                
                <ProductFn price={price} size={size} entrySize={entrySize} id={id}/>

            </div>
            
        </div>    
    )
} 


const Product = () => {
    const product = useSelector(state => state.shop.product)
    
    return (
        <div className='container-product'>
            <div className='search'>
                <input type="text" placeholder='Пошук'/>
            </div>
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
        </div>    
    )
} 

export default Product
