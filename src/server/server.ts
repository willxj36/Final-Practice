import * as express from 'express';
import morgan from 'morgan';
import path from 'path';
import passport from 'passport';
import './middleware/localstrategy';
import './middleware/bearerstrategy';

import routes from './routes';

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(passport.initialize());
app.use(routes);
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
