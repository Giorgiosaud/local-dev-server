import { faker, arrayGenerator } from '../../helpers';
import { quantity as postQty } from '../posts';

export const quantity = 300;

const fakePost = () => {
  const body = `<p>${faker.lorem.paragraphs(5, '</p><p>')}</p>`;
  const postId = faker.datatype.number({
    min: 0,
    max: postQty,
  });

  return {
    body, post_id: postId,
  };
};

export default arrayGenerator(quantity, fakePost);
