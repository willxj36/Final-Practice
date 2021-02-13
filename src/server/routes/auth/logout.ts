import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.get('/:id', async (req: any, res) => { //all other methods same, just change router.method
    try {
        let response = await db.Tokens.deleter(req.params.id);
        req.logout();
        res.json(response);
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

export default router;