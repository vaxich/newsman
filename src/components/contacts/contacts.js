import React from 'react';
import style from './contacts.module.css'
import styleContainer from "../style/container.module.css";

const Contacts = () => {
    return (
        <div className={styleContainer.container}>
            <h3 className={style.contactTitle}>Get in <span className={style.contactSpan}>Touch</span></h3>
            <div className={ style.contactBlock }>
                <div className={style.contactContainerForm}>
                    <div className={style.contactLeft}>


                        <div className={style.contactList}>

                            <span  className={ ` ${style.contactListSpan} ${style.contactListSpanOne}`   }>Краснодарский Край, Россия</span>
                        </div>


                        <div className={style.contactList}>

                            <span className={ ` ${style.contactListSpan} ${style.contactListSpanTwo}`   }>+7 918 100 08 66</span>
                        </div>


                        <div className={style.contactList}>

                            <span className={ ` ${style.contactListSpan} ${style.contactListSpanThree}`   }>vaxich@rambler.ru</span>
                        </div>

                        <div className={style.contactList}>
                            <i></i>
                            <span className={ ` ${style.contactListSpan} ${style.contactListSpanFour}`   }>@vaxich</span>
                        </div>

                    </div >
                    <div className={style.contactRight}>
                        <form className={style.contactForm}>
                            {/*<div className={style.contactNameEmail}>*/}
                            {/*    <input className={style.contactInput} type="text" name="name" placeholder={"name"}/>*/}
                            {/*    <input className={style.contactInput} type="e-mail" name="name" placeholder={"e-mail"}/>*/}
                            {/*</div>*/}



                            {/*<textarea className={style.contactTextarea} placeholder={"Your message"} />*/}
                            <div className={style.contactButtonContainer}>
                                {/*<input  className={style.contactBotton} type="submit" value="Отправить" />*/}
                                <a className={style.contactBotton} href="mailto:vaxich@rambler.ru?subject=Сообщение с сайта">Отправить мне письмо</a>
                            </div>

                        </form>
                    </div>
                </div>





            </div>



        </div>
        
    )
}

export default Contacts;