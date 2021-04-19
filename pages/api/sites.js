import db from '../../lib/firebase-admin';

export default async (req, res) => {
  // console.log(req.cookies.user);
  const user = req.cookies.user;
  const parsedUser = JSON.parse(user);
  const userId = parsedUser.userId;
  console.log(userId);

  const snapshot = await db.collection('sites')
    .where('owner', '==', userId)
    .get();

  const sites = [];

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  res.status(200).json({ sites });
};
