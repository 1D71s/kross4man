import './header.scss';


function Header() {

    return (
        <div className="header">
            <div className='image'></div>
            <div class="image-container">
                <div class="image-text">
                    <p className='start'>Магазин кросівок 🇺🇦</p>
                    <p>Знайдеш дешевше - зробимо знижку</p>
                    <p>Оплата після примірки</p>
                    <p className='end'>Обмін та повернення без проблем</p>
                </div>
            </div>
        </div> 
    )
}

export default Header