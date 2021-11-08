import React from "react";
import BookList from "../book-list";

const HomePage = () => {
    const books = [
        {id: 1,
         title: 'Producion-Ready Microservices',
         author: 'Susan J. Fowler'},
        {id: 2,
         title: 'Release it!',
         author: 'Michael T. Nygard'}
    ];
    return <div><BookList books={books}/></div>
}

export default HomePage