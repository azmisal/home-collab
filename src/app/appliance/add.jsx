"use client"
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config'; // Make sure you have the correct path to your firebase config
import styles from "@/styles/appliance.module.css";





const Add = () => {

    const [formData, setFormData] = useState({
        room: '',
        appliance: '',
        connectionNumber: '',
        type: '', // Add an initial value here
        status: 1,
      });
      

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };


      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const docRef = await addDoc(collection(db, "appliances"), {
            room: formData.room,
            appliance: formData.appliance,
            connectionNumber: formData.connectionNumber,
            type: formData.type,
            status:1,
          });
        //   setFormData('');
          alert("Document written with ID: " + docRef.id);
          setAdd(false)
        } catch (e) {
          alert("Error adding document: " + e);
        }
      };




  return (
    <div className={styles.add}>
        <form onSubmit={handleSubmit} className={styles.forms}>
            <input
              className={styles.input}
              placeholder='Room Name'
              type='text'
              name='room'
              value={formData.room}
              onChange={handleInputChange}
            />

            <input
              className={styles.input}
              type='text'
              placeholder='Appliance Name'
              name='appliance'
              value={formData.appliance}
              onChange={handleInputChange}
            />

            <input
              className={styles.input}
              type='number'
              placeholder='Connection'
              name='connectionNumber'
              value={formData.connectionNumber}
              onChange={handleInputChange}
            />

            <select
              className={styles.input}
              name='type'
              value={formData.type}
              onChange={handleInputChange}
            >
        <option value=''>Select Room Type</option>
        <option value='bedroom'>Bedroom</option>
        <option value='diningHall'>Dining Hall</option>
        <option value='bathroom'>Bathroom</option>
        <option value='kitchen'>Kitchen</option>
        <option value='varanda'>Varanda</option>
        <option value='office'>Office</option>
        <option value='stairs'>Stairs</option>
        <option value='basement'>Basement</option>
        <option value='outdoors'>Outdoors</option>
        <option value='other'>Other</option>   
            </select>

            <button type='submit' className={styles.submit}>
              Submit
            </button>
          </form>
    </div>
  )
}

export default Add;