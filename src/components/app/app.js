
import React from "react";
import "./app.css";
import {withBookstoreService} from '../hoc';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { CardPage, HomePage } from "../pages";

const App = ({bookstoreService}) => {
    console.log(bookstoreService.getBooks())
    return (
        <Routes>
            <Route path="/card" element = {<CardPage />} />
            <Route path="/" element = {<HomePage />} />
        </Routes>

        )
};


export default withBookstoreService()(App);