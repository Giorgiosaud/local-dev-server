import { faker, arrayGenerator } from '../../helpers';

export const quantity = 100;

const fakeUser = () => {
  const name = faker.name.findName();
  const email = faker.internet.email(); // Rusty@arne.info
  return { name, email };
};

export default arrayGenerator(quantity, fakeUser);
