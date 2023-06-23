import './FormToOrder.scss'
import { useEffect, useState } from 'react';
import FormValid from './FormValid';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const FormToOrder = () => {

    const [ resultForm, setResultForm ] = useState(false)
    const [formValidation, setFormValidation] = useState({
        name: false,
        lastName: false,
        phone: false,
        sity: false,
        point: false,
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const toggleResult = () => {
        const {name, lastName, phone, sity, point} = formValidation
        if (name && lastName && phone && sity && point) {
            setResultForm(true)
        }
    }

    return (
        <div className='form-to-order'>

            {!resultForm ? <FormValid toggleResult={toggleResult} formValidation={formValidation}/> : <div>
                <div className='success'> <AiOutlineCheckCircle className='success-icon'/>
                    Замовлення успішно відправленно, наш менеджер зв'яжеться з вами на протязі дня!
                </div> 
                
                <Link to='/'>
                    <button className='btn-tohome'>На головну</button>
                </Link>
                
            </div>}


        </div>    
    )
}

export default FormToOrder