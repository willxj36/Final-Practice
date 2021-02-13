import * as React from 'react';
import { useState, useEffect } from 'react';
import apiService from '../../utils/apiService';
import { Book } from '../../utils/models';

const Books = () => {

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        (async () => {
            let url = '/api/books';
            let books = await apiService(url);
            setBooks(books);
        })();
    }, []);

    return(
        <div>
            {books.map(book => (
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">{book.title}</h1>
                        <h3 className="card-subtitle">{book.author}</h3>
                        <p className="card-text">{book.category}</p>
                        <p className="card-text">${book.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default Books;