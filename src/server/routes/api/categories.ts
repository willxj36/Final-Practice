import * as express from 'express';
import db from '.,/../db';

const router = express.Router();

router.get('/:id?', (req, res) => { //all other methods same, just change router.method
    let id = req.params.id;
    try {
        if(id) {
    
            res.json({message: 'test get one'});
        } else {

            res.json({message: 'test get all'})
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

export default router;