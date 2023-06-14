import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addItemToBasket, addSizeItem, updateEntrySize } from '../../store/mySlise';
import { useEffect } from 'react';
import './ProductFn.scss'

const ProductFn = ({id, price, size, entrySize}) => {

    const [count, setCount] = useState(1)

    const dispatch = useDispatch()

    const plus = () => {setCount(count => count + 1)}
    const minus = () => {count > 1 && setCount(count => count - 1)}

    useEffect(() => {
        dispatch(updateEntrySize());
    }, [dispatch, id]);

    return (
        <div>
            <div className='size-cont'>
                {size.map((i) => (
                    <span 
                        key={i} 
                        className={`size-item ${entrySize === i ? 'active' : ''}`}
                        onClick={() => dispatch(addSizeItem({id, i}))}>{i}</span>
                ))}
            </div>
            <h2 className='price-items'>{price}</h2>
            <div className='c'>
                <button className='btn-add-to-backet' onClick={() => dispatch(addItemToBasket({id, entrySize, count}))}>Купить</button>
                <span className='counter'>
                    <button onClick={minus}>-</button>
                    <span className='count'>{count}</span>
                    <button onClick={plus}>+</button>
                </span>
            </div>
        </div>    
    )
}

export default ProductFn