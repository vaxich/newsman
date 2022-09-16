import React from 'react';
import style from './footer.module.css';
import styleContainer from "../style/container.module.css";
const Footer = () => {
    return (
        <div className={styleContainer.container}>
            <div className ={style.footerMain}>
                <div >
                    <p>Новостник</p>
                    <p>Single Page Application</p>
                </div>
                {/*<div className = "footer-center">*/}
                {/*    <p>Дипломный проект</p>*/}
                {/*</div>*/}
                <div >
                    <p>Made by</p>
                    <p>Pavel Dedelyuk</p>
                </div>


            </div>
        </div>

        
    )
}

export default Footer;