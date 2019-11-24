import path from 'path';
import express from 'express';

import router from './router';
import { errors } from './middleware';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));
app.use(router);
app.use(errors.unknownRoute);
app.use(errors.internalError);

export default app;
