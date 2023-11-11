//@ts-nocheck
"use client"
import { useState, useEffect } from 'react';
import styles from "@/styles/appliance.module.css";
import { BiArrowBack } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";
import Remote from "./remote";
import Link from 'next/link';
import Room from './room';
import Add from './add';
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

  return (
    <div className={styles.appliance} id='appliance'>

      <div className={styles.back}>
        <Link href="/" passHref>
          <BiArrowBack className={styles.backarrow} />
        </Link>
      </div>
      <div className={styles.add} onClick={() => setAdd(!add)}>
        <GrAdd className={styles.addbut} />
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
          
          <Room room={selectedRoom} />
        </div>
      )}

      

      {add && (
        <div className={styles.addform}>

          <Add />
        </div>
      )}

      {selectedAppliance && controller && (
        <div className={styles.remote}>
          <Remote appliance={selectedAppliance} />
        </div>
      )}
    </div>
  );
}

export default Appliance;
