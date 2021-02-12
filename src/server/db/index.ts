import mysql from 'mysql';
import config from '../config';

import Books from './queries/books';
import Categories from './queries/categories';
import Users from './queries/users';
import Tokens from './queries/tokens';

const pool = mysql.createPool(config.mysql);

export const Query = (query: string, values?: any) => {
    new Promise <Array<any>>((resolve, reject) => {
        pool.query(query, values, (err, results) => {
            err ? reject(err) : resolve(results);
        })
    })
};

export default {
    Books,
    Categories,
    Users,
    Tokens
}