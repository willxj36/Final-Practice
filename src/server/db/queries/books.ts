import { Query } from '../index';

const getAll = async () => await Query('SELECT b.id, b.title, b.author, b.price, c.name as category FROM books b JOIN categories c ON c.id = b.categoryid');

const getOne = async (column: string, value: number) => await Query('SELECT * FROM books WHERE ?? = ?', [column, value]);

const post = async (title: string, author: string, price: number, category: string) => {
    let [response] = await Query('INSERT INTO books SET title = ?, author = ?, price = ?, categoryid = (SELECT id FROM categories WHERE name LIKE ?)', [title, author, price, category]);
    return response;
}

const put = async (title: string, author: string, price: number, category: string, id: number) => (
    await Query('UPDATE books SET title =?, author = ?, price = ?, categoryid = (SELECT id FROM categories WHERE name LIKE ?) WHERE id = ?', [title, author, price, category, id])
);

const deleter = async (id: number) => await Query('DELETE FROM books WHERE id = ?', [id]);

export default { getAll, getOne, post, put, deleter };