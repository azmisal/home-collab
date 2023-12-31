import React from 'react'
import styles from "@/styles/appliance.module.css";
import { BiArrowBack } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";
import Remote from './remote';
import { useEffect, useState } from 'react';
import axios from "axios";

const room = (props) => {

    const [appliances, setAppliances] = useState([]);
    const selectedRoom = props;
    const param = selectedRoom.room;
    const [remote, setRemote] = useState(false);
    const [select , setSelect] = useState('');


    useEffect(() => {
        const fetchAppliances = async () => {
            await axios.post("/api/appliances",{option:2 , param , userId})
            .then((res)=>{
                setAppliances(res.data.appliancesData)
            })
        };

        fetchAppliances();
    }, []);



    function handleClick(appliance){
        setSelect(appliance);
        setRemote(true);
    }



    return (
        <div className={styles.appcontent}>
            
            
            
            <div className={styles.slelectcards}>

                {appliances.map((appliance, index) => (
                   <div
                   className={styles.card}
                   key={index}
                onClick={()=>handleClick(appliance.connectionNumber)}
                 >
                   
                   <p>{appliance.appliance}</p>
                 </div>
                ))}

                
            </div>
            {remote && <div className={styles.remote}>
            <div className={styles.back} onClick={() => setRemote(false)}>
                <BiArrowBack className={styles.backarrow} />
            </div>
                    <Remote appliance={select}/>
            </div>
            }
        </div>
    )
}

export default room