import './navbar.scss';
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NavBar() {
    const basket = useSelector(state => state.shop.basket)

    return (
        <nav className="navbar">
            <Link to='/'>
                <div className='logo'>
                    <div className='logotype'></div>
                    <div className='hounter'>KROSS4MAN</div>
                </div>
            </Link>
            <div className='cont-basket'>
                <Link to='/Basket'><FiShoppingCart className='basket'/></Link>
                {basket.length > 0 &&<p className='counter-basket'>{basket.length}</p>}
            </div>
        </nav> 
    )
}

export default NavBar

