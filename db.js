import firebase from './lib/firebase';

const firestore = firebase.firestore()

export const createSite = async (data, userUid) => {

  const siteToCreate = {
    name: data.siteName,
    link: data.siteLink,
    owner: userUid
  }

  const res = await firestore.collection('sites').add(siteToCreate);

}
