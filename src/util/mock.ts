import faker from 'faker';

// =========== for development purpose only ===========

const createUserRadomArr = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    bio: faker.lorem.sentence(),
    image: faker.image.avatar(),
  };
};

// mock random array

export const mockArr = (numUsers = 5) => {
  const getArr = Array.from({ length: numUsers }, createUserRadomArr);
  // tslint:disable-next-line: no-console
  console.log('mock Arr', getArr);
  return getArr;
};

// mock random obj

export const mockObj = () => {
  const object = faker.helpers.createCard();
  // tslint:disable-next-line: no-console
  console.log('mock Obj', object);
  return object;
};
