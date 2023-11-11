//@ts-nocheck
"use client"
import React, { useState } from 'react';
import styles from "@/styles/appliance.module.css";
import { BiArrowBack } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";
import Remote from "./remote";
import { IoIosBed } from "react-icons/io";
import { FaKitchenSet } from "react-icons/fa6";
import { MdDining } from "react-icons/md";
import { BiChair } from "react-icons/bi";
import { BiCloset } from "react-icons/bi";
import { PiToiletFill } from "react-icons/pi";
import Link from 'next/link';

const Appliance = () => {
  const rooms = [
    {
      name: 'Bedroom',
      icon: <IoIosBed />,
      appliances: ['Bulb 1', 'Bulb 2', 'Fan 1'],
    },
    {
      name: 'Kitchen',
      icon: <FaKitchenSet />,
      appliances: ['Bulb 3', 'Microwave', 'Refrigerator'],
    },
    {
      name: 'Toilet',
      icon: <PiToiletFill/>,
      appliances: ['Toilet Light', 'Mirror Light'],
    },
    {
      name: 'Dining',
      icon: <MdDining />,
      appliances: ['Chandelier', 'Table Light'],
    },
    {
      name: 'Varanda',
      icon: <BiChair />,
      appliances: ['Outdoor Light'],
    },
    {
      name: 'closet',
      icon: <BiCloset />,
      appliances: ['Outdoor Light'],
    },
    
    {
      name: 'A room',
      icon: <IoIosBed />,
      appliances: ['Bulb 1', 'Bulb 2', 'Fan 1'],
    },
    {
      name: 'B room',
      icon: <IoIosBed />,
      appliances: ['Bulb 3', 'Microwave', 'Refrigerator'],
    },
    {
      name: 'C room',
      icon: <IoIosBed />,
      appliances: ['Toilet Light', 'Mirror Light'],
    },
    {
      name: 'D room',
      icon: <IoIosBed />,
      appliances: ['Chandelier', 'Dining Table Light'],
    },
    {
      name: 'Varanda',
      icon: <BiChair />,
      appliances: ['Outdoor Light'],
    },
    {
      name: 'closet',
      icon: <BiCloset />,
      appliances: ['Outdoor Light'],
    },
    
    {
      name: 'A room',
      icon: <IoIosBed />,
      appliances: ['Bulb 1', 'Bulb 2', 'Fan 1'],
    },
    {
      name: 'B room',
      icon: <IoIosBed />,
      appliances: ['Bulb 3', 'Microwave', 'Refrigerator'],
    },
    {
      name: 'C room',
      icon: <IoIosBed />,
      appliances: ['Toilet Light', 'Mirror Light'],
    },
    {
      name: 'D room',
      icon: <IoIosBed />,
      appliances: ['Chandelier', 'Dining Table Light'],
    }
  ];
  const [add, setAdd] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedAppliance, setSelectedAppliance] = useState(null);
  const [select, setSelect] = useState(true);
  const [controller, setController] = useState(true);

  const [formData, setFormData] = useState({
    room: '',
    appliance: '',
    connectionNumber: ''
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  function handleRoomClick(room) {
    setSelectedRoom(room);
    setSelect(true);
  }
  function handleApplianceClick(appliance) {
    setSelectedAppliance(appliance);
    setController(!controller);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);


    setAdd(false);
  };
  return (
    <div className={styles.appliance} id='appliance'>
    
      <div className={styles.back}>
      <Link href="/" passHref>
        <BiArrowBack className={styles.backarrow} />
        </Link>
      </div>
   

    <div className={styles.appcontent}>
      {rooms.map((room, index) => (
        <div
          className={styles.card}
          key={index}
          onClick={() => handleRoomClick(room)}
        >
          {room.icon}
          <p>{room.name}</p>
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