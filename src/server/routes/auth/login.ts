import * as express from 'express';
import * as passport from 'passport';
import { createToken } from '../../../utils/security/tokens';

const router = express.Router();

router.post('/', passport.authenticate('local'), async (req: any, res) => { //all other methods same, just change router.method
    try {
        console.log(req.user);
        let token = await createToken({ userid: req.user.id });
        res.json({
            token,
            role: req.user.role,
            userid: req.user.id
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'failed at the router'});
    }
})

export default router;