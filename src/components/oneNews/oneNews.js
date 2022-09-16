import React from 'react';
import {withRouter} from 'react-router-dom';
import style from './OneNews.module.css';
import styleContainer from "../style/container.module.css";

const OneNews = props => {

    return (
        <div className={styleContainer.container}>
            <div className="OneNews__block">
                <h2 >{props.match.params.name}   </h2>
                <h4>{props.location.state.description  }</h4>
                <img className={style.OneNews__img} src={props.location.state.image }/>
                <h4>{props.location.state.author}</h4>
                <h4>{props.location.state.published_at.substr(0, 10)}</h4>


            </div>
        </div>

    )
}

export default withRouter(OneNews);