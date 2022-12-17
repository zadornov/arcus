import { faker } from '@faker-js/faker';

export const validUser = () => ({
  username: faker.name.firstName(),
  password: 'password'
});

export const validPost = (author, category) => ({
  title: faker.lorem.sentence(),
  url: faker.internet.url(),
  category,
  author,
  type: 'link'
});
