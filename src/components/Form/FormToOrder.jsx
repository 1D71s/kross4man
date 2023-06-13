import './FormToOrder.scss'

const FormToOrder = () => {
    return (
        <div className='form-to-order'>
            <div>
                <p className='otd'>Доставка:</p>
                <p className='np'></p>
            </div>
            <div>
                <div className='otd'>Данні отримувача:</div>
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