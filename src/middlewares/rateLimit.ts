import rateLimit from 'express-rate-limit';

const TIME_LIMIT = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 100;

const limiter = rateLimit({
  windowMs: TIME_LIMIT,
  max: MAX_REQUESTS,
  message: 'Too many requests, please try again later.',
});

export default limiter;
