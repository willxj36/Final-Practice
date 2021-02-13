import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import apiService from '../../utils/apiService';
import { Category } from '../../utils/models';

const AddBook = () => {

    const history = useHistory();

    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [categories, setCategories] = useState<Category[]>([]);
    const [category, setCategory] = useState<string>('');

    useEffect(() => {
        (async () => {
            let urlCat = '/api/categories';
            let categories = await apiService(urlCat);
            setCategories(categories);
        })();
    }, []);

    useEffect(() => {
        let role: any = localStorage.getItem('role');
        if(role == null || role !== 'admin') {
            history.replace('/books');
        }
    }, [categories]);

    const handleSubmit = async () => {
        let url = `/api/books/`;
        let res = await apiService(url, 'POST', {
            title,
            author,
            price,
            category
        })
        res ? alert('added') : alert('failed');
        history.push(`/books`);
    }

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
                <option value="default">-- Choose Category (required) --</option>
                {categories.map(category => (
                    <option key={category.id} value={`${category.name}`}>{category.name}</option>
                ))}
            </select>
            <button onClick={handleSubmit} className="btn btn-primary">Submit New Book</button>
        </div>
    )

}

export default AddBook;