import { Query } from '../index';

const getAll = async () => await Query('SELECT * FROM users');

const getOne = async (column: string, value: any) => await Query('SELECT * FROM users WHERE ?? = ?', [column, value]);

const post = async (valuesObj) => await Query('INSERT INTO users SET ?', [valuesObj]);

//const put = () => Query('', []);
//const deleter = () => Query('', []);

export default { getAll, getOne, post };