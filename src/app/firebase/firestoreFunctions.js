import { collection, addDoc } from 'firebase/firestore';

import { db, auth } from './config'; 

const addApplianceToFirestore = async (applianceData) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error('User not authenticated.');
    }

    await db.collection('appliances').add({
      ...applianceData,
      userId: user.uid, 
    });
  } catch (error) {
    console.error('Error adding data to Firestore:', error);
    throw error; 
  }
};

export { addApplianceToFirestore };
