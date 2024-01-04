
import session from 'express-session';
import connectMongo from 'connect-mongo';

const MongoStore = connectMongo(session);

// Middleware to configure session management
const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
});

export default sessionMiddleware;
