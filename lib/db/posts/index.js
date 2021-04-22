import { faker, arrayGenerator } from '../../helpers';

export const quantity = 30;

const fakePost = () => {
  const slug = faker.lorem.slug();
  const title = faker.lorem.sentence();
  const content = `<p>${faker.lorem.paragraphs(5, '</p><p>')}</p>`;
  const author = `${faker.name.firstName()} ${faker.name.lastName()}`;
  return {
    title, content, author, slug,
  };
};

export default arrayGenerator(quantity, fakePost);
