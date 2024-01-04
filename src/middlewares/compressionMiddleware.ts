
import compression from 'compression';

// Middleware to enable gzip compression on responses
const compressionMiddleware = compression();

export default compressionMiddleware;
