import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.get('/:id?', async (req, res) => { //all other methods same, just change router.method
    try {
        let id = Number(req.params.id);
        if(id) {
            let [user] = await db.Users.getOne('id', id);
            res.json(user);
        } else {
            let users = await db.Users.getAll();
            res.json(users);
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

router.post('/', async (req, res) => { //all other methods same, just change router.method
    try {
        let valuesObj = req.body;
        let response = await db.Users.post(valuesObj);
        res.json(response);
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

export default router;