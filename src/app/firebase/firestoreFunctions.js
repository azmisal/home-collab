// firestoreFunctions.js
import { collection, addDoc } from 'firebase/firestore';
// firestoreFunctions.js

import { db, auth } from './config'; // Adjust the import path

const addApplianceToFirestore = async (applianceData) => {
  try {
    // Check if the user is authenticated
    const user = auth.currentUser;
    if (!user) {
      throw new Error('User not authenticated.');
    }

    // Add data to Firestore
    await db.collection('appliances').add({
      ...applianceData,
      userId: user.uid, // Associate the data with the user
    });
  } catch (error) {
    console.error('Error adding data to Firestore:', error);
    throw error; // Rethrow the error for the calling code to handle
  }
};

export { addApplianceToFirestore };
