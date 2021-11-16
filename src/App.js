import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter, Route } from "react-router-dom";

import CategoryContainer from "./components/Category/CategoryContainer";
import FavoritesContainer from "./components/Favorites/FavoritesContainer";
import FrontPageContainer from "./components/FrontPage/FrontPageContainer";
import Header from "./components/Header/Header";
import SearchResultContainer from "./components/SearchResult/SearchResultContainer";
import { initializeApp } from "./store/app";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeApp());
    }, []);

    return (
        <HashRouter>
            <div className="app-wrapper">
                <Header />
                <div>
                    <Route exact path="/" component={FrontPageContainer} />
                    <Route exact path="/search" component={SearchResultContainer} />
                    <Route path="/category/:categoryName" component={CategoryContainer} />
                    <Route path="/favorites" component={FavoritesContainer} />
                </div>
            </div>
        </HashRouter>
    );
};

export default App;
