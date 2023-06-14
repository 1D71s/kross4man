import { useDispatch } from 'react-redux'
import { addItemToBasket, addSizeItem, updateEntrySize } from '../../store/mySlise';
import { useEffect } from 'react';
import './ProductFn.scss'

const ProductFn = ({id, price, size, entrySize}) => {
    
    const dispatch = useDispatch()

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
            <div>
                <button className='btn-add-to-backet' onClick={() => dispatch(addItemToBasket({id, entrySize}))}>Купить</button>
            </div>
        </div>    
    )
}

export default ProductFn