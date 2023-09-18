import session from 'express-session';
import SessionDB from 'connect-pg-simple';
import client from '../database.js';

const SessionInstance = SessionDB(session);

const sessionMiddleware = session({
  store: new SessionInstance({
    pool: client,
    tableName: 'sessions',
  }),
  secret: 'seu_segredo',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

export default sessionMiddleware; 