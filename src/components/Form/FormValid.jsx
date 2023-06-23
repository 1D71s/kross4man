import { useState } from "react"
import { useSelector } from "react-redux"

const FormValid = ({toggleResult, formValidation}) => {
    const basket = useSelector(state => state.shop.basket)
    const [lastName, setLastName] = useState('')
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('');
    const [comment, setComment] = useState('')
    const [sity, setSity] = useState('')
    const [point, setPoint] = useState('')

    const handleInputChange = (event) => {
        const inputPhoneNumber = event.target.value.replace(/\D/g, '');
        setPhoneNumber(inputPhoneNumber);
        if (inputPhoneNumber.length > 9) {
            formValidation.phone = true;
        } else {
            formValidation.phone = false;
        }
    };
    
    const validLastName = (e) => {
        const inputValue = e.target.value;
        setLastName(inputValue);
        if (inputValue.length > 0) {
            formValidation.lastName = true;
        } else {
            formValidation.lastName = false;
        }
    };

    const validName = (e) => {
        const inputValue = e.target.value;
        setName(inputValue);
        if (inputValue.length > 0) {
          formValidation.name = true;
        } else {
          formValidation.name = false;
        }
    };

    const validSity = (e) => {
        const inputValue = e.target.value;
        setSity(inputValue);
        if (inputValue.length > 0) {
          formValidation.sity = true;
        } else {
          formValidation.sity = false;
        }
    };

    const validPoint = (e) => {
        const inputValue = e.target.value;
        setPoint(inputValue);
        if (inputValue.length > 0) {
          formValidation.point = true;
        } else {
          formValidation.point = false;
        }
    };


    return (
        <div>
            {basket.length > 0 ? <div>
                <div>
                    <p className='otd'>Доставка:</p>
                    <p className='np'></p>
                </div>
                <div>
                    <div className='otd'>Данні отримувача:</div>
                    <p>Прізвище</p>
                        <input type="text" onChange={validLastName}/>
                    <p>Iм'я</p>
                        <input type="text" onChange={validName}/>
                    <p>Телефон</p>
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={handleInputChange}/>
                    <p>Місто</p>
                        <input type="text" onChange={validSity}/>
                    <p>Відділення</p>
                        <input type="text" onChange={validPoint}/>
                    <p>Коментар</p>
                        <input type="text" onChange={(e) => setComment(e.target.value)}/>
                    
                </div>
                <div className='btn-finish'>
                    <div onClick={toggleResult}>Підтвердити</div>
                </div> 
            </div> : <div>Ви не можете здійснити замовлення, оскільки в кошику немає товарів</div>}
        </div>    
    )
}

export default FormValid