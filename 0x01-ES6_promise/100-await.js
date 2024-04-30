//unction named asyncUploadUser that will call these two functions
//and return an object with the following format:
import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
};

export default asyncUploadUser;
