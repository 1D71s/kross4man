import { useState } from 'react'
import { toSearch } from '../../store/mySlise'
import './Search.scss'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import ProductFn from '../ProductFn/ProductFn';
import images from '../images'



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

const Search = () => {

    const search = useSelector(state => state.shop.search)
    const [text, setText] = useState('')
    
    const dispatch = useDispatch()

    const go = (e) => {
        setText(e)
        dispatch(toSearch({e}))
    }

    return (
        <div>
            <div className='search'>
                <input type="text" placeholder='Пошук' onChange={(e) => go(e.target.value)}/>
            </div>

            {search.length > 0 && <div className='search-result'>
                {
                    search.map(prod => (
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
            </div>}
        </div>    
    )
}

export default Search