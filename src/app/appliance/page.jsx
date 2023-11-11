//@ts-nocheck
"use client"
import { useState, useEffect } from 'react';
import styles from "@/styles/appliance.module.css";
import { BiArrowBack } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";
import Remote from "./remote";
import Link from 'next/link';

const Appliance = () => {

  const [add, setAdd] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedAppliance, setSelectedAppliance] = useState(null);
  const [select, setSelect] = useState(true);
  const [controller, setController] = useState(true);





  const handleRoomClick = async (room) => {
    setSelectedRoom(room);
    setSelect(true);

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
      setFormData('');
      alert("Document written with ID: " + docRef.id);
      setAdd(false)
    } catch (e) {
      alert("Error adding document: " + e);
    }
  };

  return (
    <div className={styles.appliance} id='appliance'>

      <div className={styles.back}>
        <Link href="/" passHref>
          <BiArrowBack className={styles.backarrow} />
        </Link>
      </div>

      <h1 className={styles.applyh1}>Appliances</h1>
      <div className={styles.appcontent}>
        {appliances.map((room) => (
          <div
            className={styles.card}
            key={appliances.room}
            onClick={() => handleRoomClick(room)}
          >
            {/* {room.icon} */}
            <p>{appliances.room}</p>
          </div>
        ))}
      </div>

      {selectedRoom && select && (
        <div className={styles.controlSet}>
          <div
            className={styles.back}
            onClick={() => setSelect(false)}
          >
            <BiArrowBack className={styles.backarrow} />
          </div>

          <h2 className={styles.roomname}>{selectedRoom.name}</h2>

          <div className={styles.slelectcards}>
            {selectedRoom.appliances.map((appliance, index) => (
              <div
                className={styles.card}
                key={index}
                onClick={() => handleApplianceClick(appliance)}
              >
                {appliance}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={styles.add} onClick={() => setAdd(!add)}>
        <GrAdd className={styles.addbut} />
      </div>

      {add && (
        <div className={styles.addform}>
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

            {/* Selection box for the "type" field */}
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
      )}

      {selectedAppliance && controller && (
        <div className={styles.remote}>
          <div
            className={styles.back}
            onClick={() => setController(false)}
          >
            <BiArrowBack className={styles.backarrow} />
          </div>

          <Remote appliance={selectedAppliance} />
        </div>
      )}
    </div>
  );
}

export default Appliance;
