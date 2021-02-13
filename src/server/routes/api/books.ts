import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.get('/:id?', async (req, res) => { //all other methods same, just change router.method
    try {
        let id = Number(req.params.id);
        if(id) {
            let [book] = await db.Books.getOne('id', id)
            let category = await db.Categories.getOne(book.categoryid)
            book.category = category;
            res.json(book);
        } else {
            let books = await db.Books.getAll();
            books.forEach(async(book) => {
                let category = await db.Categories.getOne(book.categoryid);
                book.category = category;
            })
            res.json(books);
        }
        res.json({message: 'test success'});
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

router.post('/', async (req, res) => { //all other methods same, just change router.method
    try {
        let valuesObj = req.body;
        let response = await db.Books.post(valuesObj);
        res.json({id: response.insertId, message: 'test success'});
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

router.put('/:id', async (req, res) => { //all other methods same, just change router.method
    try {
        let id = Number(req.params.id);
        let valuesObj = req.body;
        let response = await db.Books.put(valuesObj, id);
        res.json({response, message: 'test success'});
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

router.delete('/:id', async (req, res) => { //all other methods same, just change router.method
    try {
        let id = Number(req.params.id);
        let response = await db.Books.deleter(id);
        res.json({response, message: 'test success'});
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

export default router;