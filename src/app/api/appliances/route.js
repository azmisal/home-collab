// import { collection, getDocs } from 'firebase/firestore';
import { collection, getDocs, where, query,doc,updateDoc,docRef } from 'firebase/firestore';

import { db } from '../../firebase/config';
import { NextResponse } from 'next/server';
export async function POST(request) {
    const reqBody = await request.json();
    const filterUniqueRooms = (data, key) => {
        const uniqueKeys = new Set();
        return data.filter((item) => {
            if (!uniqueKeys.has(item[key])) {
                uniqueKeys.add(item[key]);
                return true;
            }
            return false;
        });
    };
    switch (reqBody.option) {
        case 1: {
            try {
                const querySnapshot = await getDocs(collection(db, 'appliances'));
                const roomsData = querySnapshot.docs.map((doc) => doc.data());
                const uniqueRooms = filterUniqueRooms(roomsData, 'room');
                console.log({ uniqueRooms });
                return NextResponse.json({ uniqueRooms })
            } catch (error) {
                console.error('Error fetching rooms:', error);
                return NextResponse.json({ err })

            }
        }
        case 2:{
            const select = reqBody.param;
            try {
                const q = query(collection(db, 'appliances'), where('room', '==', select));
                const querySnapshot = await getDocs(q);
                const appliancesData = querySnapshot.docs.map((doc) => doc.data());
                return NextResponse.json({ appliancesData })
            } catch (error) {
                console.error('Error fetching appliances:', error);
                return NextResponse.json({error})
            }
        }
        case 3:{
            const select = reqBody.connectionNumber;
            try {
                
                const q = query(collection(db, 'appliances'), where('connectionNumber', '==', select));
                const querySnapshot = await getDocs(q);
                const appliancesData = querySnapshot.docs.map((doc) => doc.data());
                return NextResponse.json({appliancesData})
                
            } catch (error) {
                console.error('Error fetching appliances:', error);
                return NextResponse.json({error})
            }
        }
        case 4:{
            const select = reqBody.connectionNumber;
            const val = reqBody.val;
            try {
                const queryRef = query(collection(db, "appliances"), where("connectionNumber", "==", select));
                const docSnapshot = await getDocs(queryRef);
            
                if (docSnapshot.size > 0) {
                  const docRef = docSnapshot.docs[0].ref;
                  await updateDoc(docRef, {
                    status: val,
                  })

                return NextResponse.json({status: 1});

                } else {
                  console.log("No matching documents found.");
                return NextResponse.json({status: 0});

                }
              } catch (error) {
                console.error('Error updating document:', error);
                return NextResponse.json(error);

              }
        }
        
    }
}






