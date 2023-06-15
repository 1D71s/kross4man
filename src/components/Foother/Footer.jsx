import React from 'react';
import './Footer.css';
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-column">
                    <h3>Про нас</h3><br/>
                    <p>
                        <p>Відправки здійснюються щодня новою поштою. Доставка в середньому займає 1-2 дні</p><br/>
                        <p>У зв'язку з військовим становищем у нашій країні при відправці післяплатою береться мінімальна предоплата 120грн на доставку</p><br/>
                        <p>Частина коштів з кожного продажу йде на підтримку наших хлопців у ЗСУ</p>
                    </p>
                </div>
                <div className="footer-column">
                    <h3>Посилання</h3><br/>
                    <p className='cont-link'>
                        <a href="https://www.instagram.com/kross4man.ua/?igshid=MmJiY2I4NDBkZg%3D%3D"><GrInstagram className='insta'/></a>
                        <a href="https://rshopua.store/" className='ruha'>{}</a>
                    </p>
                </div>
            </div>
            <p className='pol'>БЕРЕЖІТЬ СЕБЕ ТА СВОЇХ БЛИЗЬКИХ. ПЕРМОГА ЗА НАМИ. СЛАВА УКРАЇНІ</p>
        </div>
    </footer>
  );
};

export default Footer;
