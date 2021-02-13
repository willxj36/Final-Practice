import { Query } from '../index';

//const getAll = () => Query('', []);
const getOne = async (id: number, token: string) => await Query('SELECT * FROM tokens WHERE id = ? AND token = ?', [id, token]);
const post = async (userid: number) => await Query('INSERT INTO tokens SET userid = ?', [userid]);
const put = async (id: number, token: string) => await Query('UPDATE tokens SET token = ? WHERE id = ?', [token, id]);
const deleter = async (userid: number) => Query('DELETE FROM tokens WHERE userid = ?', [userid]);

export default { getOne, post, put, deleter };