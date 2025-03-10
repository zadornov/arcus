import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/user';

const localStrategy = new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ username });
    if (!user) return done(null, false, { message: 'user not found' });

    const valid = await user.isValidPassword(password);
    if (!valid) return done(null, false, { message: 'invalid password' });

    let j = user.toJSON();

    return done(null, j);
  } catch (err) {
    done(err);
  }
});

export default localStrategy;
