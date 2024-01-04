
import csurf from 'csurf';

// Middleware to enable CSRF protection
const csrfProtection = csurf({
    cookie: true,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
});

export default csrfProtection;
