//@ts-nocheck
"use client"
import axios from "axios"
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
  const [rooms, setRooms] = useState([]);
  const userId = JSON.parse(localStorage.getItem('userId'));
  useEffect(() => {
    const fetchRooms = async () => {
      await axios.post("/api/appliances",{option:1,userId})
      .then((res)=>{
        console.log(res);
        setRooms(res.data.uniqueRooms);
      })
    };

    fetchRooms();
  }, []);
  
  





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
      <h1 className={styles.applyh1}>Rooms</h1>
      <div className={styles.appcontent}>
        {rooms.map((room,index) => (
          <div
            className={styles.card}
            key={index}
            onClick={() => handleRoomClick(room.room)}
          >
            
            <p>{room.room}</p>
          </div>
        ))}
      </div>


      {selectedRoom && select && (
        <div className={styles.controlSet}>
          <div className={styles.back} onClick={() => setSelect(false)}>
                <BiArrowBack className={styles.backarrow} />
            </div>
          <h1 className={styles.applyh1}>{selectedRoom}</h1>
          <Room room={selectedRoom} />
        </div>
      )}

      

      {add && (
        <div className={styles.addform}>

          <Add />
        </div>
      )}

      
    </div>
  );
}

export default Appliance;
