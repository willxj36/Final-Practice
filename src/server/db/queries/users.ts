import { Query } from '../index';
import { User } from '../../../utils/models';

const getAll = async () => await Query('SELECT * FROM users');

const getOne = async (column: string, value: any) => await Query('SELECT * FROM users WHERE ?? LIKE ?', [column, value]);

const post = async (user: User) => await Query('INSERT INTO users SET ?', [user]);

//const put = () => Query('', []);
//const deleter = () => Query('', []);

export default { getAll, getOne, post };