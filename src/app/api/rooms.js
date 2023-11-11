import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

export default async function handler(req, res) {
  try {
    const roomsCollection = collection(db, 'appliance');
    const roomsSnapshot = await getDocs(roomsCollection);
    const rooms = roomsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    res.status(200).json(rooms);
  } catch (error) {
    console.error('Error fetching rooms:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}