// pages/api/appliances/[roomId].js
import { db } from '../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default async function handler(req, res) {
  const { roomId } = req.query;

  const appliancesCollection = collection(db, 'appliances');
  const appliancesQuery = query(appliancesCollection, where('roomId', '==', roomId));
  const appliancesSnapshot = await getDocs(appliancesQuery);
  const appliances = appliancesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  res.status(200).json(appliances);
}
