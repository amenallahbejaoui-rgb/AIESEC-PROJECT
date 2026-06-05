const jwt = require('jsonwebtoken');
const refreshVerifyToken = require('./refreshVerifyToken'); // Adjust the path accordingly

// Convert the secret key to base64 encoding
const base64EncodedSecret = Buffer.from('securedkeymustbeverylongorgetbug69').toString('base64');
console.log('Base64 Encoded Secret:', base64EncodedSecret);

function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  console.log('Incoming token:', token);

  jwt.verify(token, base64EncodedSecret, (err, decoded) => {
    if (err) {
      console.log('Error during token verification:', err);

      if (err.name === 'TokenExpiredError') {
        // Attempt to refresh the token
        return refreshVerifyToken(req, res, next);
      }

      if (err.name === 'JsonWebTokenError') {
        console.log('Invalid token error:', err);
        console.log('Used token:', token);
        return res.status(401).json({ error: 'Invalid token' });
      }

      console.log('Authentication failed:', err);
      return res.status(401).json({ error: 'Authentication failed' });
    }

    req.user = decoded;
    console.log('Token verification successful. Decoded user:', decoded);

    next();
  });
}

module.exports = verifyToken;
