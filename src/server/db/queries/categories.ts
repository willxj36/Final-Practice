import { Query } from '../index';

const getAll = async () => await Query('SELECT * FROM categories');
const getOne = async (id: number) => await Query('SELECT name FROM categories WHERE id = ?', [id]);
//const post = () => Query('', []);
//const put = () => Query('', []);
//const deleter = () => Query('', []);

export default { getAll, getOne };