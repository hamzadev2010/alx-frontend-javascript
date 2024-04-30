// function named handleProfileSignup. It should accept three arguments firstName (string),
//lastName (string), and fileName (string). The function should call the two other functions.
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((rs) => {
    const resu = [];
    for (const element of rs) {
      resu.push({ status: element.status, value: element.value || element.reason });
    }
    return resu;
  });
}
