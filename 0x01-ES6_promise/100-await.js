//unction named asyncUploadUser that will call these two functions
//and return an object with the following format:
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser(){
  try {

    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
};
