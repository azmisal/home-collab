"use client"
import React, { useState } from 'react';
import styles from "@/styles/remote.module.css";
import { FiPower } from "react-icons/fi";
const Remote = (props) => {
  const [state, setState] = useState("Off");
  function handleSwitch() {
    if (state === "Off") {
      setState("On");
    }
    else{
      setState("Off");
    }
  }
  return (
    <div className={styles.controller}>
<div className={styles.back} onClick={() => setController(false)}>
            <BiArrowBack className={styles.backarrow} />
          </div>
      <h1 className="ch1">{props.appliance}</h1>
      <FiPower className={styles.power} onClick={handleSwitch} />
      <h3>state : {state}</h3>
      <button className={styles.check}>Condition check</button>
    </div>

  )
}

export default Remote;