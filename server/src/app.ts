import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import expressValidator from 'express-validator';
import passport from 'passport';
import localStrategy from './auth/local';
import jwtStrategy from './auth/jwt';
import config from './config';
import registerRouter from './routes';
const app = express();

app.use(cors({
  origin: config.clientUrl,
  methods: ['GET', 'POST', 'DELETE'],
}));
app.use(express.json());
app.use(expressValidator());
app.use(morgan('common'));
app.use(passport.initialize());

passport.use(localStrategy);
passport.use(jwtStrategy);

registerRouter(app);

export default app;
