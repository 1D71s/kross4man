import ProductFn from '../ProductFn/ProductFn';
import Slider from '../Slider/Slider'
import './ItemLink.scss'


const ItemLink= ({itemProd}) => {

    const id = itemProd.id
    const size = itemProd.size
    const price = itemProd.price
    const entrySize = itemProd.entrySize


    const data = {
        'Виробник ': 'New Balance',
        'Стать': 'Унісекс',
        'Сезон': 'Весна/Літо/Осінь',
        'Країна виробник': "В'єтнам",
        'Стан': 'Новий',
    };

    return (
        <div className='item-link'>
            <div>
                <Slider/>
            </div>

            <div className='name-item' >{itemProd.name}</div>

            <div className='cont-descr'>
                
                {itemProd && itemProd.description && (
                    <>
                        <div className='count-itemfn'>
                            <ProductFn price={`${price} UAH`} size={size} entrySize={entrySize} id={id}/>
                        </div>
                        <div className='descr'>{itemProd.description}</div>
                    </>
                )}
            </div>

            <table className='table'>
                <tbody>
                    {Object.entries(data).map(([key, value]) => (
                        <tr className='tr' key={key}>
                            <td>{key}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>    
    )
}

export default ItemLink