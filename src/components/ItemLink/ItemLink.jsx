import './ItemLink.scss'
import Slider from '../Slider/Slider'

const ItemLink= ({itemProd}) => {

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
            <div className='cont-descr'>
                <div className='name-item' >{itemProd.name}</div>
                <div className='descr-price'>{itemProd.price} UAH</div>
                <div className='descr'>{itemProd.description}</div>
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