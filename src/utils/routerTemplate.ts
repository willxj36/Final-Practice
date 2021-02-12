import * as express from 'express';

const router = express.Router();

// index router.use('/path', pathRouter)

router.get('/', /*middleware?*/ (req, res) => { //all other methods same, just change router.method
    try {
        res.json({message: 'test success'});
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

export default router;