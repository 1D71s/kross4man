import './FormToOrder.scss'

const FormToOrder = () => {
    return (
        <div className='form-to-order'>
            <div>
                <p>товар у замовленні</p>
                <div>Товар</div>
            </div>
            <div>
                <p>Доставка</p>
                <div>Нова Пошта</div>
            </div>
            <div>
                <div>Данні отримувача</div>
                <p>Прізвище</p>
                <input type="text" />
                <p>Iм'я</p>
                <input type="text" />
                <p>Телефон</p>
                <input type="text" />
                <p>Місто</p>
                <input type="text" />
                <p>Відділення</p>
                <input type="text" />
                <p>Коментар</p>
                <input type="text" />
                
            </div>
            <div className='btn-finish'>
                <div>Підтвердити</div>
            </div>


        </div>    
    )
}

export default FormToOrder