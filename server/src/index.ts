import app from './app';
import mongoose from 'mongoose';
import config from './config';

export const connect = async url => {
  return await mongoose.connect(url, config.db.options);
};

if (require.main === module) {
  app.listen(config.port);
  connect(config.db.prod);
  mongoose.connection.on('error', console.log);
}
