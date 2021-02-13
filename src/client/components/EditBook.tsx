import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import apiService from '../../utils/apiService';
import { Book, Category } from '../../utils/models';

const EditBook = () => {

    const { id } = useParams<{ id: string }>();

    const history = useHistory();

    const [book, setBook] = useState<Book>();
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [categories, setCategories] = useState<Category[]>([]);
    const [category, setCategory] = useState<string>('');

    useEffect(() => {
        (async () => {
            let url = `/api/books/${id}`;
            let book = await apiService(url);
            setBook(book);

            let urlCat = '/api/categories';
            let categories = await apiService(urlCat);
            setCategories(categories);
        })();
    }, [id]);

    useEffect(() => {
        setTitle(book?.title);
        setAuthor(book?.author);
        setPrice(book?.price);
        setCategory(book?.category);
    }, [book])

    useEffect(() => {
        let role: any = localStorage.getItem('role');
        if(role == null || role !== 'admin') {
            history.replace('/books');
        }
    }, []);

    const handleEdit = async () => {
        let url = `/api/books/${id}`;
        let res = await apiService(url, 'PUT', {
            title,
            author,
            price,
            category
        })
        res ? alert('edited') : alert('failed');
        history.push(`/books/${id}`);
    }

    if (book) {
        return (
            <div>
                <label htmlFor="title">Title</label>
                <input value={title} onChange={(e) => setTitle(e.currentTarget.value)} type="text" name="title" id="title" />
                <label htmlFor="author">Author</label>
                <input value={author} onChange={(e) => setAuthor(e.currentTarget.value)} type="text" name="author" id="author" />
                <label htmlFor="price">Price</label>
                <input value={price} onChange={(e) => setPrice(Number(e.currentTarget.value))} type="text" name="price" id="price" />
                <label htmlFor="category">Category</label>
                <select onChange={(e) => setCategory(e.currentTarget.value)} name="category" id="category">
                    {categories.map(category => (
                        <option key={category.id} value={`${category.name}`}>{category.name}</option>
                    ))}
                </select>
                <button onClick={handleEdit} className="btn btn-primary">Submit Edit</button>
            </div>
        )
    } else {
        return null;
    }

}

export default EditBook;