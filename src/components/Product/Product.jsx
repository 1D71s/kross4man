import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import ProductFn from '../ProductFn/ProductFn';
import images from '../images'
import { BiChevronUp } from "react-icons/bi";
import './Product.scss'
import { useState, useEffect } from 'react';
import { sortOld, sortNew, sortPriceD, sortPriceU, toActivBrand } from '../../store/mySlise';

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

    const all = useSelector(state => state.shop.product)
    
    let [product, setProduct] = useState(all)
    

    const sort = useSelector(state => state.shop.activeButtonSort)

    const brand = useSelector(state => state.shop.categoryBrand)
    const actBrand = useSelector(state => state.shop.activBrand)

    const [filter, setFilter] = useState(false)

    const [activeButton, setActiveButton] = useState(sort);
    const [activeBrand, setActiveBrand] = useState(actBrand)

    const dispatct = useDispatch()


    const sortToOld = () => {
       dispatct(sortOld())
       setActiveButton('sortToOld')
    }

    const sortToNew = () => {
        dispatct(sortNew())
        setActiveButton('sortToNew')
    };

    const sortToPriceDown = () => {
        dispatct(sortPriceD())
        setActiveButton('sortToPriceDown')
    }

    const sortToPriceUp = () => {
        dispatct(sortPriceU())
        setActiveButton('sortToPriceUp')
    }

    useEffect(() => {
        setProduct(all)
        filtherOfBrand(actBrand)
    }, [all])

    const filtherOfBrand = brand => {
        if (brand === 'all') {
            setProduct(all)
        } else {
            setProduct(product = all.filter(i => i.category === brand))
        }
        dispatct(toActivBrand({brand}))
        setActiveBrand(brand)
    }


    return (
        <div className='container-product'>
            <div className='parent-filt'>
                <button onClick={() => setFilter(filter => !filter)} className='btn-filt'>Фільтр</button>
                <BiChevronUp style={{
                    color: 'rgb(65, 65, 65)',
                    position: 'absolute',
                    marginTop: '3px',
                    width: '40px',
                    height: '40px',
                    transition: 'transform 0.2s ease-in-out',
                    transform: filter ? 'rotateX(180deg)' : 'none',
                }}/>
                {filter && 
                    <div className={`filter-cont ${filter ? 'show' : ''}`}>
                        <div className='sort-brand'>Сортування:</div>
                        <ul>
                            <button className={`li ${activeButton === 'sortToNew' ? 'active-sort' : ''}`} onClick={sortToNew}>Нові</button>
                            <button className={`li ${activeButton === 'sortToOld' ? 'active-sort' : ''}`} onClick={sortToOld}>Старі</button>
                            <button className={`li ${activeButton === 'sortToPriceDown' ? 'active-sort' : ''}`} onClick={sortToPriceDown}>Дешеві</button>
                            <button className={`li ${activeButton === 'sortToPriceUp' ? 'active-sort' : ''}`} onClick={sortToPriceUp}>Дорогі</button>
                        </ul>
                        <div className='sort-brand'>Бренди:</div>
                        <ul>
                            {brand.map(category => (
                                <button key={category} className={`li ${activeBrand === category ? 'active-sort' : ''}`} onClick={() => filtherOfBrand(category)}>{category}</button>    
                            ))}
                        </ul>
                    </div>}
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
