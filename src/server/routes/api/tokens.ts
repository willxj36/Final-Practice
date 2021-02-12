import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.get('/', (req, res) => { //all other methods same, just change router.method
    try {
        res.json({message: 'test success'});
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

router.post('/', (req, res) => { //all other methods same, just change router.method
    try {
        res.json({message: 'test success'});
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

router.put('/', (req, res) => { //all other methods same, just change router.method
    try {
        res.json({message: 'test success'});
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

router.delete('/', (req, res) => { //all other methods same, just change router.method
    try {
        res.json({message: 'test success'});
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})


export default router;