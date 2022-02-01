module.exports = {
    BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 5,
    NODE_ENV: process.env.NODE_ENV || 'development',
    JWT_SECRET: process.env.JWT_SECRET || 'This is a not so secret secret that secretly secretes secret information in secrecy',
  }