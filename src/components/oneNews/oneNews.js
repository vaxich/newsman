import React from 'react';
import {withRouter} from 'react-router-dom';
import style from './OneNews.module.css';
import styleContainer from "../style/container.module.css";

const OneNews = props => {
    
    return (
        <div className={styleContainer.container}>
            <div className="OneNews__block">
                <h2 >{props.match.params.name}   </h2>
                <h4>{props.location.state.content}</h4>
                <img className={style.OneNews__img} src={props.location.state.urlToImage}/>
                <h4>{props.location.state.author}</h4>
                <h4>{props.location.state.publishedAt}</h4>


            </div>
        </div>

    )
}

export default withRouter(OneNews);