import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import style from "./header.module.css"
import styleContainer from "../style/container.module.css";
const Header = () => {
    return    (
        <div className={styleContainer.container}>
            <div className = {style.header_main}>
                <div className ={style.headerLeft}>Новостник</div>
                <ul className ={style.headerRight}>
                    <li><NavLink activeClassName = {'my-active'} exact to="/">Главная</NavLink></li>
                    <li><NavLink activeClassName = {'my-active'} exact to="/News">Новости</NavLink></li>
                    <li><NavLink activeClassName = {'my-active'} exact to="/Contacts">Контакты</NavLink></li>

                </ul>
            </div>
        </div>

        
    )
}

export default Header;