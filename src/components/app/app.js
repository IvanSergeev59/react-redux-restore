
import React from "react";
import "./app.css";
import {withBookstoreService} from '../hoc';
import { Routes, Route} from "react-router-dom";
import ShopHeader from "../shop-header";
import { CardPage, HomePage } from "../pages";

const App = ({bookstoreService}) => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
            <Routes>
                <Route path="/card" element = {<CardPage />} />
                <Route path="/" element = {<HomePage />} />
            </Routes>
        </main>
        )
};


export default withBookstoreService()(App);