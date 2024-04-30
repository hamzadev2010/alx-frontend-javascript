import { uploadPhoto, createUser } from './utils';


export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, user]) => {
      console.log(`${photoResponse.body} ${user.firstName} ${user.lastName}`);
    })

    .catch(() => console.log('Signup system offline'));
}
