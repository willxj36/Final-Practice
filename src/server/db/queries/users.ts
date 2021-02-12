import { Query } from '../index';

const getAll = () => Query('', []);
const getOne = () => Query('', []);
const post = () => Query('', []);
//const put = () => Query('', []);
//const deleter = () => Query('', []);

export default { getAll, getOne, post };