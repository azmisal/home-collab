"use client"
import React, { useState,useEffect } from 'react';
import styles from "@/styles/remote.module.css";
import { FiPower } from "react-icons/fi";
import axios from 'axios';


const Remote = (props) => {
  const [state, setState] = useState(null);
  const Number  = props;
  const connectionNumber = Number.appliance;
  const [appliance, setAppliance] = useState(null);

  useEffect(() => {
    const fetchApplianceData = async () => {
      await axios.post("/api/appliances",{option:3,connectionNumber})
      .then(
        (res)=>{
          console.log(res);
          setAppliance(res.data.appliancesData);
          setState(res.data.appliancesData[0].status);
        }
      )};
    fetchApplianceData();
  }, [connectionNumber]);


async function update(val){
  await axios.post("/api/appliances",{option:4 , connectionNumber,val})
  .then(
    (res)=>{
        if(res.data.status==1){
          setState(val);
          appliance[0].status = val;
        }
      
    }
  )
}

  function handleSwitch() {
    if(appliance[0].status === 1){
      const val = 0;
      update(val);
    }
    else if(appliance[0].status === 0){
      const val = 1;
      update(val);

    }
    else{
      alert("Device is not working");
    }
  }

  const check = async () => {
      try {
          if (appliance) {
              const status = appliance.status;
              console.log(status);

              if (status === -1) {
                  alert("It's broken!");
              } else {
                  alert("Condition check passed!");
              }
          }
      } catch (error) {
          console.error('Error checking condition:', error);
      }
  };

  return (
      <div className={styles.controller}>
          {appliance && appliance.length > 0 &&(
              <>
                   <h1 className="ch1">{appliance[0].appliance}</h1>
                  
                  <FiPower className={styles.power} onClick={handleSwitch} />
                  <h3>state: {state === 1 ? 'on' : state === 0 ? 'off' : 'not Responding'}</h3>
                  <button className={styles.check} onClick={check}>Condition check</button>
              </>
          )}
      </div>
  );
}

export default Remote;
