import firebase from '../lib/firebase';

const firestore = firebase.firestore();

export const CreateSite = async (data, userUid) => {
  console.log(data);
  console.log(userUid);

  const siteToCreate = {
      link: data.siteLink,
      name: data.siteName,
      author: userUid,
    };

  console.log(siteToCreate)
  const res = await firestore.collection('sites').add(siteToCreate);
};
