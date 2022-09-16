import {Route, NavLink} from 'react-router-dom';
import './components/newsAll/newsAll.module.css'
import React, {useEffect, useState} from 'react' ;
import axios from 'axios';
import Header from './components/header/header';
import NewsAll from './components/newsAll/newsAll';
import Footer from './components/footer/footer';
import './App.css';
import Contacts from './components/contacts/contacts';
import OneNews from './components/oneNews/oneNews';


const useFetch = () => {
    const [data, updateDate] = useState(null);
    const requestUrl = 'http://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=fa4e0b2181f14097bce7d262764256d7';

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(requestUrl);
            updateDate(response.data.articles);
        }
        fetchData();
    }, []);
    return data;
}


function App() {
    const result = useFetch();


    return (


        <div className="App">

            <Header/>

            <Route

                path="/"
                exact

                render={() => <NewsAll
                    all="6"
                    title="Всегда"
                    title2="свежие "
                    title3="новости"
                    newsOnAll={result}
                />}
            />

            <Route
                path="/News"
                exact
                render={() => <NewsAll
                    all="12"
                    title="Быть"
                    title2="в курсе"
                    title3="событий"
                    newsOnAll={result}
                />}
            />
            <Route
                path="/Contacts"
                exact
                component={Contacts}
            />

            <Route
                path="/News/:name"
                exact
                component={OneNews}

            />

            <Footer />
        </div>
    );
}

export default App;
