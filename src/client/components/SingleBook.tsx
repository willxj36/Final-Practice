import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import apiService from '../../utils/apiService';
import { Book } from '../../utils/models';

const SingleBook = () => {

    const history = useHistory();

    const { id } = useParams<{id: string}>();

    const [book, setBook] = useState<Book>();

    useEffect(() => {
        (async () => {
            let url = `/api/books/${id}`
            let book = await apiService(url);
            console.log(book);
            setBook(book);
        })();
    }, [id]);

    const handleDelete = async () => {
        let url = `/api/books/${id}`;
        let res = await apiService(url, 'DELETE');
        if(res) {
            alert('deleted')
            history.push('/books');
        } else {
            alert('failed');
        }
    }

    if(book) {
        return(
            <>
                <div>
                    <h1>{book.title}</h1>
                    <h3>{book.author}</h3>
                    <p>${book.price}</p>
                    <p>{book.category}</p>
                </div>
                <div>
                    <Link to={`/books/${id}/update`} className="btn btn-primary">Edit this Info</Link>
                    <button onClick={handleDelete} className="btn btn-danger">Delete Book</button>
                </div>
            </>
        )
    } else {
        return null;
    }
}

export default SingleBook;