import db from '../../lib/firebase-admin';

export default async (req, res) => {

  const sites = [];
  //obtenir id utilisateurs
  console.log(typeof req.cookies.user)
  const user = req.cookies.user;
  const parsedUser = JSON.parse(user);
  const userId = parsedUser.id;

  //récuperer les sites
  const snapshot = await db.collection('sites')
    //.where('ownerID', '==', userId)
    .get();

  //afficher les sites que l'utilisateur à accès

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  res.status(200).json({ sites });
};
