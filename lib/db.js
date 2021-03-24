import firebase from '../lib/firebase';

const firestore = firebase.firestore()

export const CreateSite = async (data) => {
    const res = await firestore.collection('sites').add({
      link: data.siteLink,
      name: data.siteName
    });
}
