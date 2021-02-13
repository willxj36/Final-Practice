import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';

import db from '../../server/db';
import { Payload } from '../models';
import config from '../../server/config';

export const createToken = async (payload: Payload) => {
    let tokenid: any = await db.Tokens.post(payload.userid);
    payload.accesstokenid = tokenid.insertId;
    payload.unique = crypto.randomBytes(32).toString('hex');
    let token = jwt.sign(payload, config.auth.secret);
    await db.Tokens.put(payload.accesstokenid, token);
    return token;
}

export const validToken = async (token: string) => {
    let payload: Payload = <Payload>jwt.decode(token);
    let [accesstokenid] = await db.Tokens.getOne(payload.accesstokenid, token);
    if(!accesstokenid) {
        throw new Error('Invalid Token');
    } else {
        return payload;
    }
}