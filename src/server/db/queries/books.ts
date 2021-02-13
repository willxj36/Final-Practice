import { Query } from '../index';

const getAll = async () => await Query('SELECT * FROM books');

const getOne = async (column: string, value: number) => await Query('SELECT * FROM books WHERE ?? = ?', [column, value]);

const post = async (valuesObj: any) => {
    let [response] = await Query('INSERT INTO books SET ?', [valuesObj]);
    return response;
}

const put = async (valuesObj: any, id: number) => await Query('UPDATE books SET ? WHERE id = ?', [valuesObj, id]);

const deleter = async (id: number) => await Query('DELETE FROM books WHERE id = ?', [id]);

export default { getAll, getOne, post, put, deleter };