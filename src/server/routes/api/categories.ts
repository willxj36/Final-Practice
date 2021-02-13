import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.get('/', async (req, res) => { //all other methods same, just change router.method
    let name = req.body.name;
    try{
        let categories = await db.Categories.getAll();
        res.json(categories);
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

export default router;