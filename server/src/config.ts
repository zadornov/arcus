const config = {
  port: 8080,
  clientUrl: process.env.BASE_URL || "http://localhost:3000", 
  db: {
    prod: process.env.DATABASE_URL || 'mongodb://localhost/reddit',
    test: process.env.DATABASE_URL || 'mongodb://localhost/reddit_test',
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d'
  }
};

export default config;