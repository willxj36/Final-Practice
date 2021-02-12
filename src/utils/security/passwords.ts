import * as bcrypt from 'bcrypt';

export const hashPass = (password: string) => { //just takes a password and turns it into a hash
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

export const comparePass = (password: string, hash: string) => { //only used in the local strategy, hash is pulled from db
    return bcrypt.compareSync(password, hash);
}