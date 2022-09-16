import React from 'react';
import style from './newsAll.module.css';
import {withRouter} from 'react-router-dom';

import styleContainer from "../style/container.module.css";

const NewsAll = props => {

    let oneNews = props.newsOnAll && props.newsOnAll.filter((item, index) => {

            return index < props.all;

        }).map(item => {
            return (

                <div className={style.NewsAll__block} onClick={() => {

                    props.history.push('/News/' + item.title, item)

                }}>


                        <div>
                            <p className={style.NewsAllBlockTitle}>{item.title}  </p>
                        </div>

                        <div className={style.NewsAll__block__bottom}>
                            <p className={style.NewsAll__author}> {item.source.name} </p>
                            <p className={style.NewsAll__published}>{item.publishedAt.substr(0, 10)}  </p>
                        </div>


                </div>
            )
        })
    ;

    return (

        <div className={styleContainer.container}>
            <div>
                <p className={style.newsAllTitle}>{props.title}</p>
                <div className={style.newsAllTitle2}>
                    <p className={style.newsAllTitle}>{props.title2}</p>
                    <p className={` ${style.newsAllTitle} ${style.newsAllTitleBlue}`}>{props.title3}</p>
                </div>

            </div>

            <div className={style.newsAllMainBlock}>{oneNews}</div>
        </div>
    )
}

export default withRouter(NewsAll);